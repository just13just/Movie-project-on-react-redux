import React from 'react';


const ModalPage = (props) => {

    return (
        <div
            style={{
                backgroundImage: `url(http://image.tmdb.org/t/p/original/${props.modalArr[props.modalFilmNum].poster_path})`,
                height: 'calc(100vh - 80px)',
                width: '100%',
                backgroundSize: "cover",
                backgroundPosition: 'center',
                // filter: 'blur(1px)'
                backgroundColor: 'rgb(0, 0, 0, 0.7)'
            }}
        >
            <div className='modal-page-container'>
                <div className='modal-page-btn-row'>
                    <div className='modal-btn' onClick={() => props.setModalFilmNum(null)}>
                        <strong className='modal-page-svg'>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                            </svg>
                        </strong>
                            Back to list
                        </div>
                    {props.modalFilmNum < 19 ?
                        <div className='modal-btn' onClick={() => props.setModalFilmNum(props.modalFilmNum + 1)}>
                            Next movie
                            <strong className='modal-page-svg'>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z" />
                                </svg>
                            </strong>
                        </div> : null}
                </div>
                <div className='modal-page-content-container'>
                    <img src={`http://image.tmdb.org/t/p/w342/${props.modalArr[props.modalFilmNum].poster_path}`} alt='img...' className='' />
                    <div className='modal-page-content-text'>
                        <button className='btn btn-outline-secondary' type='button' >Add to favorite</button>
                        <div>
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
                        <div>
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