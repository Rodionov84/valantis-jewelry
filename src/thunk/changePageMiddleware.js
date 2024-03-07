import { downloadInitIdsReducer } from '../reducers/downloadInitIdsReducer';
import { downloadItemsReducer } from '../reducers/downloadItemsReducer';
import { downloadFilterReducer } from '../reducers/downloadFilterReducer';
import { downloadFilteredIdsReducer } from '../reducers/downloadFilteredIdsReducer';

export const changePageMiddleware = storeApi => next => action => {
  next(action);

  const pageReload = storeApi.getState().pageNumberReducer;

  if (action.type === 'NEXT_PAGE') {
    storeApi.dispatch(downloadInitIdsReducer(pageReload));
    storeApi.dispatch(downloadItemsReducer(pageReload));
  }
  if (action.type === 'PREV_PAGE') {
    storeApi.dispatch(downloadInitIdsReducer(pageReload));
    storeApi.dispatch(downloadItemsReducer(pageReload));
  }
  if (action.type === 'PREV_FILTERED_PAGE') {
    storeApi.dispatch(downloadFilteredIdsReducer(action.filterName, action.payloadValue, pageReload));
    storeApi.dispatch(downloadFilterReducer(action.filterName, action.payloadValue, pageReload));
  }
  if (action.type === 'NEXT_FILTERED_PAGE') {
    storeApi.dispatch(downloadFilteredIdsReducer(action.filterName, action.payloadValue, pageReload));
    storeApi.dispatch(downloadFilterReducer(action.filterName, action.payloadValue, pageReload));
  }
  if (action.type === 'GET_FILTER') {
    storeApi.dispatch(downloadFilteredIdsReducer(action.filterName, action.payloadValue, pageReload));
    storeApi.dispatch(downloadFilterReducer(action.filterName, action.payloadValue, pageReload));
  }
};
