function foodReducer(state={}, action) {
    switch(action.type) {
        case 'GET_FOODS_SUCCESS': {
            state = {...state}
            state['foods'] = action.payload
            return state
        }
        case 'GET_FOODS_ERROR': {
            state = {...state}
            state['error'] = 'get foods error'
            return state
        }
        case 'GET_FOOD_DETAILS_SUCCESS': {
            state = {...state}
            state['foodDetails'] = action.payload
            return state
        }
        case 'GET_FOOD_DETAILS_ERROR': {
            state = {...state}
            state['error'] = 'get food details error'
            return state
        }
        default: return state
    }
}

export default foodReducer