import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';
import { all } from 'redux-saga/effects'

import { articleReducer } from './reducers/articleReducer';
import { settingsReducer } from './reducers/settingsReducer';
import { watcherArticle } from './actionCreators/articleActionCreators';
import { watcherUser } from './actionCreators/userActionCreators';
import { userReducer } from './reducers/usersReducer';

const sagaMiddleWare = createSagaMiddleware();

function* rootSaga(){
    yield all([
        watcherArticle(),
        watcherUser(),
    ])
} 

const rootReducer = combineReducers({
    articles: articleReducer,
    settings: settingsReducer,
    users: userReducer,
})

export default createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);