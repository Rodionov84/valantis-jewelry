import { useSelector } from 'react-redux';
import { Pokemon } from './pokemon';
import { PageNumbers } from './PageNumbers'; 
//import { useState } from 'react';
//import { useDispatch } from 'react-redux';
import { store } from '../store';
//import { useEffect } from 'react';

export function Wrap() {
  const pokemons = useSelector(state => state.pageReducer);
  const caughtIds = useSelector(state => state.influenceReducer);
  const maxPokemons = useSelector(state => state.countReducer);
  const limit = useSelector(state => state.changeLimitReducer);

  function getLimit(event) {
    store.dispatch(
      {
        type: 'CHANGE_LIMIT',
        changeLimit: event.target.value,
      }
    )
  }

  return (
    <div className="App">
      <h2 className="title__count">
        Поймано покемонов
      </h2>
      <h2 className="count">
        {caughtIds.length}/{maxPokemons}
      </h2>
      <div className="select-form">
        <span className="show-page"> Выводить по </span>
        <select onChange={(event) => getLimit(event)} defaultValue={12}>
          <option value={12}>12</option>
          <option value={20}>20</option>
          <option value={25}>25</option>
          <option value={48}>48</option>
        </select>
        <span className="show-page">покемонов</span>
      </div>
      <PageNumbers
        limit={limit}
      />
      <div className="grid">
        <div className="side__left"></div>
        <div className="general__content">
          {pokemons.map(
            pokemon =>
              <Pokemon
                key={pokemon.id}
                name={pokemon.name}
                id={pokemon.id}
              />)}
        </div>
        <div className="side__right"></div>
      </div>
    </div>
  )
}

  // const maxPokemons = useSelector(state => state.countReducer);
  // let pages = [];

  // for (let i = 1; i <= Math.ceil(maxPokemons / limit); i++) {

  //   pages.push(i)

  // }

  // function showPage(newPage) {
  //   changePage(newPage);
  //   dispatch(
  //       {
  //         type: 'CURRENT_PAGE', currentPage: pokemons,
  //       }
  //     )
  // }
  