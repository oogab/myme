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
  LOAD_MY_CREATE_CHALLENGES_REQUEST,
  LOAD_MY_CREATE_CHALLENGES_SUCCESS,
  LOAD_MY_CREATE_CHALLENGES_FAILURE,
  UPLOAD_CHALLENGE_IMAGE_REQUEST,
  UPLOAD_CHALLENGE_IMAGE_SUCCESS,
  UPLOAD_CHALLENGE_IMAGE_FAILURE,
} from '../reducers/challenge'

function uploadChallengeImageAPI(data) {
  return axios.post('/challenge/image', data)
}
  
function* uploadChallengeImage(action) {
  try {
    const result = yield call(uploadChallengeImageAPI, action.data)
    console.log(result)
    yield put({
      type: UPLOAD_CHALLENGE_IMAGE_SUCCESS,
      data: result.data
    })
  } catch (error) {
    yield put({
      type: UPLOAD_CHALLENGE_IMAGE_FAILURE,
      error: error.response.data
    })
  }
}

function addChallengeAPI(data) {
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
  return axios.get('/challengeParticipation')
}

function* loadMyChallenges() {
  try {
    const result = yield call(loadMyChallengesAPI)
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

function loadMyCreateChallengesAPI() {
  return axios.get('/challenge/mychallenge')
}

function* loadMyCreateChallenges() {
  try {
    const result = yield call(loadMyCreateChallengesAPI)
    yield put({
      type: LOAD_MY_CREATE_CHALLENGES_SUCCESS,
      data: result.data
    })
  } catch (error) {
    yield put({
      type: LOAD_MY_CREATE_CHALLENGES_FAILURE,
      error: error.response.data
    })
  }
}

function* watchUploadChallengeImage() {
  yield takeLatest(UPLOAD_CHALLENGE_IMAGE_REQUEST, uploadChallengeImage)
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

function* watchLoadMyCreateChallenges() {
  yield takeLatest(LOAD_MY_CREATE_CHALLENGES_REQUEST, loadMyCreateChallenges)
}

export default function* challengeSaga() {
  yield all([
    fork(watchUploadChallengeImage),
    fork(watchAddChallenge),
    fork(watchLoadChallenges),
    fork(watchLoadMyChallenges),
    fork(watchLoadMyCreateChallenges)
  ])
}