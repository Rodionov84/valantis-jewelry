import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import { downloadCurrentPage } from "./downloaders/downloadCurrentPage";
import { downloadCountPages } from "./downloaders/downloadCountPages";
import { changePageOrLimitMiddleware } from './thunk/changePageOrLimitMiddleware';
import thunk from 'redux-thunk';
import { changePageOrLimitThunk } from './reducers/changePageOrLimitThunk';

const store = createStore(rootReducer, applyMiddleware(changePageOrLimitMiddleware, thunk));

store.dispatch(changePageOrLimitThunk());


export { store };

// import { createStore } from 'redux';
// import { rootReducer } from './rootReducer';
// import { downloadPokemons } from "./downloadPokemons"

// const store = createStore(rootReducer);

// downloadPokemons().then(pokemons => store.dispatch({ type: 'DOWNLOADED_POKEMONS', downloadedPokemons: pokemons }));

// export { store };
