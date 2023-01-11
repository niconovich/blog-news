import { takeEvery, put } from 'redux-saga/effects'

import { IArticle } from '../types';

import { LOAD_ARTICLE,
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
    const {rowsPerPage,currentPage, searchValue } = payload;
    const start=currentPage==1?1:currentPage*rowsPerPage
    console.log('rowsPerPage',rowsPerPage,'start',start,'searchValue',searchValue);
    const response: Response = yield fetch(`https://api.spaceflightnewsapi.net/v3/articles?_limit=${rowsPerPage}&_start=${start}&title_contains=${searchValue}`);
    const data: IArticle[] = yield response.json();
    const responseCount: Response = yield fetch(`  https://api.spaceflightnewsapi.net/v3/articles/count?title_contains=${searchValue}`);
    const count:number = yield responseCount.json();
    console.log('response',data,count);
    yield put(setArticleTotal(count));
    yield put(setArticle(data));
 }

const loadArticle = (payload:{rowsPerPage?:number,currentPage:number, searchValue:string }) => ({
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
}