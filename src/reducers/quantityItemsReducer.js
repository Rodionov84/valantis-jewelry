export function quantityItemsReducer(state = null, action) {
    if (action.type === 'GET_ALL_ITEMS_QUANTiTY') {
        return action.length;
    }
    return state;
}
