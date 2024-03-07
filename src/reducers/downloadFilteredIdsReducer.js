import { downloadFilteredIds } from "../downloaders/downloadFilteredIds";

export function downloadFilteredIdsReducer(filter, value, page) {

  return async function (dispatch) {
    return downloadFilteredIds(filter, value, page).then(ids => {
      dispatch({ type: 'GET_ALL_ITEMS_QUANTiTY', length: ids.length });
      dispatch({ type: 'GET_FILTER', ids: ids.ids });
    })
  }
}
