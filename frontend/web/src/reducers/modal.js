import produce  from 'immer'

const initialState = {
  routineModal: false,
  createRoutineModal: false,
  modifyHabitModal: false,
}

export const OPEN_ROUTINE_MODAL = 'OPEN_ROUTINE_MODAL'
export const CLOSE_ROUTINE_MODAL = 'CLOSE_ROUTINE_MODAL'
export const TOGGLE_ROUTINE_MODAL = 'TOGGLE_ROUTINE_MODAL'

export const OPEN_CREATE_ROUTINE_MODAL = 'OPEN_CREATE_ROUTINE_MODAL'
export const CLOSE_CREATE_ROUTINE_MODAL = 'CLOSE_CREATE_ROUTINE_MODAL'
export const TOGGLE_CREATE_ROUTINE_MODAL = 'TOGGLE_CREATE_ROUTINE_MODAL'

export const OPEN_MODIFY_HABIT_MODAL = 'OPEN_MODIFY_HABIT_MODAL'
export const CLOSE_MODIFY_HABIT_MODAL = 'CLOSE_MODIFY_HABIT_MODAL'
export const TOGGLE_MODIFY_HABIT_MODAL = 'TOGGLE_MODIFY_HABIT_MODAL'

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch(action.type) {
    case OPEN_ROUTINE_MODAL:
      draft.routineModal = true
      break
    case TOGGLE_ROUTINE_MODAL:
      draft.routineModal = !draft.routineModal
      break
    case CLOSE_ROUTINE_MODAL:
      draft.routineModal = false
      break

    case OPEN_CREATE_ROUTINE_MODAL:
      draft.createRoutineModal = true
      break
    case TOGGLE_CREATE_ROUTINE_MODAL:
      draft.createRoutineModal = !draft.createRoutineModal
      break
    case CLOSE_CREATE_ROUTINE_MODAL:
      draft.createRoutineModal = false
      break
    
    case OPEN_MODIFY_HABIT_MODAL:
      draft.modifyHabitModal = true
      break
    case TOGGLE_MODIFY_HABIT_MODAL:
      draft.modifyHabitModal = !draft.routineModal
      break
    case CLOSE_MODIFY_HABIT_MODAL:
      draft.modifyHabitModal = false
      break
  }
})

export default reducer