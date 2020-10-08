import React, { useEffect } from 'react';


const MainPage = () => {

    // useEffect(() => {
    //     fetch("http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c")
    //         .then(res => res.json())
    //         .then(res => console.log(res))
    //         .catch(err => console.error(err))
    // }, []) 

    return (
        <div className='main-page-wrap'>
            <div className='main-page'>
                <div className='main-head'>
                    <h3>Latest releases</h3>
                </div>
                <div className='main-content'>
                    <h1>Movies</h1>
                </div>
                <div className='main-footer'>
                    <h3>pagination</h3>
                </div>
            </div>
        </div>
    )
}

export default MainPage;