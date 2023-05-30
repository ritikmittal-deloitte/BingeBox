import React from 'react';
import "./wishlist.scss"
import { movies } from "../../mockData/moviesMockData";
import Card from '../card/Card';

const WatchList = () => {
    return (
        <div className='wishlist-page'>
            <p className='d-flex'>My Watchlist</p>
            <div className='wishlist-grid-container h-100'>
            {movies.slice(0,6).map((movie, index) => (
            <Card cardData={movie} key={index} />
          ))}

            </div>
            
        </div>
    );
};

export default WatchList;