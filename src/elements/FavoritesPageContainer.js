import React from 'react';
import { connect } from 'react-redux';
import { setModalFilmNumAC } from '../redux/filmsReducer';
import FavoritesPage from './FavoritesPage';


const FavoritesPageContainer = (props) => {

    const { modalFilmNum, setModalFilmNum, toggle, setToggle } = props;

    return (
        <FavoritesPage
            modalFilmNum={modalFilmNum}
            setModalFilmNum={setModalFilmNum}
            toggle={toggle}
            setToggle={setToggle}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        modalFilmNum: state.mainData.modalFilmNum
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setModalFilmNum: (films) => {
            dispatch(setModalFilmNumAC(films))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPageContainer)