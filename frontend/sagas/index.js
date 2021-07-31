import { all, fork, take } from 'redux-saga/effects'

function* watchLogIn() {
  yield take('LOG_IN')
}

function* watchLogOut() {
  yield take('LOG_OUT')
}

function* watchAddChallenge() {
  yield take('ADD_CHALLENGE')
}

export default function* rootSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchAddChallenge),
  ])
}