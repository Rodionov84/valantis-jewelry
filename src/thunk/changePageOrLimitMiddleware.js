// import { downloadCurrentPage } from '../downloaders/downloadCurrentPage';
import { changePageOrLimitThunk } from '../reducers/changePageOrLimitThunk';


export const changePageOrLimitMiddleware = storeApi => next => action => {
  //console.log("1", storeApi.getState())
  next(action); // store state changed
  //console.log("2", storeApi.getState())
  //console.log("--------", action)

  const actions = [
    'PREV_PAGE',
    'NEXT_PAGE',
    'GET_PAGE_FROM_THE_LIST',
    'CHANGE_LIMIT',
  ]
  
  if (actions.includes(action.type)) {
    storeApi.dispatch(changePageOrLimitThunk())
    // const page = storeApi.getState().pageNumberReducer;
    // const limit = storeApi.getState().changeLimitReducer;
    

    // downloadCurrentPage(page, limit).then(pokemons => {
    //   return storeApi.dispatch(
    //     {
    //       type: 'CURRENT_PAGE', currentPage: pokemons,
    //     }
    //   )
    // })
  }
};
