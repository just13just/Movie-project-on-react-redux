import { combineReducers, createStore } from 'redux';
import favoritesReducer from './favoritesReducer';
import filmsReducer from './filmsReducer';


const reducers = combineReducers({
    mainData: filmsReducer,
    favoritesData: favoritesReducer
})

const store = createStore(reducers)

export default store;