import { combineReducers } from 'redux';
import { influenceReducer } from './influenceReducer';
import { viewReducer } from './viewReducer';
import { pageReducer } from './pageReducer';
import { countReducer } from './countReducer';
import { pageNumberReducer } from './pageNumberReducer';
import { changeLimitReducer } from './changeLimitReducer';
import { abilitiesReducer } from './abilitiesReducer';

export const rootReducer = combineReducers({
    viewReducer,
    influenceReducer,
    pageReducer,
    countReducer,
    pageNumberReducer,
    changeLimitReducer,
    abilitiesReducer,
})



// https://redux.js.org/usage/structuring-reducers/using-combinereducers