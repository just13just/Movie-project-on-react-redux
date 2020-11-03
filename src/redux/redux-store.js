import { createStore } from 'redux';
import filmsReducer from './filmsReducer';


const store = createStore(filmsReducer)

export default store;