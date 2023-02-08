import { takeEvery, put } from 'redux-saga/effects'

import { IArticle } from '../types';

import {
    LOAD_ARTICLE, SET_COUNT_TOTAL_PAGES,
    SET_SEARCH_VALUE
} from '../actionTypes/articleActionTypes';

import {
    ADD_FAVORITE,
    REMOVE_FAVORITE,
    SET_COUNT_TOTAL,
} from '../actionTypes/articleActionTypes';

import { SET_ARTICLE } from '../actionTypes/articleActionTypes';
import { getToken } from './userActionCreators';

function* fetchLoadPosts(action: any) {
    const { payload } = action;
    const {rowsPerPage,currentPage, searchValue, sortSpis,sortType, sortTitle } = payload;
    let sortSpisAll:string=sortTitle&&sortType?sortTitle+':'+sortType:''
    const start=currentPage==1?1:currentPage*rowsPerPage
    const response: Response = yield fetch(`https://api.spaceflightnewsapi.net/v3/articles?_limit=${rowsPerPage}&_start=${start}&title_contains=${searchValue}&_sort=${sortSpisAll}`);
    const data: IArticle[] = yield response.json();
    const responseCount: Response = yield fetch(`  https://api.spaceflightnewsapi.net/v3/articles/count?title_contains=${searchValue}`);
    const count:number = yield responseCount.json();

    yield put(setArticleTotal(count));
    yield put(setCountTotalPages(Math.ceil(count/rowsPerPage)));
    yield put(setArticle(data));
 }

const loadArticle = (payload:{rowsPerPage?:number,currentPage:number, searchValue:string, sortSpis?:string,sortType:string,sortTitle:string}) => ({
    type: LOAD_ARTICLE,
    payload,
})

const setSearchValue = (value: string) => ({
    type: SET_SEARCH_VALUE,
    value,
})

const setArticle = ( articles: IArticle[] ) => ({
    type: SET_ARTICLE,
    articles,
});

const setArticleTotal = (count: number ) => ({
    type: SET_COUNT_TOTAL,
    count,
});

const addFavorite = (id: number) => ({
    type: ADD_FAVORITE,
    id,
});

const removeFavorite = (id: number) => ({
    type: REMOVE_FAVORITE,
    id,
});

const setCountTotalPages= (count: number ) => ({
    type: SET_COUNT_TOTAL_PAGES,
    count,
});


function* watcherArticle() {
    yield takeEvery(LOAD_ARTICLE, fetchLoadPosts)
}

export {
    setArticle,
    loadArticle,
    addFavorite,
    removeFavorite,
    setArticleTotal,
    watcherArticle,
    setSearchValue,
    setCountTotalPages,
}