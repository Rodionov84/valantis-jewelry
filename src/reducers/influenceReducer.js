let initialState = [];
localStorage.influence !== undefined
    ? initialState = localStorage.influence.length >= 1
        ? localStorage.influence.split(',')
        : []
    : initialState = [];

export function influenceReducer(state = initialState, action) {
    if (action.type === 'CAUGHT_POKEMON') {
        state.includes(action.id)
            ? localStorage.setItem('influence', state.filter(id => id !== action.id))
            : localStorage.setItem('influence', [...state, action.id])
        return (state.includes(action.id)
            ? state.filter(id => id !== action.id)
            : [...state, action.id]
        )
    }

    return state;
}
