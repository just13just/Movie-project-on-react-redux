const SET_FILMS = "SET_FILMS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_PAGE_NUM = "SET_PAGE_NUM";
const SET_MODAL_FILM_NUM = "SET_MODAL_FILM_NUM";

const initialState = {
    films: [],
    totalCount: 0,
    pageNum: null,
    modalFilmNum: null
}

const filmsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_FILMS:
            return { ...state, films: [...action.films] }

        case SET_TOTAL_COUNT:
            return { ...state, totalCount: action.count }

        case SET_PAGE_NUM:
            return { ...state, pageNum: action.num }

        case SET_MODAL_FILM_NUM:
            return { ...state, modalFilmNum: action.num }

        default:
            return state
    }
}

export const setFilmsAC = (films) => {
    return { type: SET_FILMS, films }
}
export const setTotalCountAC = (count) => {
    return { type: SET_TOTAL_COUNT, count }
}
export const setPageNumAC = (num) => {
    return { type: SET_PAGE_NUM, num }
}
export const setModalFilmNumAC = (num) => {
    return { type: SET_MODAL_FILM_NUM, num }
}

export default filmsReducer;