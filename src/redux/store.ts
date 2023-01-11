import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';
import { all } from 'redux-saga/effects'

import { articleReducer } from './reducers/articleReducer';
import { settingsReducer } from './reducers/settingsReducer';
import { watcherArticle } from './actionCreators/articleActionCreators';
import { watcherUser } from './actionCreators/userActionCreators';
import { userReducer } from './reducers/usersReducer';

const sagaMiddleWare = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
});

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