import React from 'react';

const Menu = () => {
    return (
        <div className='menu'>
            <div className='left-side-menu'>
                <div className='menu-circle'>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    </svg>
                </div>
                <div className='movies'><h3>Movies</h3></div>
            </div>
            <div className='right-side-menu'>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        My Account
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item item-dropdown" href="#">Main page</a>
                        <a className="dropdown-item item-dropdown" href="#">Favorites</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;