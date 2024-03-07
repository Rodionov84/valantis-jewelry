import { combineReducers } from 'redux';
import { pageReducer } from './pageReducer';
import { pageNumberReducer } from './pageNumberReducer';
import { downloaderReducer } from './downloaderReducer';
import { quantityItemsReducer} from './quantityItemsReducer';

export const rootReducer = combineReducers({
    quantityItemsReducer,
    pageReducer,
    pageNumberReducer,
    downloaderReducer,
})
