import React from 'react';

const FavoritesPage = (props) => {
    console.log(props)
    const filmsList = props.favoritesFilms
        .map(film => {
            return <div key={film.id} className='favorites-grid-container'>
                <div className='favorites-img-container'>
                    <img src={`http://image.tmdb.org/t/p/w342/${film.poster_path}`} alt='img...' className='' />
                </div>
                <div className='favorites-content-container'>
                    <div className='favorites-text-container'>
                        <h3><strong>{film.original_title}</strong></h3>
                        <button type="button" className="btn btn-outline-secondary"><strong>Unfavorite</strong></button>
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

export default FavoritesPage;