import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    setFavoritesFilmsAC,
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
        totalCount,
        setTotalCount,
        pageNum,
        setPageNum,
        favoritesFilms,
        setFavoritesFilms
    } = props;

    useEffect(() => {
        fetch(`http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=${pageNum}`)
            .then(res => res.json())
            .then(res => {
                setFilms(res.results)
                setPageNum(res.page)
                setTotalCount(res.total_results - 1)
            })
            .catch(err => console.error(err))
    }, [pageNum, setFilms, setTotalCount, setPageNum])

    const addToFavorites = (film) => {
        setFavoritesFilms(favoritesFilms.concat(film))
    }
    const removeFromFavorites = (filmId) => {
        let temporary = favoritesFilms.filter(f => f.id !== filmId)
        setFavoritesFilms(temporary)
    }

    useEffect(() => {
        if (localStorage.getItem('favoritesFilmsArr')) {
            setFavoritesFilms(JSON.parse(localStorage.getItem('favoritesFilmsArr')))
        }
    }, [setFavoritesFilms])

    useEffect(() => {
        localStorage.setItem('favoritesFilmsArr', JSON.stringify(favoritesFilms))
    }, [favoritesFilms])

    return (
        <MainPage
            films={films}
            modalFilmNum={modalFilmNum}
            setModalFilmNum={setModalFilmNum}
            totalCount={totalCount}
            pageNum={pageNum}
            setPageNum={setPageNum}
            favoritesFilms={favoritesFilms}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        films: state.mainData.films,
        totalCount: state.mainData.totalCount,
        pageNum: state.mainData.pageNum,
        modalFilmNum: state.mainData.modalFilmNum,
        favoritesFilms: state.mainData.favoritesFilms
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
        },
        setFavoritesFilms: (films) => {
            dispatch(setFavoritesFilmsAC(films))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer)