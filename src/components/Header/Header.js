import React from 'react';
import {ReactComponent as NotifiactionLogo} from "../../assets/icons/Vector.svg"

const Header = () => {
    return (
        <div className='d-flex justify-content-between m-2 w-100'>
            <h2>BingeBox</h2>
            <div className='d-flex justify-content-between w-30'>
               <a href="/movies">Movies</a>
               <a href="/series">Series</a>
               <a href="/tv-shows">TV Shows</a>
               <a href="/anime">Anime</a>
            </div>
            <div>
             <input type="text" placeholder='search here'/>
             <NotifiactionLogo/>

            </div>
        </div>
    );
};

export default Header;