import { useSelector } from 'react-redux';
import { useState } from 'react';
import { ItemsCardInTheList } from './ItemsCardInTheList';
import { PageNumbers } from './PageNumbers';
import { SearchForm } from './SearchForm';

export function Wrap() {
  const ids = useSelector(state => state.pageReducer);
  const page = useSelector(state => state.pageNumberReducer);
  const listLength = useSelector(state => state.quantityItemsReducer);
  const [filterNameState, setFilterNameState] = useState(null);
  const [valueState, setValueState] = useState('');
  const [filterOn, setFilterOn] = useState(false);

  return (
    <div className="App">
      <h2 className="title-catalog">
        Каталог ювелирных украшений
      </h2>
      <SearchForm
        filterNameState={filterNameState}
        setFilterOn={setFilterOn}
        valueState={valueState}
        setFilterNameState={setFilterNameState}
        setValueState={setValueState}
      />
      <PageNumbers
        filterOn={filterOn}
        filterName={filterNameState}
        payloadValue={valueState}
        page={page}
        listLength={listLength}
      />
      <div className="grid">
        <div className="side-left"></div>
        <div className="general-content">
          {ids.map(
            (id, index) =>
              <ItemsCardInTheList
                key={id.id}
                product={id.product}
                price={id.price}
                brand={id.brand}
                id={id.id}
                index={index}
                page={page}
              />)}
        </div>
        <div className="side-right"></div>
      </div>
      <footer className='footer'>
        <h3 className='footer-text-top'>
          <a className='footer-link' href='https://rodionov.moscow/' title='rodionov.moscow' target="_blank" rel="noreferrer"> Родионов Илья - Frontend developer</a><br />
        </h3>
        <h5 className='footer-text'>
          <a className='footer-link' href='https://github.com/' title='GitHub' target="_blank" rel="noreferrer"> Исходный код - GitHub</a><br />
        </h5>
      </footer>
    </div>
  )
}
