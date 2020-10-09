const SET_FILMS = "SET_FILMS";

const initialState = {
    films: []
}

const filmsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_FILMS:
            return { ...state, films: [...state.films, ...action.films] }


        default:
            return state
    }
}

export const setFilmsAC = (films) => {
    return { type: SET_FILMS, films }
}

export default filmsReducer;