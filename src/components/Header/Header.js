import React from 'react';
import {ReactComponent as NotifiactionLogo} from "../../assets/icons/Vector.svg"
import "./header.scss"
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='d-flex justify-content-between w-100 align-items-end header-container'>
            <h2>BingeBox</h2>
            <div className='d-flex justify-content-between w-30'>
               <NavLink href="/movies">Movies</NavLink>
               <NavLink href="/series">Series</NavLink>
               <NavLink href="/tv-shows">TV Shows</NavLink>
               <NavLink href="/anime">Anime</NavLink>
            </div>
            <div>
             <input type="text" placeholder='search here'/>
             <NotifiactionLogo/>

            </div>
        </div>
    );
};

export default Header;