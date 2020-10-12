import React, { useEffect } from 'react';


const MainPage = (props) => {

    useEffect(() => {
        if (props.films.length === 0) {
            fetch(`http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=4`)
                .then(res => res.json())
                .then(res => props.setFilms(res.results))
                .catch(err => console.error(err))
        }
    }, [])

    // for pagination
    // &page=4

    const postersList = props.films
        .map(film => {
            return <div key={film.id} className='poster-wrap'>
                <div className='img-wrap'>
                    <img src={`http://image.tmdb.org/t/p/w342/${film.poster_path}`} alt='img...' className='' />
                    <div className='poster-text'><div><strong>{film.original_title}</strong></div></div>
                </div>
            </div>
        })

    console.log(props.films)

    return (
        <div className='main-page-wrap'>
            <div className='main-page'>
                <div className='main-head'>
                    <h3>Latest releases</h3>
                </div>
                <div className='main-content'>
                    {postersList}
                </div>
                <div className='main-footer'>
                    <h3>pagination</h3>
                </div>
            </div>
        </div>
    )
}

export default MainPage;