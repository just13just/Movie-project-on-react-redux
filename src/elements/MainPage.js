import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination'
import ModalPage from './ModalPage';


const MainPage = (props) => {

    const { films, setFilms, modalFilmNum, setModalFilmNum } = props;
    const modalArr = films;
    const [pageNum, setPageNum] = useState(null);
    const [totalCount, setTotalCount] = useState(1)

    useEffect(() => {
        fetch(`http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=${pageNum}`)
            .then(res => res.json())
            .then(res => {
                setFilms(res.results)
                setPageNum(res.page)
                setTotalCount(res.total_results)
            })
            .catch(err => console.error(err))
    }, [pageNum, setFilms])

    const postersList = films
        .map((film, index) => {
            return <div key={film.id} onClick={() => { setModalFilmNum(index) }} className='poster-wrap'>
                <div className='img-wrap'>
                    <img src={`http://image.tmdb.org/t/p/w342/${film.poster_path}`} alt='img...' className='' />
                    <div className='poster-text'><div><strong>{film.original_title}</strong></div></div>
                </div>
            </div>
        })

    if (modalFilmNum === null) {
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
                            itemClass="page-item"
                            linkClass="page-link"
                        />
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <ModalPage
                modalFilmNum={modalFilmNum}
                setModalFilmNum={setModalFilmNum}
                modalArr={modalArr}
            />
        )
    }
}

export default MainPage;