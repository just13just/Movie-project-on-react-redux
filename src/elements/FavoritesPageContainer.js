import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setFavoritesFilms, setModalFilmNum } from '../redux/filmsReducer';
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
        if (modalFilmNum) {
            (() => {
                if (modalFilmNum === 0) {
                    setModalFilmNum(0)
                }
                else {
                    setModalFilmNum(modalFilmNum - 1)
                }
            })()
        }
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
        modalFilmNum: state.modalFilmNum,
        favoritesFilms: state.favoritesFilms
    }
}

export default connect(mapStateToProps, {
    setModalFilmNum,
    setFavoritesFilms
})(FavoritesPageContainer)