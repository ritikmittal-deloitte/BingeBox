import React from "react";
import "./description.scss";
import fish from "../../assets/images/fish.gif";
import { useParams } from "react-router-dom";
import { movies } from "../../mockData/moviesMockData";
import { photos } from "../../mockData/profilePhotoMockData";
import { ReactComponent as Triangle } from "../../assets/icons/triangle.svg";

import { ReactComponent as AddToLogo } from "../../assets/icons/addTodesc.svg";
import PhotoComponent from "../photocomponent/PhotoComponent";
import DescCardComponent from "../descCardComponent/DescCardComponent";

const Description = () => {
  let { movieId } = useParams();
  console.log("mobie id", movieId);
  const handleAddToWatchList = () => {
    console.log("add to watch lsit");
  };
  return (
    <>
    <div className="desc-container w-100 d-flex flex-column justify-content-center align-items-center">
      <div className="desc-details-container d-flex flex-column p-5">
        <div className="d-flex justify-content-between">
          <div className="desc-card-details-container d-flex flex-column align-items-start">
            <h2>{movies[0].title}</h2>
            <div className="d-flex  justify-content-between card-release-style">
              <div className="cbfc-style">CBFC : U/A</div>

              <h4 className="px-3">{movies[0].releaseYear}</h4>
              <h4>{movies[0].movieDuraction}</h4>
            </div>
          </div>
          <div className="d-flex desc-card-logo-container align-items-center">
            <div className="play-button d-flex">
              <Triangle /> <h5>Play</h5>{" "}
            </div>
            {/* <a  href={movies[0].videoUrl} target="_blank"><PlayLogo /></a > */}
            <div onClick={handleAddToWatchList}>
              <AddToLogo width={50} height={51} />
            </div>
          </div>
        </div>
        <div className="desc-end-container">
          <span>{movies[0].description}</span>
        </div>
        <div className="cast-container d-flex flex-column justify-content-start align-items-start">
          <p>Cast</p>
          <div className="inner d-flex  w-100">
            {photos.map((photo) => (
              <PhotoComponent data={photo} />
            ))}
          </div>
        </div>
        
      </div>
      {/* <div className="more-like-con d-flex">
          {
            movies.map((card)=><DescCardComponent data={card}/>)
          }
        </div> */}
        <div className="desc-footer">
          
    </div>
    </div>
    
    </>
  );
};

export default Description;
