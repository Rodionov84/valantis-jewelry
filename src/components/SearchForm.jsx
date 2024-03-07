import { store } from '../store';

export function SearchForm({filterNameState, setFilterOn, valueState, setFilterNameState, setValueState}) {

    function setCountZero() {
        return store.dispatch({ type: 'SET_COUNT_ZERO' })
      }

    function getFilterPage(event) {
        event.preventDefault();
        if (filterNameState === undefined || filterNameState === null || valueState === '') {
          alert('Не выбран критерий поиска или не указано значение!');
          return;
        } else {
          setFilterOn(true);
          setCountZero();
          store.dispatch(
            {
              type: 'GET_FILTER',
              filterName: filterNameState,
              payloadValue: valueState,
              filteredPage: 0,
            }
          )
        }
      }

    return (<div className="custom-select">
        <form className='form-border'>
            <select className='form-select' onChange={(event) => setFilterNameState(event.target.value)} placeholder='Выберете значение' defaultValue=''>
                <option value={null}>Выберете критерий поиска:</option>
                <option value='product'>Название</option>
                <option value='price'>Цена</option>
                <option value='brand'>Бренд</option>
            </select>
            <input className='form-imput' onChange={(event) => setValueState(event.target.value)} placeholder='Укажите название изделия, его цену либо бренд...'></input>
        <button className='form-button' onClick={(event) => getFilterPage(event)}>Фильтровать</button>
        <button className='form-button'><a href="/" style={{ textDecoration: 'none', color: "black", cursor: "default" }}><span style={{ color: "red" }}>Х</span> Сбросить</a></button>
        </form>
        <span className="show-page"></span>
    </div>)
}
