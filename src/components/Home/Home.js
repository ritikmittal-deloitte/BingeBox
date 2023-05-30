import React, { useEffect, useState } from "react";
import "./home.scss";
import Card from "../card/Card";
import { movies } from "../../mockData/moviesMockData";
import { ReactComponent as ScrollLogo } from "../../assets/icons/arrow.svg";
import { ReactComponent as PlayLogo } from "../../assets/images/play-button.svg";
import { ReactComponent as AddToLogo } from "../../assets/icons/addTodesc.svg";
//import "../card/card.scss"

import axios from "axios";

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [recentMovies, setrecentMovies] = useState([]);
  const [trendingMovies, settrendingMovies] = useState([]);
  const [yourWatches, setyourWatches] = useState([]);
  const [onHovering, setOnHovering] = useState(false);
  const handleMouseOver = () => {
    //setOnHovering(true);
  };
  const handleMouseOut = () => {
    //setOnHovering(false);
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
        // onMouseOver={handleMouseOver}
        // onMouseOut={handleMouseOut}
      >
        <div
          style={handleBackgorndImage(movies[6].posterImage)}
          className={`w-100 main-banner-container`}
        ></div>
        
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
