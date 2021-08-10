import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from 'axios'
import {
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAILURE,
  DELETE_EVENT_REQUEST,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAILURE,
  UPDATE_EVENT_REQUEST,
  UPDATE_EVENT_SUCCESS,
  UPDATE_EVENT_FAILURE,
  LOAD_EVENT_REQUEST,
  LOAD_EVENT_SUCCESS,
  LOAD_EVENT_FAILURE,
} from '../reducers/calendar'

function createEventAPI(data){

}
function* createEvent(action){

}

function deleteEventAPI(data){
  
}
function* deleteEvent(action){

}

function updateEventAPI(data){
  
}
function* updateEvent(action){

}

function loadEventAPI(data){
  
}
function* loadEvent(action){

}

function* watchCreateEvent(){
  yield takeLatest(CREATE_EVENT_REQUEST, createEvent)
}

function* watchDeleteEvent(){
  yield takeLatest(DELETE_EVENT_REQUEST, deleteEvent)
}

function* watchUpdateEvent(){
  yield takeLatest(UPDATE_EVENT_REQUEST, updateEvent)
}

function* watchLoadEvent(){
  yield takeLatest(LOAD_EVENT_REQUEST, loadEvent)
}
export default function* challengeSaga() {
    yield all([
      fork(watchCreateEvent),
      fork(watchDeleteEvent),
      fork(watchUpdateEvent),
      fork(watchLoadEvent)
    ])
  }