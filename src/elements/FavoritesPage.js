import React, { useState } from 'react';

const FavoritesPage = () => {

    const favoritesFilms = JSON.parse(localStorage.getItem('favoritesFilmsArr'))
    const [toggle, setToggle] = useState(false)

    const filmsList = favoritesFilms
        .map(film => {
            return <div key={film.id} className='favorites-grid-container'>
                <div className='favorites-img-container'>
                    <img src={`http://image.tmdb.org/t/p/w342/${film.poster_path}`} alt='img...' className='' />
                </div>
                <div className='favorites-content-container'>
                    <div className='favorites-text-container'>
                        <h3><strong>{film.original_title}</strong></h3>
                        <button type="button" className="btn btn-outline-secondary" onClick={() => { removeFromFavorites(film.id); setToggle(!toggle) }}><strong>Unfavorite</strong></button>
                    </div>
                    <div className='favorites-overview-wrap'>
                        <div className='favorites-overview'>{film.overview}</div>
                    </div>
                </div>
            </div>
        })



    return <div className='favorites-page-wrap'>
        <div className='favorite-page'>
            <div className='favorite-head'>
                <h3>My favorite</h3>
            </div>
            {filmsList}
        </div>
    </div>
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