const SET_FAVORITES_FILMS = "SET_FAVORITES_FILMS";

const initialState = {
    favoritesFilms: []
}

const favoritesReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_FAVORITES_FILMS:
            return { ...state, favoritesFilms: [ ...action.favoritesFilms] }


        default:
            return state
    }
}

export const setFavoritesFilmsAC = (favoritesFilms) => {
    return { type: SET_FAVORITES_FILMS, favoritesFilms }
}

export default favoritesReducer;