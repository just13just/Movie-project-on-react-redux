import React from 'react';


const ModalPage = (props) => {

    console.log(props.modalArr[props.modalFilmNum])

    return (
        <div className='modal-page-wrap'>
            {props.modalArr[props.modalFilmNum].original_title}
            <button type='button' onClick={() => props.setModalFilmNum(null)}>Back to list</button>
            <button type='button' onClick={() => props.setModalFilmNum(props.modalFilmNum + 1)}>Next movie</button> 
        </div>
    )
}

export default ModalPage;