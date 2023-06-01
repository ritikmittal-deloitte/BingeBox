import React, { useEffect, useState } from "react";
import "./home.scss";
import Card from "../card/Card";
import { movies } from "../../mockData/moviesMockData";
import { ReactComponent as ScrollLogo } from "../../assets/icons/arrow.svg";
import { ReactComponent as PlayLogo } from "../../assets/images/play-button.svg";
import { ReactComponent as AddToLogo } from "../../assets/icons/addTodesc.svg";
import { ReactComponent as Triangle } from "../../assets/icons/triangle.svg";
import img1 from "../../assets/images/Variant8.png";
//import "../card/card.scss";
import axios from "axios";

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [recentMovies, setrecentMovies] = useState([]);
  const [trendingMovies, settrendingMovies] = useState([]);
  const [yourWatches, setyourWatches] = useState([]);
  const [onHovering, setOnHovering] = useState(false);
  const [current, setCurrent] = useState(1);
  const handleMouseOver = () => {
    setOnHovering(true);
  };
  const handleMouseOut = () => {
    setOnHovering(false);
  };
  const handleAddToWatchList = () => {
    console.log("add to watch lsit");
  };

  const fetchTrendingMovies = async () => {
    //const response=await axios.get("")
    //settrendingMovies(response.data)
    settrendingMovies(movies);
  };
  const fetchTopMovies = async () => {
    //const response=await axios.get("")
    //settrendingMovies(response.data)
    setTopMovies(movies);
  };
  const fetchRecentMovies = async () => {
    //const response=await axios.get("")
    //settrendingMovies(response.data)
    setrecentMovies(movies);
  };
  const fetchYourWatches = async () => {
    //const response=await axios.get("")
    //settrendingMovies(response.data)
    setyourWatches(movies);
  };

  useEffect(() => {
    fetchRecentMovies();
    fetchTopMovies();
    fetchTrendingMovies();
    fetchYourWatches();
  }, []);

  const check = () => {
    //  console.log("Current page:",current)
    if (current === 5) {
      console.log("Now current:", current);
      setCurrent(1);
    } else {
      console.log("Current page:", current);
      setCurrent(current + 1);
    }
    return ;
  };
  useEffect(() => {
 if(!onHovering)
 {
  setTimeout(() => {
      check(); 
    
      }, 5000);
 } 
   
  },[onHovering])
 
 
  setTimeout(() => {
if(!onHovering)
{
  check(); 
}
  }, 5000);


  const leftScroll = (querySelect) => {
    const left = document.querySelector(querySelect);
    left.scrollBy(-200, 0);
  };
  const rightScroll = (querySelect) => {
    const right = document.querySelector(querySelect);
    right.scrollBy(200, 0);
  };
  const handleBackgorndImage = (image) => {
    return {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      borderRadius: "0.938rem",
    };
  };
  return (
    <div className="home-container">
      <div
        className="main-banner"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {!onHovering && (
          <>
            <div
              style={handleBackgorndImage(movies[current].posterImage)}
              className={`main-banner-container`}
            ></div>
            <div className="banner-video-text-box-1">
              <div className="video-heading">
                <h2>{movies[current].title}</h2>
              </div>
            </div>
          </>
        )}

        {onHovering && (
          <>
            <iframe
              src={`${movies[current].videoUrl}` + "?autoplay=1&controls=0"}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className={`banner-video ${onHovering ? "base-styles-1" : ""}`}
            ></iframe>
            <div className="banner-video-text-box">
              <div className="video-heading">
                <h2>{movies[current].title}</h2>
              </div>
              <div className="video-description">
                {movies[current].description}
              </div>
              <div className="video-category">
                <div className="last-2">
                  &nbsp;&nbsp;&nbsp;sci-fi&nbsp;&nbsp;&nbsp;
                </div>
                <div className="last-2">
                  &nbsp;&nbsp;&nbsp;Adventure&nbsp;&nbsp;&nbsp;
                </div>
              </div>
              <div className="banner-play-box">
                <div className="play-button d-flex">
                  <Triangle /> <h5>Play</h5>{" "}
                </div>
                {/* <a  href={movies[0].videoUrl} target="_blank"><PlayLogo /></a > */}
                <div onClick={handleAddToWatchList}>
                  <AddToLogo width={50} height={51} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="carousel-box">
        <div className="carousel-main-box">
          <div
            className={current === 1 ? "selected-one" : "non-selected-1"}
          ></div>
          <div
            className={current === 2 ? "selected-one" : "non-selected-1"}
          ></div>
          <div
            className={current === 3 ? "selected-one" : "non-selected-1"}
          ></div>
          <div
            className={current === 4 ? "selected-one" : "non-selected-1"}
          ></div>
          <div
            className={current === 5 ? "selected-one" : "non-selected-1"}
          ></div>
        </div>
      </div>

      <div className="top-movie-container">
        <p className="d-flex">Top Movies for you</p>
        <div className="top-movies-grid">
          <div onClick={() => leftScroll(".cards")} className="arrow-style">
            <ScrollLogo />
          </div>

          <section className="cards">
            {topMovies.map((movie, index) => (
              <Card cardData={movie} key={index} />
            ))}
          </section>

          <div className="arrow-style1" onClick={() => rightScroll(".cards")}>
            <ScrollLogo />
          </div>
        </div>
      </div>

      <div className="top-movie-container">
        <p className="d-flex">Recent releases</p>
        <div className="top-movies-grid">
          <div
            onClick={() => leftScroll(".recent-release-cards")}
            className="arrow-style"
          >
            <ScrollLogo />
          </div>

          <section className="recent-release-cards">
            {recentMovies.map((movie, index) => (
              <Card cardData={movie} key={index} />
            ))}
          </section>

          <div
            className="arrow-style1"
            onClick={() => rightScroll(".recent-release-cards")}
          >
            <ScrollLogo />
          </div>
        </div>
      </div>
      <div className="top-movie-container">
        <p className="d-flex">Your Watches</p>
        <div className="top-movies-grid">
          <div
            onClick={() => leftScroll(".your-watches-cards")}
            className="arrow-style"
          >
            <ScrollLogo />
          </div>

          <section className="your-watches-cards">
            {yourWatches.map((movie, index) => (
              <Card cardData={movie} key={index} />
            ))}
          </section>

          <div
            className="arrow-style1"
            onClick={() => rightScroll(".your-watches-cards")}
          >
            <ScrollLogo />
          </div>
        </div>
      </div>
      <div className="top-movie-container">
        <p className="d-flex">Trending Movies</p>
        <div className="top-movies-grid">
          <div
            onClick={() => leftScroll(".trending-movie-cards")}
            className="arrow-style"
          >
            <ScrollLogo />
          </div>

          <section className="trending-movie-cards">
            {trendingMovies.map((movie, index) => (
              <Card cardData={movie} key={index} />
            ))}
          </section>

          <div
            className="arrow-style1"
            onClick={() => rightScroll(".trending-movie-cards")}
          >
            <ScrollLogo />
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Home;
