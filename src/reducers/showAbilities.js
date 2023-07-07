import { downloadAbilities } from "../downloaders/dowloadAbilities";

export function showAbilities(id) {
  return function (dispatch) {
    dispatch({ type: 'GET_ABILITIES_START', id })
    downloadAbilities(id)
      .then(data => {
        dispatch({ type: 'GET_ABILITIES', id, data })
      });
  }
}
