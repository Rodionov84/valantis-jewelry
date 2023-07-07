export function changeLimitReducer(state = 12, action) {
    
    if (action.type === 'CHANGE_LIMIT') {
        return action.changeLimit;
    }
    return state;
}