import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    setFilmsAC,
    setModalFilmNumAC,
    setPageNumAC,
    setTotalCountAC
} from '../redux/filmsReducer';
import MainPage from './MainPage';

const MainPageContainer = (props) => {

    const {
        films,
        setFilms,
        modalFilmNum,
        setModalFilmNum,
        toggle,
        setToggle,
        totalCount,
        setTotalCount,
        pageNum,
        setPageNum
    } = props;

    useEffect(() => {
        fetch(`http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=${pageNum}`)
            .then(res => res.json())
            .then(res => {
                setFilms(res.results)
                setPageNum(res.page)
                setTotalCount(res.total_results)
            })
            .catch(err => console.error(err))
    }, [pageNum, setFilms, setTotalCount, setPageNum])

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
        films: state.mainData.films,
        totalCount: state.mainData.totalCount,
        pageNum: state.mainData.pageNum,
        modalFilmNum: state.mainData.modalFilmNum
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setFilms: (films) => {
            dispatch(setFilmsAC(films))
        },
        setTotalCount: (count) => {
            dispatch(setTotalCountAC(count))
        },
        setPageNum: (num) => {
            dispatch(setPageNumAC(num))
        },
        setModalFilmNum: (films) => {
            dispatch(setModalFilmNumAC(films))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer)