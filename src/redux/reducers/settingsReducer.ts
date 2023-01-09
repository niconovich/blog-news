import { TABS } from '../../constants';

import { SET_CURRENT_PAGE, SET_ACTIVE_TAB } from './../actionTypes/settingsActionTypes';



const initial_state = {
    activeTab: TABS.all,
    currentPage: 1,
    rowsPerPage: 10,
}

const settingsReducer = (state = initial_state, action: any) => {
    switch(action.type) {
        case SET_ACTIVE_TAB: {
            const { activeTab } = action;
            return ({
                ...state,
                activeTab,
            })
        }
        case SET_CURRENT_PAGE: {
            const { newPage } = action;
            return ({
                ...state,
                currentPage: newPage,
            })
        }
        default: return state;
    }
}

export { settingsReducer }