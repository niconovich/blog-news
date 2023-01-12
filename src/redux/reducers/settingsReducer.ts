import { TABS } from '../../constants';

import {SET_CURRENT_PAGE, SET_ACTIVE_TAB, SET_ROWS_PER_PAGE, SET_SORT_SPIS} from './../actionTypes/settingsActionTypes';



const initial_state = {
    activeTab: TABS.all,
    currentPage: 1,
    rowsPerPage: 3,
    sortSpis:'',
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
        case SET_SORT_SPIS: {
            const { sortSpis } = action;
            return ({
                ...state,
                sortSpis: sortSpis,
            })
        }
        default: return state;
    }
}

export { settingsReducer }