import { connect } from 'react-redux';
import { setFilmsAC } from '../redux/filmsReducer';
import FavoritesPage from './FavoritesPage';

const mapStateToProps = (state) => {
    return {
        films: state.mainData.films
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setFilms: (films) => {
            dispatch(setFilmsAC(films))
        }
    }
}

const FavoritesPageContainer = connect(mapStateToProps, mapDispatchToProps)(FavoritesPage)

export default FavoritesPageContainer;