import React from "react";
import "./wishlist.scss";
import Card from '../card/Card';
import {movies} from "../../mockData/moviesMockData";
const WatchList = () => {
    console.log("Movies:",movies)
  return (
    <div className="wishlist-main">
      <div className="head-1">My Wishlist</div>
      <div className="cards-wrap">
 
    {
        movies.map((movie,index)=><Card cardData={movie} key={index}/>)
    }
    {/* {
        movies.map((movie,index)=><Card cardData={movie} key={index}/>)
    } */}
      </div>
    </div>
  );
};

export default WatchList;
