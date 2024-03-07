import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import { changePageMiddleware } from './thunk/changePageMiddleware';
import thunk from 'redux-thunk';
import { downloadInitIdsReducer } from './reducers/downloadInitIdsReducer';
import { downloadItemsReducer } from './reducers/downloadItemsReducer';

const store = createStore(rootReducer, applyMiddleware(changePageMiddleware, thunk));

    store.dispatch(downloadInitIdsReducer());
    store.dispatch(downloadItemsReducer());

export { store };
