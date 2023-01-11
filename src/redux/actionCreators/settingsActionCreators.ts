import {SET_CURRENT_PAGE, SET_ACTIVE_TAB, SET_ROWS_PER_PAGE} from '../actionTypes/settingsActionTypes';

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

export { setActiveTab, setCurrentPage, setRowPage}