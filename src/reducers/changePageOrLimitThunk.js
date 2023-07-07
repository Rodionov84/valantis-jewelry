import { downloadCurrentPage } from "../downloaders/downloadCurrentPage";

export function changePageOrLimitThunk() {

  // console.log('page: ', page)
  // console.log('limit: ', limit)

  return function (dispatch, getState) {
    const limit = getState().changeLimitReducer;
    const page = getState().pageNumberReducer;

    return downloadCurrentPage(page, limit).then(pokemons => {
      dispatch({ type: 'CURRENT_PAGE', currentPage: pokemons.results });
      dispatch({ type: 'GET_MAX_PAGE', maxPage: pokemons.count });
    })
  }
}
