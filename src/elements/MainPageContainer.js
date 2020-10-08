import { connect } from 'react-redux';
import { setFilmsAC } from '../redux/filmsReducer';
import MainPage from './MainPage';

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

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage)

export default MainPageContainer;