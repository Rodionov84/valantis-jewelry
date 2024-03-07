import { downloadItems } from "../downloaders/downloadItems";
import { downloadFilteredIds } from "../downloaders/downloadFilteredIds";

export function downloadFilterReducer(filterName, value, page) {
  return async function (dispatch) {
    dispatch({ type: 'DOWNLOADER_START' })
    return downloadFilteredIds(filterName, value, page)
      .then(arr => arr)
      .then(arr => downloadItems(arr)
        .then(items => {
          dispatch({ type: 'FILTERED_PAGE', items: items });
        }))
      .then(() => dispatch({ type: 'DOWNLOAD_OK' }))
  }
}
