import React, { useEffect, useState } from 'react';
import ModalPage from './ModalPage';

const FavoritesPage = (props) => {

    const { modalFilmNum, setModalFilmNum } = props;
    let favoritesFilms = [];
    localStorage.getItem('favoritesFilmsArr') ?
        favoritesFilms = JSON.parse(localStorage.getItem('favoritesFilmsArr')) :
        favoritesFilms = [];

    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        return (() => {
            setModalFilmNum(null);
            console.log('favorites was closed')
        })
    }, [setModalFilmNum])

    const filmsList = favoritesFilms
        .map((film, index) => {
            return <div key={film.id} className='favorites-grid-container'>
                <div className='favorites-img-container' onClick={() => { setModalFilmNum(index) }}>
                    <img src={`http://image.tmdb.org/t/p/w342/${film.poster_path}`} alt='img...' className='' />
                </div>
                <div className='favorites-content-container'>
                    <div className='favorites-text-container'>
                        <h6><strong>{film.original_title}</strong></h6>
                        <button type="button" className="btn btn-outline-secondary btn-favorite-unfavorite" onClick={() => { removeFromFavorites(film.id); setToggle(!toggle) }}><strong>Unfavorite</strong></button>
                    </div>
                    <div className='favorites-overview-wrap'>
                        <div className='favorites-overview'>{film.overview}</div>
                    </div>
                </div>
            </div>
        })


    if (modalFilmNum === null) {
        return (
            <div className='favorites-page-wrap'>
                <div className='favorite-page'>
                    <div className='favorite-head'>
                        <h3>My favorite</h3>
                    </div>
                    {filmsList}
                </div>
            </div>
        )
    }
    else {
        console.log(modalFilmNum)
        return (
            <ModalPage
                modalFilmNum={modalFilmNum}
                setModalFilmNum={setModalFilmNum}
                modalArr={favoritesFilms}
            />
        )
    }
}

export const addToFavorites = (film) => {
    if (localStorage.getItem('favoritesFilmsArr')) {
        let arr = JSON.parse(localStorage.getItem('favoritesFilmsArr'))
        arr.push(film)
        localStorage.setItem('favoritesFilmsArr', JSON.stringify(arr))
    } else {
        localStorage.setItem('favoritesFilmsArr', JSON.stringify([film]))
    }
}
export const removeFromFavorites = (filmId) => {
    let arr = JSON.parse(localStorage.getItem('favoritesFilmsArr'))
    let newArr = arr.filter(f => f.id !== filmId)
    localStorage.setItem('favoritesFilmsArr', JSON.stringify(newArr))
}

export default FavoritesPage;