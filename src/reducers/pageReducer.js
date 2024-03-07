const itemInit = [{ product: "Ювелирные украшения" }]

export function pageReducer(state = itemInit, action) {

  if (action.type === 'CURRENT_PAGE') {
    console.log('action CURRENT_PAGE', action)
    return action.ids;
  }

  if (action.type === 'CURRENT_PAGE_NEXT') {
    console.log('action CURRENT_PAGE_NEXT', action)
    return action.items;
  }

  if (action.type === 'FILTERED_PAGE') {              //обновляем вид псле получения ids, после фильтрации
    console.log('action FILTERED_PAGE', action)
    return action.items;
  } 
  return state;
}
