import { SET_COUNT_TOTAL, SET_SEARCH_VALUE } from '../actionTypes/articleActionTypes';
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../actionTypes/articleActionTypes';
import { SET_ARTICLE} from '../actionTypes/articleActionTypes';
import {IArticle, IArticleStore} from '../types';

const initialState = {
    articles: [],
    favorites: [],
    countTotal: 0,
    searchValue: '',
}

const articleReducer = (state: IArticleStore = initialState , action: any) => {
    switch (action.type) {
        case SET_COUNT_TOTAL: {
            const { count } = action;
            return ({
                ...state,
                countTotal: count,
            })
        }
        case SET_ARTICLE: {
            const { articles } = action;
            return ({
                ...state,
                articles,
            })
        }
        case ADD_FAVORITE: {
            const {id} = action;
            return ({
                ...state,
                favorites: [...state.favorites, id],
            })
        }
        case REMOVE_FAVORITE: {
            const {id} = action;
            return ({
                ...state,
                favorites: state.favorites.filter((el) => el !== id),
            })
        }
        case SET_SEARCH_VALUE: {
            const { value } = action;
            return ({
                ...state,
                searchValue: value,
            })
        }
        default: return state;
    }
}

export { articleReducer };