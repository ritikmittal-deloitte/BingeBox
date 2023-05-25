import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import "./appLayout.scss"

const AppLayout = () => {
    return (
        <div className='applayout-container'>
            <Header/>
            <div className='d-flex h-100'>
            <Navbar/>
            <Outlet/>

            </div>
            
        </div>
    );
};

export default AppLayout;