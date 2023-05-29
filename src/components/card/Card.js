import React, { useState } from "react";
import { ReactComponent as PlayLogo } from "../../assets/images/play-button.svg";
import { ReactComponent as CbfcLogo } from "../../assets/icons/cbfc.svg";
import { ReactComponent as AddToLogo } from "../../assets/icons/addTodesc.svg";
import "./card.scss";

const Card = ({ cardData }) => {
  const [onHovering, setOnHovering] = useState(false);
  const handleMouseOver = () => {
    setOnHovering(true);
  };
  const handleMouseOut = () => {
    setOnHovering(false);
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
  const handleAddToWatchList=()=>{
   console.log("add to watch lsit")
  }
  const handlePlayMovie=()=>{
    console.log("play movie")
  }

  return (
    <div
      className={`card-container ${onHovering?"card-container-hovering-style":""}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div
        style={handleBackgorndImage(cardData.posterImage)}
        className={`w-100 h-100 ${onHovering ? "base-styles" : ""}`}
      >
        </div>
      {onHovering && (
        <div
          className={`d-flex align-items-end  w-100 h-100 hover-card-style  ${
            onHovering ? "overlay-styles" : ""
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
      )}

      {/* <div className="hover-card-style">
        {/* <video width="320" height="240">
          <source src="https://www.youtube.com/watch?v=fb5ELWi-ekk&t=12s"/>
         
          Your browser does not support the video tag.
        </video> */}
      {/* </div>  */}
    </div>
  );
};

export default Card;
