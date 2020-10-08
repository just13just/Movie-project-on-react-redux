const SET_FILMS = "SET_FILMS";

const initialState = {
    films: [
        {
            original_title: 'Jurassic World',
            release_date: "2015-06-12"
        }
    ]
}

const filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILMS:
            {
                return state
            }

        default:
            {
                return state
            }
    }
}

export const setFilmsAC = (films) => {
    return { type: SET_FILMS, films }
}

export default filmsReducer;