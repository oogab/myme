//액션 타입 정의
let routineModalOpen='modal/routineModalOpen';
let routineModalToggle='modal/routineModalToggle';
let routineModalClose='modal/routineModalClose';
let createRoutineModalOpen='modal/createRoutineModalOpen';
let createRoutineModalToggle='modal/createRoutineModalToggle';
let createRoutineModalClose='modal/createRoutineModalClose';

//타입 매핑해서 export
export const openRoutineModal = () =>({type:routineModalOpen});
export const closeRoutineModal = () =>({type:routineModalClose});
export const toggleRoutineModal = () =>({type:routineModalToggle});
export const openCreateRoutineModal = () =>({type:createRoutineModalOpen});
export const closeCreateRoutineModal = () =>({type:createRoutineModalClose});
export const toggleCreateRoutineModal = () =>({type:createRoutineModalToggle});

const initialState = {
    routineModal : false,
    createRoutineModal : false
};

export default function reducer(state = initialState, action){
    let copy = Object.assign({}, state);
    switch(action.type){
        case routineModalOpen:
            copy.routineModal = true;
            return copy;
        case routineModalToggle:
            copy.routineModal = !copy.routineModal;
            return copy;
        case routineModalClose:
            copy.routineModal = false;
            return copy;
        case createRoutineModalOpen:
            copy.createRoutineModal = true;
            return copy;
        case createRoutineModalToggle:
            copy.createRoutineModal = !copy.createRoutineModal;
            return copy;
        case createRoutineModalClose:
            copy.createRoutineModal = false;
            return copy;
        default:
            return state;

    }
}