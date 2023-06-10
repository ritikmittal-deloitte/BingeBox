import React, { useEffect, useState } from "react";
import "./description.scss";
import { useParams } from "react-router-dom";
import { mockData as movies } from "../../mockData/moviesMockData";
import { photos } from "../../mockData/profilePhotoMockData";
import { ReactComponent as Triangle } from "../../assets/icons/triangle.svg";
import { ReactComponent as ScrollLogo } from "./../../assets/icons/arrow.svg";
import { ReactComponent as AddToLogo } from "../../assets/icons/addTodesc.svg";
import PhotoComponent from "../photocomponent/PhotoComponent";
import Cards2 from "../Cards2/Cards2";
import { useDispatch } from "react-redux";
import { ContinueWatchingAction } from "../../redux/ContinueWatchingSlice";

const Description = () => {
  const [simMovies, setSimMovies] = useState([]);
  let { movieId } = useParams();
  const dispatch = useDispatch();

  const leftScroll = (querySelect) => {
    const left = document.querySelector(querySelect);
    left.scrollBy(-1600, 0);
  };
  const rightScroll = (querySelect) => {
    const right = document.querySelector(querySelect);
    right.scrollBy(1660, 0);
  };
  const handleAddToWatchList = () => {};
  const fetchSimilarMovies = async () => {
    const data = movies.filter((item) => {
      return (
        item.type === movies[movieId - 1].type &&
        item.id !== movies[movieId - 1].id
      );
    });
    setSimMovies(data);
  };
  useEffect(() => {
    fetchSimilarMovies();
  }, []);
  const handlePlayingMovie = (event) => {
    event.stopPropagation();
    dispatch(ContinueWatchingAction.addToContinueWatching(movies[movieId - 1]));
  };
  return (
    <div className="desc-container w-100 d-flex flex-column  align-items-center">
      <div className="desc-details-container d-flex flex-column p-5">
        <div className="d-flex justify-content-between">
          <div className="desc-card-details-container d-flex flex-column align-items-start">
            <h2>{movies[movieId - 1].title}</h2>
            <div className=" card-release-style">
              <div className="cbfc-style">CBFC : U/A</div>

              <h4 className="px-3">{movies[movieId - 1].releaseYear}</h4>
              <h4>{movies[movieId - 1].duration}</h4>
            </div>
          </div>
          <div className="d-flex desc-card-logo-container align-items-center">
            <a
              href={movies[movieId - 1].videoUrl}
              target="_blank"
              style={{}}
              className="play-button "
              onClick={(event) => handlePlayingMovie(event)}
            >
              <Triangle />
              <div style={{ marginTop: "-2px" }}>
                {" "}
                <h5>Play</h5>
              </div>
            </a>
            <div onClick={handleAddToWatchList}>
              <AddToLogo width={50} height={51} />
            </div>
          </div>
        </div>
        <div className="desc-end-container">
          <span style={{ display: "flex", textAlign: "start" }}>
            {movies[movieId - 1].description}
          </span>
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

      <div className="desc-footer">
        <span className="footer-2">More like this</span>
        <div className="similar-cards">
          <div
            onClick={() => leftScroll(".cards-grid")}
            className="arrow-style2"
          >
            <ScrollLogo />
          </div>
          <section className="cards-grid">
            {simMovies.slice(0, 15).map((movie, index) => (
              <Cards2 cardData={movie} key={index} />
            ))}
          </section>
          <div
            className="arrow-style3"
            onClick={() => rightScroll(".cards-grid")}
          >
            <ScrollLogo />
          </div>
        </div>
      </div>
      <div className="footer-desc"></div>
    </div>
  );
};

export default Description;
