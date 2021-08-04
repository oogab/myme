import {all, fork, takeLatest, put, call} from 'redux-saga/effects';
//액션 타입 import
import {setOrderAction,setChoosedRoutineAction,addRoutineAction,addRoutineItemAction,deleteRoutineItemAction} from '../constants/actionTypes';


function* setOrder(action) {
    try {
      //api 실행이 정상적으로 되면 실행
      yield put({type: setOrderAction});
    } catch (err) {
        //실패하면 실행
      yield put({ type: ''});
    }
  }
function* watchRoutine() {
    yield takeLatest('', setOrder);
}  
export default function* routineSaga() {
    yield all([fork(watchRoutine)]);
}
