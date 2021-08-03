import dumpData from '../../pages/RoutineSetting/dump.json';
//초기화 정렬
function sortHabit(obj){
    for(let i= 0 ; i<obj.length;i++){
        obj[i].routinizedHabit.sort((a,b)=>{return a.order-b.order});
    }
}
sortHabit(dumpData);

//액션 타입 정의
let setOrderAction='routine/setOrder';
let setChoosedRoutineAction='routine/setChoosedRoutine';
let addRoutineItemAction='routine/addRoutineItem';
let deleteRoutineItemAction='routine/deleteRoutineItem';
//타입 매핑해서 export
export const setOrder = (payload) =>({
    type:setOrderAction,
    newIndex : payload.newIndex,
    oldIndex : payload.oldIndex,
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
const initialState = {
    routine : [...dumpData],
    choosedRoutine : 0
};

export default function reducer(state = initialState, action){
    let copy = Object.assign({}, state);
    switch(action.type){
        case setOrderAction: //바뀐순서 저장
            let oldIndex = action.oldIndex-1;
            let newIndex = action.newIndex-1;
            copy.choosedRoutine = action.idx;
            for(let i=0;i<copy.routine[copy.choosedRoutine].routinizedHabit.length;i++){
                copy.routine[copy.choosedRoutine].routinizedHabit[i].order = i;
            }
            // if(newIndex > oldIndex){
            //     for(let i=newIndex ; i>oldIndex ; i--){
            //         copy.routine[copy.choosedRoutine].routinizedHabit[i].order--;
            //     }
            // }else{
            //     for(let i=newIndex ; i<oldIndex ; i++){
            //         copy.routine[copy.choosedRoutine].routinizedHabit[i].order++;
            //     }
            // }
            // copy.routine[copy.choosedRoutine].routinizedHabit[oldIndex].order = newIndex;
            return copy;
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
        default:
            return state;

    }
}