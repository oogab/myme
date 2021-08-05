import produce from 'immer'

const initialState = {
  myRoutines: [],

  addRoutineLoading: false,
  addRoutineDone: false,
  addRoutineError: null,
  loadMyRoutinesLoading: false,
  loadMyRoutinesDone: false,
  loadMyRoutinesError: null,
}

export const ADD_ROUTINE_REQUEST = 'ADD_ROUTINE_REQUEST'
export const ADD_ROUTINE_SUCCESS = 'ADD_ROUTINE_SUCCESS'
export const ADD_ROUTINE_FAILURE = 'ADD_ROUTINE_FAILURE'

export const LOAD_MY_ROUTINES_REQUEST = 'LOAD_MY_ROUTINES_REQUEST'
export const LOAD_MY_ROUTINES_SUCCESS = 'LOAD_MY_ROUTINES_SUCCESS'
export const LOAD_MY_ROUTINES_FAILURE = 'LOAD_MY_ROUTINES_FAILURE'

export const CLEAR_MY_ROUTINES = 'CLEAR_MY_ROUTINES'

const sortHabit = (obj) => {
  for (let i=0; i<obj.length; i++) {
    obj[i].routinizedHabit.sort((a,b) => { return a.order-b.order })
  }
}

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case CLEAR_MY_ROUTINES:
      draft.myRoutines = []
      break
    case ADD_ROUTINE_REQUEST:
      draft.addRoutineLoading = true
      draft.addRoutineDone = false
      draft.addRoutineError = null
      break
    case ADD_ROUTINE_SUCCESS:
      draft.addRoutineLoading = false
      draft.addRoutineDone = true
      draft.myRoutines = draft.myRoutines.concat(action.data)
      break
    case ADD_ROUTINE_FAILURE:
      draft.addRoutineLoading = false
      draft.addRoutineError = action.error
      break
    case LOAD_MY_ROUTINES_REQUEST:
      draft.loadMyRoutinesLoading = true
      draft.loadMyRoutinesDone = false
      draft.loadMyRoutinesError = null
      break
    case LOAD_MY_ROUTINES_SUCCESS:
      draft.loadMyRoutinesLoading = false
      draft.loadMyRoutinesDone = true
      draft.myRoutines = []
      draft.myRoutines = draft.myRoutines.concat(action.data)
      break
    case LOAD_MY_ROUTINES_FAILURE:
      draft.loadMyRoutinesLoading = false
      draft.loadMyRoutinesError = action.error
      break
  }
})

export default reducer