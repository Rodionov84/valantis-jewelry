import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
//import { useEffect } from 'react';

export function PageNumbers({ limit }) {
  const maxPokemons = useSelector(state => state.countReducer);
  let page = useSelector(state => state.pageNumberReducer);
  const dispatch = useDispatch();
  let pages = [];

  for (let i = 1; i <= Math.ceil(maxPokemons / limit); i++) {

    pages.push(i)

  }



  function showPagefromTheList(newPage) {
    dispatch({ type: 'GET_PAGE_FROM_THE_LIST', pageFromTheList: newPage });
  }

  function getPrevPage() {
    return dispatch({ type: 'PREV_PAGE' })
  }

  function getNextPage() {
    return dispatch({ type: 'NEXT_PAGE' })
  }

  // useEffect(() => {
  //   changePage();
  // }, [page, limit])


  return (
    <div>
      <div className="pages">
        {pages.map(
          pageConsideringTheLimit => {
            if (pageConsideringTheLimit === page) {
              return (
                <span className='current-pages'>
                  {pageConsideringTheLimit * limit - limit + 1} - {(pageConsideringTheLimit <= maxPokemons / limit) ? (pageConsideringTheLimit * limit) : maxPokemons}
                </span>
              )
            } else if (Math.abs(pageConsideringTheLimit - page) < 5) {
              return (
                <span className='prev-next-pages' onClick={() => showPagefromTheList(pageConsideringTheLimit)}>
                  {pageConsideringTheLimit * limit - limit + 1} - {(pageConsideringTheLimit <= maxPokemons / limit) ? (pageConsideringTheLimit * limit) : maxPokemons}
                </span>
              )
            } else {
              return (
                <span className='not-showed-pages'></span>
              )
            }
          }
        )}
      </div>
      <div className='buttons-change-pages'>
        {
          (page > 1)
            ? (<span className='active-btn' onClick={getPrevPage}>&lt;&lt;&lt; Предыдущая</span>)
            : (<span className='disabled-btn'>&lt;&lt;&lt; Предыдущая </span>)
        }
        <span className='show-page'>{page}</span>
        {
          (page < maxPokemons / limit)
            ? <span className='active-btn' onClick={getNextPage}>Следующая &gt;&gt;&gt;</span>
            : <span className='disabled-btn'>Следующая &gt;&gt;&gt;</span>
        }
      </div>
    </div >
  )
}
