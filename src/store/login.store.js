import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from "redux-saga";

import { loginReducer as login, loginSaga } from './login.saga'

const mid = createSagaMiddleware();

const store = createStore(
  combineReducers({login}),
  applyMiddleware(mid))
mid.run(loginSaga)

export default store
