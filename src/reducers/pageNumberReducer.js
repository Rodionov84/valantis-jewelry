export function pageNumberReducer(state = 1, action) {
    if (action.type === 'PREV_PAGE') {
        return state - 1;
    } else if (action.type === 'NEXT_PAGE') {
        return state + 1;
    } else if (action.type === 'GET_PAGE_FROM_THE_LIST') {
        return action.pageFromTheList;
    }
    return state;
}
