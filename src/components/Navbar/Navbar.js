import React from 'react';
import {ReactComponent as NotifiactionLogo} from "../../assets/icons/Vector.svg"
import { Link } from 'react-router-dom';
import "./navbar.scss"

const Navbar = () => {
    return (
        <div className='d-flex flex-column justify-content-center navbar-container'>
            
               <Link to="/home">Home</Link>
               <Link to="/wishlist">Wishlist</Link>
               <Link to="/filter">Filter</Link>
               <Link to="/settings">Settings</Link>
            
        </div>
    );
};

export default Navbar;