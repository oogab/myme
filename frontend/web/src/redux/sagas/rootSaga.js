import { all, fork } from "redux-saga/effects";
import routineSaga from "./routineSaga";

export default function* rootSaga(){
    yield all([fork(routineSaga)]);
}