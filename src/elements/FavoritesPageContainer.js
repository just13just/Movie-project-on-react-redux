import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setFavoritesFilmsAC, setModalFilmNumAC } from '../redux/filmsReducer';
import FavoritesPage from './FavoritesPage';


const FavoritesPageContainer = (props) => {

    const { modalFilmNum,
        setModalFilmNum,
        favoritesFilms,
        setFavoritesFilms } = props;


    const addToFavorites = (film) => {
        setFavoritesFilms(favoritesFilms.concat(film))
    }
    const removeFromFavorites = (filmId) => {
        let temporary = favoritesFilms.filter(f => f.id !== filmId)
        setFavoritesFilms(temporary);
        (() => {
            if (modalFilmNum === 0) {
                setModalFilmNum(0)
            }
            else {
                setModalFilmNum(modalFilmNum - 1)
            }
        })()
    }

    useEffect(() => {
        if (localStorage.getItem('favoritesFilmsArr')) {
            setFavoritesFilms(JSON.parse(localStorage.getItem('favoritesFilmsArr')))
        }
    }, [setFavoritesFilms])

    useEffect(() => {
        localStorage.setItem('favoritesFilmsArr', JSON.stringify(favoritesFilms))
    }, [favoritesFilms])

    return (
        <FavoritesPage
            modalFilmNum={modalFilmNum}
            setModalFilmNum={setModalFilmNum}
            favoritesFilms={favoritesFilms}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        modalFilmNum: state.mainData.modalFilmNum,
        favoritesFilms: state.mainData.favoritesFilms
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setModalFilmNum: (films) => {
            dispatch(setModalFilmNumAC(films))
        },
        setFavoritesFilms: (films) => {
            dispatch(setFavoritesFilmsAC(films))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPageContainer)