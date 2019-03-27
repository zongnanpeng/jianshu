import styled from "styled-components";

import logoPic from '../../static/logo.png';

export const HeaderWrapper = styled.div`
    height:58px;
    border-bottom:1px solid #f0f0f0;
    position:relative;
`
export const Logo = styled.a.attrs({
    href: '/'
})`
    position:absolute;
    display:block;
    top:0;
    left:0;
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:contain;
`
export const Nav = styled.div`
    width:960px;
    height:100%;
    margin: 0 auto;
    padding-right:70px;
    box-sizing:border-box;
`

export const NavItem = styled.div`
    line-height:56px;
    padding: 0 15px;
    font-size:17px;
    color:#333;
    &.left {
        float:left;
    }

    &.right {
        float:right;
        color:#969696;
        font-size:15px;
    }

    &.active {
        color:#ea6f5a;
    }  
`

export const SearchWrapper = styled.div`
    float:left;
    position:relative;
    .iconfont {
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        line-height:30px;
        background:#eee;
        border-radius:15px;
        text-align:center;
        &.focus {
            background:#777;
            color:#fff;
        }
    }  
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width:160px;
    height:38px;
    margin-top:9px;
    margin-left:20px;
    padding:0 40px 0 20px;
    box-sizing: border-box;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    font-size:14px;
    color:#777;
    &::placeholder {
        color:#999;
    }
    &.focus {
        width:240px;
    }

    &.slide-enter {
        width:160px;
        transition: all 0.2s easy-out;
    }

    &.slide-enter-active {
        width:240px;
    }

    &.slide-exit {
        transition: all 0.2s easy-out;
    }

    &.slide-exit-active {
        width:160px;
    }

`
export const SearchInfo = styled.div`
    position:absolute;
    left:0;
    top:56px;
    width:240px;
    padding:0  20px;
    box-shadow: 0 0 8px rgba(0,0,0,0.2);
    

`

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;

`

export const SearchInfoSwitch = styled.div`
    float:right;
    font-size:13px;

`
export const SearchInfoList = styled.div`
  overflow:hidden;

`
export const SearchInfoItem = styled.a`
    display:block;
    line-height:20px;
    float:left;
    padding:0 5px;
    margin-right:20px;
    margin-bottom:10px;
    font-size:12px;
    border:1px solid #ddd;
    color:#787878;
    border-radius: 3px;
`


export const Addition = styled.div`
    position:absolute;
    top:0;
    right:0;
    height:56px;

`
export const Button = styled.div`
    float:right;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    line-height:38px;
    border-radius:19px;
    border:1px solid #ec6149;
    font-size:15px;
    &.reg {
        color:#ec6149;
    }
    &.writting {
        color:#fff;
        background:#ec6149;
    }
    
`
