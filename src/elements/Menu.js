import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {

    const { setModalFilmNum } = props;

    return (
        <div className='menu'>
            <div className='left-side-menu'>
                <div className='menu-circle'>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-camera-reels-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M0 8a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8z" />
                        <circle cx="3" cy="3" r="3" />
                        <circle cx="9" cy="3" r="3" />
                    </svg>
                </div>
                <div className='movies'><h3>Movies</h3></div>
            </div>
            <div className='right-side-menu'>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle menu-dropdown-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className='dropDownButton'> My Account </span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                        <Link className="dropdown-item item-dropdown" to="/" onClick={() => { setModalFilmNum(null) }}>Main page</Link>
                        <Link className="dropdown-item item-dropdown" to="/favorites" onClick={() => { setModalFilmNum(null) }}>Favorites</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;