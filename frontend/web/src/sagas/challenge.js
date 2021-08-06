import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from 'axios'
import {
  ADD_CHALLENGE_REQUEST,
  ADD_CHALLENGE_SUCCESS,
  ADD_CHALLENGE_FAILURE,
  LOAD_CHALLENGES_REQUEST,
  LOAD_CHALLENGES_SUCCESS,
  LOAD_CHALLENGES_FAILURE,
  LOAD_MY_CHALLENGES_REQUEST,
  LOAD_MY_CHALLENGES_SUCCESS,
  LOAD_MY_CHALLENGES_FAILURE,

} from '../reducers/challenge'

function addChallengeAPI(data) {
  console.log('요청함!')
  return axios.post('/challenge', data)
}
  
function* addChallenge(action) {
  try {
    const result = yield call(addChallengeAPI, action.data)
    console.log(result)
    yield put({
      type: ADD_CHALLENGE_SUCCESS,
      data: result.data
    })
  } catch (error) {
    yield put({
      type: ADD_CHALLENGE_FAILURE,
      error: error.response.data
    })
  }
}

function loadChallengesAPI() {
  console.log('challenge load 요청')
  return axios.get('/challenge')
}

function* loadChallenges() {
  try {
    const result = yield call(loadChallengesAPI)
    console.log(result)
    yield put({
      type: LOAD_CHALLENGES_SUCCESS,
      data: result.data
    })
  } catch (error) {
    yield put({
      type: LOAD_CHALLENGES_FAILURE,
      error: error.response.data
    })
  }
}

function loadMyChallengesAPI() {
  console.log('my challenge load 요청')
  return axios.get('/challenge/mychallenge')
}

function* loadMyChallenges() {
  try {
    const result = yield call(loadMyChallengesAPI)
    console.log(result)
    yield put({
      type: LOAD_MY_CHALLENGES_SUCCESS,
      data: result.data
    })
  } catch (error) {
    yield put({
      type: LOAD_MY_CHALLENGES_FAILURE,
      error: error.response.data
    })
  }
}

function* watchAddChallenge() {
  yield takeLatest(ADD_CHALLENGE_REQUEST, addChallenge)
}

function* watchLoadChallenges() {
  yield takeLatest(LOAD_CHALLENGES_REQUEST, loadChallenges)
}

function* watchLoadMyChallenges() {
  yield takeLatest(LOAD_MY_CHALLENGES_REQUEST, loadMyChallenges)
}

export default function* challengeSaga() {
  yield all([
    fork(watchAddChallenge),
    fork(watchLoadChallenges),
    fork(watchLoadMyChallenges)
  ])
}