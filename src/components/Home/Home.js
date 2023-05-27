import React from 'react';
import "./home.scss";
import ItemCard from '../Card/ItemCard';


const Home = () => {
    return (
        <div className='background-design '>
      
            <div className='w-100 design-apart'>
            </div>
            <div className='w-100 design-bpart'>
            <ItemCard/>  

            </div>
        </div>
    );
};

export default Home;