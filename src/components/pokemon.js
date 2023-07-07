import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BounceLoader } from "react-spinners";
import { AbilitiesButton } from "./abilitiesButton";

export function Pokemon({ id, name }) {
  const picPath = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const dispatch = useDispatch();
  const caughtIds = useSelector(state => state.influenceReducer);
  //const viewPreloader = useSelector(state => state.preloaderReducer)
  const abilityStore = useSelector(state => state.abilitiesReducer);
  let caught = caughtIds.includes(id);

  function togglePockemon(id) {
    dispatch({ type: 'CAUGHT_POKEMON', id })
  }

  //  1. Изначально кнопка загрузить абилити, если их еще нет
  //  2. При нажатии на кнопку вызывать запрос для этого покемона
  //  3. В запрос добавим дополнтельную задержку 500 мс
  //  4. После клика начинается загрузка → рисуем лоадер
  //  5. Когда данные загрузились → через запятую выводим абилити вместо кнопки

  return (
    <div className="pokemon" style={{ background: caught ? "red" : "green" }}>
      <p className="pokemon__name">{name}</p>
      {abilityStore[id] !== undefined &&
        abilityStore[id].status === 'pending' &&
        <p className="pokemon-abilities-downloader-box">
          <BounceLoader className="pokemon-abilities-downloader" color='yellow' />
        </p>
      }
      <AbilitiesButton id={id} />
      <img className="pokemon__image" src={picPath} alt="avatar"></img>
      <button onClick={() => togglePockemon(id)} className="pokemon__button" type="button" >{caught ? "Отпустить" : "Поймать"}</button>
    </div >
  )
}

// https://beta.reactjs.org/learn/importing-and-exporting-components#exporting-and-importing-a-component
