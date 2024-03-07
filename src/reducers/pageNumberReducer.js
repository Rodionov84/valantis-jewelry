export function pageNumberReducer(state = 0, action) {
    if (action.type === 'PREV_PAGE') {
        return state - 1;
    } else if (action.type === 'NEXT_PAGE') {
        return state + 1;
    } else if (action.type === 'PREV_FILTERED_PAGE') {
        return state - 1;
    } else if (action.type === 'NEXT_FILTERED_PAGE') {
        return state + 1;
    } else if (action.type === 'SET_COUNT_ZERO') {
        return state = 0;
    }
    return state;
}
