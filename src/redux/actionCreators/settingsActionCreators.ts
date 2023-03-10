import {SET_CURRENT_PAGE, SET_ACTIVE_TAB, SET_ROWS_PER_PAGE,SET_SORT_SPIS,SET_SORT_TITLE,SET_SORT_TYPES} from '../actionTypes/settingsActionTypes';

const setActiveTab = (activeTab: string) => ({
    type: SET_ACTIVE_TAB,
    activeTab,
});

const setCurrentPage = (newPage: number) => ({
    type: SET_CURRENT_PAGE,
    newPage,
});

const setRowPage= (rowsPerPage: number) => ({
    type: SET_ROWS_PER_PAGE,
    rowsPerPage,
});

const setSortSpis= (sortSpis: string) => ({
    type: SET_SORT_SPIS,
    sortSpis,
});

const setSortType= (sortType: string) => ({
    type: SET_SORT_TYPES,
    sortType,
});

const setSortTitle= (sortTitle: string) => ({
    type: SET_SORT_TITLE,
    sortTitle,
});

export { setActiveTab, setCurrentPage, setRowPage,setSortSpis,setSortType,setSortTitle}