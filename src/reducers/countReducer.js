export function countReducer(state = 0, action) {

  if (action.type === 'GET_MAX_PAGE') {
    return action.maxPage;
  }
  return state;
}
