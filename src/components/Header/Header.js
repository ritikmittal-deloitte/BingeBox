import React from 'react';
import {ReactComponent as NotifiactionLogo} from "../../assets/icons/Vector.svg"
import "./header.scss"
import { NavLink } from 'react-router-dom';
import { ReactComponent as SearchLogo } from "../../assets/icons/search.svg";

import  profilePhoto from "../../assets/images/profile-photo.svg";
import Logo from '../Logo/Logo';

const Header = () => {
    return (
        <div className='d-flex justify-content-between w-100 align-items-end header-container'>
            <Logo/>
            <div className='d-flex justify-content-between w-30'>
               <NavLink to="/movies" className={({ isActive }) => (isActive ? "header-link-active-style" : "")}>Movies</NavLink>
               <NavLink to="/series" className={({ isActive }) => (isActive ? "header-link-active-style" : "")}>Series</NavLink>
               <NavLink to="/tv-shows" className={({ isActive }) => (isActive ? "header-link-active-style" : "")}>TV Shows</NavLink>
               <NavLink to="/anime" className={({ isActive }) => (isActive ? "header-link-active-style" : "")}>Anime</NavLink>
            </div>
            <div className='d-flex  w-30'>
                <div className='d-flex align-items-end'>
                    <SearchLogo width="1.3rem" height="1.3rem"/>

                <input type="text" placeholder='search here'/>

                </div>
                <div className='d-flex justify-content-center align-items-center last-container'>
                <NotifiactionLogo width="1.1rem" height="1.3rem" className='noti-icon'/>
             <img src={profilePhoto} className='profile-style'/>

                </div>
             
             

            </div>
        </div>
    );
};

export default Header;