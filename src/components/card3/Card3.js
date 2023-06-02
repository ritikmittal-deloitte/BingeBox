import React, { useContext, useState } from "react";
import { ReactComponent as PlayLogo } from "../../assets/images/play-button.svg";

import { ReactComponent as AddToLogo } from "../../assets/icons/addTodesc.svg";
import "./card3.scss";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/Context/UserContext/UserState";


const Card = ({ cardData }) => {
  const [onHovering, setOnHovering] = useState(false);
  const {watchList,setWatchList}=useContext(UserContext);

 
 // console.log("Card Data :",cardData)
  const navigate = useNavigate();
  const handleMouseOver = () => {
    setOnHovering(true);
  };
  const handleMouseOut = () => {
    setOnHovering(false);
  };

  const getDynamicStyles = () => {
    if (onHovering) {
      return {
        
        height: '23rem',
        width: '45rem',
        transition: 'height 0.5s, width 0.5s',
      };
    }
    return {
      height: '23rem',
      width: '20rem',
      transition: 'height 0.5s, width 0.5s',
    };
  };

  
  const handleBackgorndImage = (image) => {
    return {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      borderRadius: "0.938rem",
    };
  };

  const handleVideoStyle = () => {
    return {
      width: "100%",
      height: "100%",
      borderRadius: "0.938rem",
    };
  };
  const handleAddToWatchList=(event)=>{
    console.log("Card Data :",cardData.movieId)
    console.log("Current Watch List:",watchList)
    setWatchList([...watchList,cardData.movieId]);  
//    setWatchList(previousState => new Set([...previousState,cardData.movieId]));
   console.log("add to watch list:",event)
   event.stopPropagation();
   navigate("/wishlist");

  }
  // const handlePlayMovie=()=>{
  //   console.log("play movie")
  //   window.location.replace('https://www.youtube.com/watch?v=fb5ELWi-ekk');
  // }

  const handleOnClick=()=>{
//    navigate("/wishlist");
    navigate("/description/10")
  }

  return (
    <div
      className={`card-container-3 ${onHovering?"card-container-hovering-style-3":""}`}
      style={getDynamicStyles()}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleOnClick}
    >
      {
        !onHovering&&<div
        style={handleBackgorndImage(cardData.posterImage)}
        className={`w-100 h-100 ${onHovering ? "base-styles-3" : ""}`}
        
      >
        </div>
      }
      
      {/* {onHovering && (
        <div
          className={`d-flex align-items-end  w-100 h-100 hover-card-style  ${
            onHovering ? "overlay-styles-3" : ""
          }`}
        >
          <div className="card-end-container w-100 d-flex justify-content-around">
            <div className="card-details-container d-flex flex-column align-items-start">
              <h2>{cardData.title}</h2>
              <div className="d-flex  justify-content-between card-release-style">
                <div className="cbfc-style">CBFC : U/A</div>

                <h4 className="px-3">{cardData.releaseYear}</h4>
                <h4>{cardData.movieDuraction}</h4>
              </div>
            </div>
            <div className="d-flex card-logo-container align-items-center">
            <div onClick={handlePlayMovie}><PlayLogo /></div >
              <div onClick={handleAddToWatchList}><AddToLogo width={50} height={51} /></div >
              
            </div>
          </div>
        </div>
        
      )} */}
      {onHovering && (
        <>
        <iframe width="560" height="315"  src={`${cardData.videoUrl}`+"?autoplay=1&controls=0"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className={`w-100 h-100 ${onHovering ? "base-styles-3" : ""}`}></iframe>
        <div
          className={`d-flex   w-100 h-100 hover-card-style-3  ${
            onHovering ? "overlay-styles-3" : ""
          }`}
        >
          <div className="card-end-container">
          <div className="card-logo-container-3 ">
            <a  href={cardData.videoUrl} target="_blank"><PlayLogo width={40} height={41} /></a >
              <div onClick={(event)=>{handleAddToWatchList(event)}}><AddToLogo width={40} height={41} /></div >
              
            </div>
            <div className="card-details-container-3 ">
              <div className="card-movie-name-3">&nbsp;&nbsp;{cardData.title}</div>
              {/* <div className="d-flex  justify-content-between card-release-style">
                <div className="cbfc-style">CBFC : U/A</div>

                <h4 className="px-3">{cardData.releaseYear}</h4>
                <h4>{cardData.movieDuraction}</h4>
              </div> */}
              <div className="card-last-container-3">
          <div className="rate-1">&nbsp;CBFC : U/A&nbsp;</div>
          <div className="ab-3"> {cardData.releaseYear} | {cardData.duration}</div>   
          {cardData.genre.map((item)=>{
           return  <div className="last-1">&nbsp;{item}&nbsp;</div>
          })}
 </div>
            </div>

          </div>
        </div>
        </>
      )}

      
    </div>
  );
};

export default Card;
