import produce from 'immer'

const initialState = {
    events: [],
    createEventLoading: false,
    createEventDone: false,
    createEventError: null,
    deleteEventLoading: false,
    deleteEventDone: false,
    deleteEvenetError: null,
    updateEventLoading: false,
    updateEventDone: false,
    updateEventError: null,
    loadEventLoading: false,
    loadEventDone: false,
    loadEventError: null,
    
}

export const CREATE_EVENT_REQUEST = 'CREATE_EVENT_REQUEST'
export const CREATE_EVENT_SUCCESS = 'CREATE_EVENT_SUCCESS'
export const CREATE_EVENT_FAILURE = 'CREATE_EVENT_FAILURE'

export const DELETE_EVENT_REQUEST = 'DELETE_EVENT_REQUEST'
export const DELETE_EVENT_SUCCESS = 'DELETE_EVENT_SUCCESS'
export const DELETE_EVENT_FAILURE = 'DELETE_EVENT_FAILURE'

export const UPDATE_EVENT_REQUEST = 'UPDATE_EVENT_REQUEST'
export const UPDATE_EVENT_SUCCESS = 'UPDATE_EVENT_SUCCESS'
export const UPDATE_EVENT_FAILURE = 'UPDATE_EVENT_FAILURE'

export const LOAD_EVENT_REQUEST = 'LOAD_EVENT_REQUEST'
export const LOAD_EVENT_SUCCESS = 'LOAD_EVENT_SUCCESS'
export const LOAD_EVENT_FAILURE = 'LOAD_EVENT_FAILURE'

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch(action.type){
        case CREATE_EVENT_REQUEST:
            draft.createEventLoading = true
            draft.createEventDone = false
            draft.createEventError = null
            break
        case CREATE_EVENT_SUCCESS:
            draft.createEventLoading = false
            draft.createEventDone = true
            break
        case CREATE_EVENT_FAILURE:
            draft.createEventLoading = false
            draft.createEventError = action.error
            break
    }
})

export default reducer