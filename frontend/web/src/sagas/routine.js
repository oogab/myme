import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from 'axios'
import {
  ADD_ROUTINE_REQUEST,
  ADD_ROUTINE_SUCCESS,
  ADD_ROUTINE_FAILURE,
  LOAD_MY_ROUTINES_REQUEST,
  LOAD_MY_ROUTINES_SUCCESS,
  LOAD_MY_ROUTINES_FAILURE
} from '../reducers/routine'

function addRoutineAPI(data) {
  console.log('요청함!')
  return axios.post('/routine', data)
}

function* addRoutine(action) {
  try {
    const result = yield call(addRoutineAPI, action.data)
    console.log(result)
    yield put({
      type: ADD_ROUTINE_SUCCESS,
      data: result.data
    })
  } catch (error) {
    yield put({
      type: ADD_ROUTINE_FAILURE,
      error: error.response.data
    })
  }
}

function loadRoutinesAPI() {
  console.log('요청함!')
  return axios.get('/routine')
}

function* loadRoutines() {
  try {
    const result = yield call(loadRoutinesAPI)
    console.log(result)
    yield put({
      type: LOAD_MY_ROUTINES_SUCCESS,
      data: result.data
    })
  } catch (error) {
    yield put({
      type: LOAD_MY_ROUTINES_FAILURE,
      error: error.response.data
    })
  }
}

function* watchAddRoutine() {
  yield takeLatest(ADD_ROUTINE_REQUEST, addRoutine)
}

function* watchLoadRoutines() {
  yield takeLatest(LOAD_MY_ROUTINES_REQUEST, loadRoutines)
}

export default function* routineSaga() {
  yield all([
    fork(watchAddRoutine),
    fork(watchLoadRoutines),
  ])
}