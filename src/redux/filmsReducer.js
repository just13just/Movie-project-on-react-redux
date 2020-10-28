const SET_FILMS = "SET_FILMS";
const SET_MODAL_FILM_NUM = "SET_MODAL_FILM_NUM";

const initialState = {
    films: [],
    modalFilmNum: null
}

const filmsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_FILMS:
            return { ...state, films: [...action.films] }

        case SET_MODAL_FILM_NUM:
            return { ...state, modalFilmNum: action.num }

        default:
            return state
    }
}

export const setFilmsAC = (films) => {
    return { type: SET_FILMS, films }
}
export const setModalFilmNumAC = (num) => {
    return { type: SET_MODAL_FILM_NUM, num }
}

export default filmsReducer;