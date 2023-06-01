import React , {useContext, useEffect} from 'react';
import "./wishlist.scss"
import { movies } from "../../mockData/moviesMockData";
import Card from '../card/Card';
import { UserContext } from '../../context/Context/UserContext/UserState';


const WatchList = () => {

    const {watchList , setWatchList}=useContext(UserContext);

    useEffect(() => {
        console.log("WatchList :",watchList)
    },[]);

    return (
        <div className='wishlist-page'>
            <p className='d-flex'>My Watchlist</p>
            <div className='wishlist-grid-container h-100'>
            {/* {movies.slice(0,3).map((movie, index) => (
            <Card cardData={movie} key={index} />
          ))} */}
          {movies.slice(0,6).map((movie,index)=>{
          return ( watchList.map((key)=>{
//                console.log("Wtchlist id checking this time:",key)
  //              console.log("MOvie id:",movie)
                if(movie.movieId===key)
                {
                 return  (<Card cardData={movie} key={index} />);
                }
            }))
          })}

            </div>
            
            <div className='footer' ></div>
        </div>
    );
};

export default WatchList;
