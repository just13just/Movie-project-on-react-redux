import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setFilmsAC } from '../redux/filmsReducer';
import MainPage from './MainPage';

const MainPageContainer = (props) => {

    const { films, setFilms, modalFilmNum, setModalFilmNum, toggle, setToggle } = props;
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

    return (
        <MainPage
            films={films}
            modalFilmNum={modalFilmNum}
            setModalFilmNum={setModalFilmNum}
            toggle={toggle}
            setToggle={setToggle}
            totalCount={totalCount}
            pageNum={pageNum}
            setPageNum={setPageNum}
        />
    )

}

const mapStateToProps = (state) => {
    return {
        films: state.mainData.films
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setFilms: (films) => {
            dispatch(setFilmsAC(films))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer)