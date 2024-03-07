import { downloadItems } from "../downloaders/downloadItems";
import { downloadCurrentPage } from "../downloaders/downloadCurrentPage";

export function downloadItemsReducer(page) {
  return async function (dispatch) {
    dispatch({ type: 'DOWNLOADER_START' })
    return downloadCurrentPage(page)
      .then(arr => arr)
      .then(arr => downloadItems(arr)
        .then(items => {
          dispatch({ type: 'CURRENT_PAGE_NEXT', items: items });
        }))
      .then(() => dispatch({ type: 'DOWNLOAD_OK' }))
  }
}
