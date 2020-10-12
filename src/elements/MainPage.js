import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination'


const MainPage = (props) => {

    const [pageNum, setPageNum] = useState(null);
    const [totalCount, setTotalCount] = useState(null)

    useEffect(() => {
        fetch(`http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=${pageNum}`)
            .then(res => res.json())
            .then(res => {
                props.setFilms(res.results)
                setPageNum(res.page)
                setTotalCount(res.total_results)
            })
            .catch(err => console.error(err))
    }, [pageNum])

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
                    <Pagination
                        activePage={pageNum}
                        itemsCountPerPage={20}
                        totalItemsCount={totalCount}
                        pageRangeDisplayed={3}
                        onChange={setPageNum}
                        prevPageText={'Prev'}
                        nextPageText={'Next'}
                        firstPageText={'First'}
                        lastPageText={'Last'}
                        hideDisabled={true}
                        activeLinkClass={'active-pagination'}
                    />
                </div>
            </div>
        </div>
    )
}

export default MainPage;