import React, { useState } from 'react';
import { addToFavorites, removeFromFavorites } from './FavoritesPage';


const ModalPage = (props) => {

    const [toggle, setToggle] = useState(false)

    return (
        <div
            style={{
                backgroundImage: `url(http://image.tmdb.org/t/p/original/${props.modalArr[props.modalFilmNum].poster_path})`,
                height: 'calc(100vh - 80px)',
                width: '100%',
                backgroundSize: "cover",
                backgroundPosition: 'center',
                backgroundColor: 'rgb(0, 0, 0, 0.7)'
            }}
        >
            <div className='modal-page-container'>
                <div className='modal-page-btn-row'>
                    <div className='modal-btn' onClick={() => props.setModalFilmNum(null)}>
                        <div className='modal-btn-lg'>
                            <strong className='modal-page-svg'>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                                </svg>
                            </strong>
                            Back to list
                        </div>
                        <div className='modal-btn-sm'>
                            <strong>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                </svg>
                            </strong>
                            Back
                        </div>
                    </div>
                    {props.modalFilmNum < props.modalArr.length - 1 ?
                        <div className='modal-btn' onClick={() => props.setModalFilmNum(props.modalFilmNum + 1)}>
                            <div className='modal-btn-lg'>
                                Next movie
                                <strong className='modal-page-svg'>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z" />
                                    </svg>
                                </strong>
                            </div>
                            <div className='modal-btn-sm'>
                                Next
                                <strong>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </strong>
                            </div>
                        </div> : null}
                </div>
                <div className='modal-page-content-container'>
                    <img src={`http://image.tmdb.org/t/p/w342/${props.modalArr[props.modalFilmNum].poster_path}`} alt='img...' className='' />
                    <div className='modal-page-content-text'>
                        {localStorage.getItem('favoritesFilmsArr') && JSON.parse(localStorage.getItem('favoritesFilmsArr'))
                            .find(film => film.id === props.modalArr[props.modalFilmNum].id) ?
                            <button className='btn btn-outline-secondary' type='button' onClick={() => { removeFromFavorites(props.modalArr[props.modalFilmNum].id); setToggle(!toggle) }}>
                                <span className='modal-page-favorite-btn-lg'>Unfavorite</span>
                                <span className='modal-page-favorite-btn-sm'>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                </span>
                            </button> :
                            <button className='btn btn-outline-secondary' type='button' onClick={() => { addToFavorites(props.modalArr[props.modalFilmNum]); setToggle(!toggle) }}>
                                <span className='modal-page-favorite-btn-lg'>Add to favorite</span>
                                <span className='modal-page-favorite-btn-sm'>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                    </svg>
                                </span>
                            </button>}
                        <div className='modal-page-title-lg'>
                            <h2>{`${props.modalArr[props.modalFilmNum].original_title} (${parseInt(props.modalArr[props.modalFilmNum].release_date)})`}</h2>
                        </div>
                        <div className='modal-page-content-text-first-row'>
                            <div className='modal-page-score-rating'>
                                Score: {props.modalArr[props.modalFilmNum].vote_average}
                            </div>
                            <div className='modal-page-score-rating'>
                                Rating: {props.modalArr[props.modalFilmNum].adult ? 'R' : 'Pg'}
                            </div>
                            <div >
                                Release Date: {props.modalArr[props.modalFilmNum].release_date}
                            </div>
                        </div>
                        <div className='modal-page-text-lg'>
                            <hr />
                            <p>{props.modalArr[props.modalFilmNum].overview}</p>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalPage;