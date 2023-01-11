import { TABS } from '../../constants';

import {SET_CURRENT_PAGE, SET_ACTIVE_TAB, SET_ROWS_PER_PAGE} from './../actionTypes/settingsActionTypes';



const initial_state = {
    activeTab: TABS.all,
    currentPage: 1,
    rowsPerPage: 6,
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
        case SET_ROWS_PER_PAGE: {
                const { rowsPerPage } = action;
                return ({
                    ...state,
                    rowsPerPage: rowsPerPage,
                })
        }
        default: return state;
    }
}

export { settingsReducer }