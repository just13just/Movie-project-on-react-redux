import React from 'react';
import Menu from './Menu';
import ModalPage from './ModalPage';

const FavoritesPage = (props) => {

    const { modalFilmNum,
        setModalFilmNum,
        favoritesFilms,
        addToFavorites,
        removeFromFavorites } = props;

    const filmsList = favoritesFilms
        .map((film, index) => {
            return <div key={film.id} className='favorites-grid-container'>
                <div className='favorites-img-container' onClick={() => { setModalFilmNum(index) }}>
                    <img src={`http://image.tmdb.org/t/p/w342/${film.poster_path}`} alt='img...' className='' />
                </div>
                <div className='favorites-content-container'>
                    <div className='favorites-text-container'>
                        <h6><strong>{film.original_title}</strong></h6>
                        <button type="button" className="btn btn-outline-secondary btn-favorite-unfavorite" onClick={() => { removeFromFavorites(film.id) }}><strong>Unfavorite</strong></button>
                    </div>
                    <div className='favorites-overview-wrap'>
                        <div className='favorites-overview'>{film.overview}</div>
                    </div>
                </div>
            </div>
        })


    if (modalFilmNum === null || favoritesFilms.length === 0) {
        return (
            <>
                <div className={modalFilmNum !== null ? `main-menu` : ``}>
                    <Menu
                        setModalFilmNum={setModalFilmNum}
                    />
                </div>
                <div className='favorites-page-wrap'>
                    <div className='favorite-page'>
                        <div className='favorite-head'>
                            <h3>My favorite {favoritesFilms.length === 0 ? <span>list is empty</span> : null}</h3>
                        </div>
                        {filmsList}
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className={modalFilmNum !== null ? `main-menu` : ``}>
                    <Menu
                        setModalFilmNum={setModalFilmNum}
                    />
                </div>
                <ModalPage
                    modalFilmNum={modalFilmNum}
                    setModalFilmNum={setModalFilmNum}
                    modalArr={favoritesFilms}
                    favoritesFilms={favoritesFilms}
                    addToFavorites={addToFavorites}
                    removeFromFavorites={removeFromFavorites}
                />
            </>
        )
    }
}

export default FavoritesPage;