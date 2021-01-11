import { call, put, takeEvery } from "redux-saga/effects";
import { login as loginApi } from '../services/login'

// reducer
const loginReducer = (state = {isLogin: false}, action) => {
  if (action.type === 'login') {
    return {isLogin: true}
  } else {
    return {isLogin: false}
  }  
}

//saga effects
function* loginEffects(action) {
  try {
    const result = yield call(loginApi, action.data)
    yield put({type: 'login', result});  
    action.callback()
  } catch (error) {
    console.log(error)
    yield put({type: 'login_failure', message: error.message});  
  }  
}
function* loginSaga() {
  yield takeEvery('login_request', loginEffects)
}

//导出给pages的请求方法
function loginRequest(values, callback) {
  return {type: 'login_request', data: values, callback}
}

export { loginReducer, loginSaga }
export default loginRequest

