import dumpData from '../../pages/RoutineSetting/dump.json';
//액션 타입 import
import {setOrderAction,setChoosedRoutineAction,addRoutineAction,addRoutineItemAction,deleteRoutineItemAction, 
    setModalInputAction, setModalInputNameAction, setModalInputAlarmAction, setModalInputActiveDayAction, modifyRoutineAction, deleteRoutineAction} from '../constants/actionTypes';

//초기화 정렬 . dump file이라서 해둔것. 나중에 바꿀 예정
function sortHabit(obj){
    for(let i= 0 ; i<obj.length;i++){
        obj[i].routinizedHabit.sort((a,b)=>{return a.order-b.order});
    }
}
sortHabit(dumpData);
//타입 매핑해서 export
export const setOrder = (payload) =>({
    type:setOrderAction,
    idx : payload.idx
}); 
export const setChoosedRoutine = (payload) =>({
    type:setChoosedRoutineAction,
    choosedIdx : payload
});
export let addRoutineItem = (payload) =>({
    type:addRoutineItemAction,
    habit : {
        "rhid" : -1,
        "hid" : -1,
        "order" : -1,
        "achieveCount" : 7,
        "assistContent" : "Youtube",
        "assistLink" : "http://www.youtube.com",
        "habitName" : payload,
        "time" : "3:00"
    }
});
export const deleteRoutineItem = (payload) =>({
    type:deleteRoutineItemAction,
    routineIdx : payload.routineIdx,
    routineItemIdx : payload.routineItemIdx
});
export const addRoutine = () =>({
    type:addRoutineAction,
});

export const modifyRoutine = () =>({
    type:modifyRoutineAction
});

export const deleteRoutine = () =>({
    type:deleteRoutineAction,
});

export const setModalInput = (payload) =>({
    type:setModalInputAction,
    idx : payload
});

export const setModalInputName = (payload) =>({
    type : setModalInputNameAction,
    name : payload
});

export const setModalInputAlarm = (payload) =>({
    type : setModalInputAlarmAction,
    alarm : payload
});

export const setModalInputActiveDay = (payload) =>({
    type : setModalInputActiveDayAction,
    idx : payload.idx,
    activeDay : {"activeDayOfWeek" : payload.activeDayOfWeek, "startTime" : payload.startTime}
});


//초기값 설정
const initialState = {
    routine : [...dumpData],
    choosedRoutine : -1,
    createRoutineInfo : {
        "rid" : -1,
        "name" : '',
        "alarm" : false,
        "activeDay" : [{"activeDayOfWeek" : false,"startTime": ""},{"activeDayOfWeek" : false,"startTime": ""},{"activeDayOfWeek" : false,"startTime": ""},{"activeDayOfWeek" : false,"startTime": ""},{"activeDayOfWeek" : false,"startTime": ""},{"activeDayOfWeek" : false,"startTime": ""},{"activeDayOfWeek" : false,"startTime": ""}],
        "routinizedHabit":[]    
    }
};

export default function reducer(state = initialState, action){
    let copy = Object.assign({}, state);
    switch(action.type){
        case setOrderAction: //바뀐순서 저장
            state.choosedRoutine = action.idx;
            for(let i=0;i<state.routine[state.choosedRoutine].routinizedHabit.length;i++){
                state.routine[state.choosedRoutine].routinizedHabit[i].order = i;
            }
            return state;
        case setChoosedRoutineAction: //선택된 루틴 변경. 모달 open할 때마다 선택된 루틴이 다를 수도 있기 때문에 사용
            copy.choosedRoutine = action.choosedIdx;
            return copy;
        case addRoutineItemAction: // 루틴의 아이템 추가
            //임의로 rhid, hid 설정. 나중에 꼭 바꿔야함 !!
            action.habit.rhid = copy.routine[copy.choosedRoutine].routinizedHabit.length;
            action.habit.hid = action.habit.rhid;
            action.habit.order = action.habit.rhid;
            copy.routine[copy.choosedRoutine].routinizedHabit.push(action.habit);
            return copy;
        case deleteRoutineItemAction: // 루틴의 아이템 삭제
            copy.routine[action.routineIdx].routinizedHabit.splice(action.routineItemIdx,action.routineItemIdx+1);
            console.log(copy.routine[action.routineIdx].routinizedHabit);
            return copy;
        case addRoutineAction: //새로운 루틴 생성
            copy.routine.push(Object.assign({}, copy.createRoutineInfo));
            return copy;
        case modifyRoutineAction:
            copy.routine[copy.choosedRoutine]=Object.assign({}, copy.createRoutineInfo);
            return copy;
        case deleteRoutineAction:
            copy.routine.splice(copy.choosedRoutine, copy.choosedRoutine+1);
            return copy;
        case setModalInputAction:
            if(copy.choosedRoutine==-1){
                copy.createRoutineInfo = {
                    "rid" : -1,
                    "name" : '',
                    "alarm" : false,
                    "activeDay" : [{"activeDayOfWeek" : false,"startTime": ""},{"activeDayOfWeek" : false,"startTime": ""},{"activeDayOfWeek" : false,"startTime": ""},{"activeDayOfWeek" : false,"startTime": ""},{"activeDayOfWeek" : false,"startTime": ""},{"activeDayOfWeek" : false,"startTime": ""},{"activeDayOfWeek" : false,"startTime": ""}],
                    "routinizedHabit":[]    
                }
            }else{
                copy.createRoutineInfo = Object.assign({}, copy.routine[copy.choosedRoutine]);
            }
            return copy;
        case setModalInputNameAction:
            copy.createRoutineInfo.name = action.name;
            return copy;
        case setModalInputAlarmAction:
            copy.createRoutineInfo.alarm = action.alarm;
            return copy;
        case setModalInputActiveDayAction:
            copy.createRoutineInfo.activeDay[action.idx] = action.activeDay;
            return copy;
        default:
            return state;

    }
}