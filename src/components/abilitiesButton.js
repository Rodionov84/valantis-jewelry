import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { showAbilities } from "../reducers/showAbilities";

export function AbilitiesButton({ id }) {
    const abilityStore = useSelector(state => state.abilitiesReducer);
    const dispatch = useDispatch();

    if (!(id in abilityStore)) {
        return (
            <button
                // onClick={() => showAbilities(id)(dispatch)}   без санок
                onClick={() => dispatch(showAbilities(id))}
                className="pokemon__button__abilities" type="button"
            >
                Способности
            </button>
        )
    }
    
    if (abilityStore[id].data === null) {
        return null;
    }

    return abilityStore[id].data.join(', ');
}
