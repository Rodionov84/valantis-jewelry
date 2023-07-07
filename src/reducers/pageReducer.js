const pokemonsInit = [{ name: "rootReducer", id: 2, }]

export function pageReducer(state = pokemonsInit, action) {

  if (action.type === 'CURRENT_PAGE') {

    return action.currentPage;
  }
  return state;
}

// 1. page reducer
// 2. dispatch page action from component (next/prev buttons)
// 3. when page changes → start loading pokemons
