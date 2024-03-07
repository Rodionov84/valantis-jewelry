import { useDispatch } from 'react-redux';

export function PageNumbers({ filterOn, filterName, payloadValue, page, listLength }) {

  const dispatch = useDispatch();

  function getPrevPage(page) {
    if (filterOn === false) {
      return dispatch({ type: 'PREV_PAGE', page: page })
    }
    return dispatch({
      type: 'PREV_FILTERED_PAGE',
      filterName: filterName,
      payloadValue: payloadValue,
      filteredPage: page,
    })
  }

  function getNextPage(page) {
    if (filterOn === false) {
      return dispatch({ type: 'NEXT_PAGE', page: page })
    }
    return dispatch({
      type: 'NEXT_FILTERED_PAGE',
      filterName: filterName,
      payloadValue: payloadValue,
      filteredPage: page,
    })
  }

  return (
    <div>
      <div className='buttons-change-pages'>
        {
          ((page) === 0)
            ? (<span className='disabled-btn'>&lt;&lt;&lt; Предыдущая </span>)
            : (<span className='active-btn' onClick={() => getPrevPage(page)}><span className='active-arrow'>&lt;&lt;&lt;</span> Предыдущая</span>)
        }
        <span className='show-page'>{page + 1} {listLength && <span>из {(Math.ceil(listLength / 50))}</span>}</span>
        {listLength !== null
          ? (page + 1 < Math.ceil(listLength / 50))
            ? <span className='active-btn' onClick={() => getNextPage(page)}>Следующая <span className='active-arrow'>&gt;&gt;&gt;</span></span>
            : <span className='disabled-btn'>Следующая &gt;&gt;&gt;</span>
          : <span className='active-btn' onClick={() => getNextPage(page)}>Следующая <span className='active-arrow'>&gt;&gt;&gt;</span></span>
        }
      </div>
    </div >
  )
}
