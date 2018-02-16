import uiActions from '../actions/uiActions';
import * as actions from '../const/actions';

const initialState = {
    shouldDisplay: true
}

const tabReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.HIDE_TAB_NAVIGATOR:
            return {
                ...state,
                shouldDisplay: false
            }
        case actions.SHOW_TAB_NAVIGATOR:
            return {
                ...state,
                shouldDisplay: true
            }
        default:
            return state

    }
}

export default tabReducer;