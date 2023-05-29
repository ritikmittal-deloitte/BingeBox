import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import "./appLayout.scss"

const AppLayout = () => {
    return (
        <div className='applayout-container'>
            <Header/>
            <div className='d-flex h-100 w-100 c'>
                {/* <div className='a'> */}
                <Navbar/>
                {/* </div> */}
            
            {/* <div className='b'> */}
            <Outlet/>
            {/* </div> */}
            
            
            

            </div>
            
        </div>
    );
};

export default AppLayout;