import React, { useEffect, useState } from "react";
import "./description.scss";
import fish from "../../assets/images/fish.gif";
import { useParams } from "react-router-dom";
import { movies } from "../../mockData/moviesMockData";
import { photos } from "../../mockData/profilePhotoMockData";
import { ReactComponent as Triangle } from "../../assets/icons/triangle.svg";
import  { ReactComponent as ScrollLogo } from "./../../assets/icons/arrow.svg";
import { ReactComponent as AddToLogo } from "../../assets/icons/addTodesc.svg";
import PhotoComponent from "../photocomponent/PhotoComponent";
import DescCardComponent from "../descCardComponent/DescCardComponent";
import Cards2 from "../Cards2/Cards2";

const Description = () => {
  const [simMovies, setSimMovies] = useState([]);
  let { movieId } = useParams();
  const leftScroll = (querySelect) => {
    const left = document.querySelector(querySelect);
    left.scrollBy(-1600, 0);
  };
  const rightScroll = (querySelect) => {
    const right = document.querySelector(querySelect);
    right.scrollBy(1660, 0);
  };
  const handleAddToWatchList = () => {
    console.log("add to watch lsit");
  };
  const fetchSimilarMovies = async () => {
    //const response=await axios.get("")
    //settrendingMovies(response.data)
    setSimMovies(movies);
  };
  useEffect(() => {
    fetchSimilarMovies();
  }, []);
  return (
    
      <div className="desc-container w-100 d-flex flex-column  align-items-center">
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
        <span className="footer-2" >
        More like this</span>
        <div className="similar-cards">
        <div
            onClick={() => leftScroll(".cards-grid")}
            className="arrow-style2"
          >
            <ScrollLogo />
          </div>
          <section className="cards-grid">
        {simMovies.slice(0,20).map((movie, index) => (
              <Cards2 cardData={movie} key={index} />
            ))}</section>
            <div
            className="arrow-style3"
            onClick={() => rightScroll(".cards-grid")}
          >
            <ScrollLogo />
          </div>
        </div>
        
        </div>
        <div className="footer-desc" > 

        </div>
      </div>
    
  );
};

export default Description;
