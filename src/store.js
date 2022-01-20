import { createStore } from 'redux'

var store = createStore((state={}, action) => {
    switch(action.type) {
        case 'ADD_COURSE': {
            state['courses'].push(action.payload)
            return state
        }
        case 'STORE_COURSES': {
            state['courses'] = action.payload
            return state
        }
        default: return state
    }
})

export default store