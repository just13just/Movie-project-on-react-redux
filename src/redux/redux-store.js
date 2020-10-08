import { combineReducers, createStore } from 'redux';
import filmsReducer from './filmsReducer';


const reducers = combineReducers({
    mainData: filmsReducer
})

const store = createStore(reducers)

export default store;