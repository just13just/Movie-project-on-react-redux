import { connect } from 'react-redux';
import { setFavoritesFilmsAC } from '../redux/favoritesReducer';
import FavoritesPage from './FavoritesPage';

const mapStateToProps = (state) => {
    return {
        favoritesFilms: state.favoritesData.favoritesFilms
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setFavoritesFilms: (favoritesFilms) => {
            dispatch(setFavoritesFilmsAC(favoritesFilms))
        }
    }
}

const FavoritesPageContainer = connect(mapStateToProps, mapDispatchToProps)(FavoritesPage)

export default FavoritesPageContainer;