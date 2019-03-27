import { constants } from './index';


export const searchFocusCreator = () => {
    return {
        type: constants.SEARCH_FOCUS
    }
}

export const searchBlurCreator = () => {
    return {
        type: constants.SEARCH_BLUR
    }
}
