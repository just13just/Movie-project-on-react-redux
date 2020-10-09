import React, { useEffect } from 'react';


const MainPage = (props) => {

    useEffect(() => {
        fetch("http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c")
            .then(res => res.json())
            .then(res => props.setFilms(res.results))
            .catch(err => console.error(err))
    }, [])

    const postersList = props.films
        .map((film, i) => {
            if (i < 12) {
                return <div key={film.id} className="col-6 col-md-3 col-lg-2">
                    <div className='poster-wrap'>
                        <img src={`http://image.tmdb.org/t/p/w342/${film.poster_path}`} alt='img...' />
                    </div>
                </div>
            }
        })

    console.log(props.films)

    return (
        <div className='main-page-wrap'>
            <div className='main-page'>
                <div className='main-head'>
                    <h3>Latest releases</h3>
                </div>
                <div className='main-content container'>
                    <div className='row'>
                        {postersList}
                    </div>
                </div>
                <div className='main-footer'>
                    <h3>pagination</h3>
                </div>
            </div>
        </div>
    )
}

export default MainPage;