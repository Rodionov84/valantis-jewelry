const abilities = {};

export function abilitiesReducer(state = abilities, action) {
    if (action.type === 'GET_ABILITIES_START') {

        return {
            ...state, [action.id]: {
                status: 'pending',
                data: null,
            }
        }
    }
    if (action.type === 'GET_ABILITIES') {

        return {
            ...state, [action.id]: {
                status: 'fulfilled',
                data: action.data,
            }
        }
    }

    return state;
}

