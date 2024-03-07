import { downloadCurrentPage } from "../downloaders/downloadCurrentPage";

export function downloadInitIdsReducer(page) {
  page = (page === undefined) ? page = 0 : page;
  return async function (dispatch) {
    return downloadCurrentPage(page).then(ids => {
      dispatch({ type: 'CURRENT_PAGE', ids: ids.ids });
    })
  }
}
