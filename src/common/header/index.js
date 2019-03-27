import React from 'react';
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper,
    SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList
} from "./style";
import { CSSTransition } from "react-transition-group";
import { connect } from 'react-redux';
import { actionCreators } from "./store";

function Header(props) {
    const { focused, handleFocus, handleBlur } = props;

    const displaySearchInfoList = (show) => {
        if (show) {
            return (
                <SearchInfoList>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                </SearchInfoList>
            )
        }
    }
    return (
        <React.Fragment>
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登陆</NavItem>
                    <NavItem className='right'> <span className="iconfont">&#xe601;</span></NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames='slide'
                        >
                            <NavSearch
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                className={focused ? 'focus' : ''}>
                            </NavSearch>
                        </CSSTransition>
                        <span className={focused ? 'focus iconfont' : 'iconfont'}>&#xe600;</span>
                        <SearchInfo>
                            <SearchInfoTitle>
                                热门搜索
                            <SearchInfoSwitch>换一批</SearchInfoSwitch>
                            </SearchInfoTitle>
                            {displaySearchInfoList(focused)}
                        </SearchInfo>
                    </SearchWrapper>

                </Nav>
                <Addition>
                    <Button className='writting'> <span className="iconfont">&#xe616;</span> 写文章</Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused')
    }
}

const mapDisptchToProps = (disptch) => {
    return {
        handleFocus() {
            disptch(actionCreators.searchFocusCreator())
        },
        handleBlur() {
            disptch(actionCreators.searchBlurCreator())
        }

    }
}


export default connect(mapStateToProps, mapDisptchToProps)(Header);
