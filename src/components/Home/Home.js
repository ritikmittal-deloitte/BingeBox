import React, { useContext, useEffect, useState } from "react";
import "./home.scss";
import Card from "../card/Card";
import Card3 from "../card3/Card3";
import { useLocation } from "react-router-dom";
import { mockData as moviesArr } from "../../mockData/moviesMockData";
import { ReactComponent as ScrollLogo } from "../../assets/icons/arrow.svg";
import { ReactComponent as PlayLogo } from "../../assets/images/play-button.svg";
import { ReactComponent as AddToLogo } from "../../assets/icons/addTodesc.svg";
import { ReactComponent as Triangle } from "../../assets/icons/triangle.svg";
import img1 from "../../assets/images/Variant8.png";
import { ReactComponent as CheckedIcon } from "../../assets/icons/checked.svg";
import axios from "axios";
import { ReactComponent as DeleteLogo } from "../../assets/icons/delete icon.svg";
import { UserContext } from "../../context/Context/UserContext/UserState";
import { useSelector, useDispatch } from "react-redux";
import { ContinueWatchingAction } from "../../redux/ContinueWatchingSlice";

const Home = () => {

  const { watchList, setWatchList, categories, setCategories } = useContext(UserContext);
  const [movies, setMovies] = useState(moviesArr)
  const contineWatchingList=useSelector((state)=>state.continueWatching.contineWatchingList)
//  console.log("listttt",contineWatchingList)

  const watch = new Set(watchList);
  const data = movies.filter((item) => {
    if (!watch.has(item.id)) {
      return item;
    }
  });
  const location = useLocation();
  let url = location.pathname;
  console.log("PATH Name:", url);
  //  console.log("Data filtered out :",data)
  const [topMovies, setTopMovies] = useState([]);
  const [recentMovies, setrecentMovies] = useState([]);
  const [trendingMovies, settrendingMovies] = useState([]);
  const [yourWatches, setyourWatches] = useState([]);

  const [topRated, setTopRated] = useState([])
  const [onHovering, setOnHovering] = useState(false);
  const [carItems, setCarItems] = useState([]);
  const [current, setCurrent] = useState(1);
  const dispatch = useDispatch();
  const handleMouseOver = () => {
    setOnHovering(true);
  };
  const handleMouseOut = () => {
    setOnHovering(false);
  };
  const handleAddToWatchList = (event) => {
    setWatchList(previousState => new Set([...previousState,carItems[current - 1].id]));
    event.stopPropagation();
//    console.log("add to watch lsit");
  };

  const fetchTrendingMovies = async () => {
    //const response=await axios.get("")
    //settrendingMovies(response.data)
    console.log('trending', movies)
    settrendingMovies(movies);
  };
  const fetchTopMovies = async () => {
    //const response=await axios.get("")
    //settrendingMovies(response.data)
   // const data=shuffleArray(movies,3);
  //  console.log('topMovies', data)
    setTopMovies(movies);
  };
  const fetchRecentMovies = async () => {
    //const response=await axios.get("")
    //settrendingMovies(response.data)
    // console.log('release Year',sortByPropertyDescending(movies,'releaseYear'))
    // setrecentMovies(sortByPropertyDescending(movies,'releaseYear'));
    setrecentMovies(movies)
  };
  const fetchYourWatches = async () => {
    //const response=await axios.get("")
    //settrendingMovies(response.data)
    console.log('your watches', movies)
    setyourWatches(movies);
  };
  const fetchTopRated = async () => {
    //const response=await axios.get("")
    //setTopRated(response.data)
    // console.log('topRating',sortByPropertyDescending(movies,'rating'))
    // setTopRated(sortByPropertyDescending(movies,'rating'))
    setTopRated(movies)
  }
  const fetchCarouselItems = async () => {
//    console.log("TYUDTIDUY")
    const items = movies.filter((item) => {
      return url.slice(1) === 'home' || url.slice(1) === item.type;
    })
    setCarItems(items)
    console.log("Carousel items:", items.slice(0, 5))

  }
  const handleDeleteFromWatchList = (event) =>{
    watch.delete(carItems[current - 1].id);
    console.log("Watch list updated:",watch)
    setWatchList(new Set(watch))
    event.stopPropagation();
  }
  useEffect(() => {
    setCurrent(1);
    fetchRecentMovies();
    fetchTopMovies();
    fetchTrendingMovies();
    fetchYourWatches();
    fetchCarouselItems();
    fetchTopRated()

  }, [url]);

  useEffect(() => {
    fetchRecentMovies();
    fetchTopMovies();
    fetchTrendingMovies();
    fetchYourWatches();
    fetchCarouselItems();
    fetchTopRated()
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
    return;
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (!onHovering) {
        check();
      }
    }, 5000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  //   setTimeout(() => {
  // if(!onHovering)
  // {
  //   check();
  // }
  //   }, 5000);

  const leftScroll = (querySelect) => {
    const left = document.querySelector(querySelect);
    left.scrollBy(-1600, 0);
  };
  const rightScroll = (querySelect) => {
    const right = document.querySelector(querySelect);
    right.scrollBy(1660, 0);
  };
  const handleBackgorndImage = (image) => {
    return {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      borderRadius: "0.938rem",
    };
  };
  const handlePlayingMovie = (event) => {
    event.stopPropagation();
    dispatch(
      ContinueWatchingAction.addToContinueWatching(carItems[current - 1])
    );
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
              style={handleBackgorndImage(carItems[current - 1]?.posterImage)}
              className={`main-banner-container`}
            ></div>
            <div className="banner-video-text-box-1">
              <div className="video-heading">
                <h2>{carItems[current - 1]?.title}</h2>
              </div>
            </div>
          </>
        )}

        {onHovering && (
          <>
            <iframe
              src={`${carItems[current - 1].videoUrl}` + "?autoplay=1&controls=0"}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className={`banner-video ${onHovering ? "base-styles-1" : ""}`}
            ></iframe>
            <div className="banner-video-text-box">
              <div className="video-heading">
                <h2>{carItems[current - 1].title}</h2>
              </div>
              <div className="video-description">
                {carItems[current - 1].description}
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
                <div
                  className="play-button d-flex"
                  onClick={(event) => handlePlayingMovie(event)}
                >
                  <Triangle /> <h5>Play</h5>{" "}
                </div>
                {/* <a  href={movies[0].videoUrl} target="_blank"><PlayLogo /></a > */}
               
               {watch.has(carItems[current - 1].id) ? (<div ><CheckedIcon width={40} height={41}  /></div >) : (<div onClick={handleAddToWatchList}>
                  <AddToLogo width={50} height={51} />
                </div>)}
                
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
        <p className="d-flex">
          {url === "/home" && <>Top Recommendations for you</>}
          {url === "/anime" && <>Top Animes for you</>}
          {url === "/movies" && <>Top Movies for you</>}
          {url === "/tv-shows" && <>Top Tv Shows for you</>}
          {url === "/series" && <>Top Series for you</>}
        </p>
        <div className="top-movies-grid">
          <div onClick={() => leftScroll(".cards")} className="arrow-style">
            <ScrollLogo />
          </div>

          {/* <section className="cards">
            {data.map((movie, index) => {
              if ((url.slice(1) === 'home' || url.slice(1) === movie.type) && categoryFilter(movie, categories)) {
                return <Card cardData={movie} key={index} direct="Home" />
              }
              return null;
            })}
          </section> */}
          <section className="cards">
            {movies.map((movie, index) => {
              if ((url.slice(1) === 'home' || url.slice(1) === movies[(index+5)%movies.length].type) && categoryFilter(movies[(index+5)%movies.length], categories)) {
                return <Card cardData={movies[(index+5)%movies.length]} key={index} direct="Home" />
              }
              return null;
            })}
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
            {sortByPropertyDescending(movies,'releaseYear').map((movie, index) => {
              if ((url.slice(1) === 'home' || url.slice(1) === movie.type) && categoryFilter(movie, categories)) {
                return <Card cardData={movie} key={index} direct="Home" />
              }
              return null;
            })}
            </section>
          </div>

          <div
            className="arrow-style1"
            onClick={() => rightScroll(".recent-release-cards")}
          >
            <ScrollLogo />
          </div>
        </div>
      
      <div className="top-movie-container">
        <p className="d-flex">Your Watches</p>
        <div className="top-movies-grid">
          <div
            onClick={() => leftScroll(".your-watches-cards")}
            className="arrow-style-4"
          >
            <ScrollLogo />
          </div>

          <section className="your-watches-cards">
            {contineWatchingList?.map((movie, index) => {
              
                return <Card3 cardData={movie} key={index} direct="Home" />
              
              return null;
            })}
          </section>

          <div
            className="arrow-style-5"
            onClick={() => rightScroll(".your-watches-cards")}
          >
            <ScrollLogo />
          </div>
        </div>
      </div>
      <div className="top-movie-container">
        <p className="d-flex">
          {url === "/home" && <>Trending Now</>}
          {url === "/anime" && <>Trending Animes</>}
          {url === "/movies" && <>Trending Movies</>}
          {url === "/tv-shows" && <>Trending Tv Shows</>}
          {url === "/series" && <>Trending Series</>}
        </p>
        <div className="top-movies-grid">
          <div
            onClick={() => leftScroll(".trending-movie-cards")}
            className="arrow-style"
          >
            <ScrollLogo />
          </div>

          <section className="trending-movie-cards">
            {movies.map((movie, index) => {
              if ((url.slice(1) === 'home' || url.slice(1) === movies[(index)%movies.length].type) && categoryFilter(movies[(index)%movies.length], categories)) {
                return <Card cardData={movies[index]} key={index} direct="Home" />
              }
              return null;
            })}
          </section>

          <div
            className="arrow-style1"
            onClick={() => rightScroll(".trending-movie-cards")}
          >
            <ScrollLogo />
          </div>
        </div>
      </div>
      <div className="top-movie-container">
        <p className="d-flex">
          {url === "/home" && <>Top Rated</>}
          {url === "/anime" && <>Top Rated Animes</>}
          {url === "/movies" && <>Top Rated Movies</>}
          {url === "/tv-shows" && <>Top Rated Tv Shows</>}
          {url === "/series" && <>Top Rated Series</>}

        </p>
        <div className="top-movies-grid">
          <div
            onClick={() => leftScroll(".top-rated-cards")}
            className="arrow-style-4"
          >
            <ScrollLogo />
          </div>

          <section className="top-rated-cards">
            {sortByPropertyDescending(movies,'rating').map((movie, index) => {
              if ((url.slice(1) === 'home' || url.slice(1) === movie.type) && categoryFilter(movie, categories)) {
                return <Card3 cardData={movie} key={index} direct="Home" />
              }
              return null;
            })}
          </section>

          <div
            className="arrow-style-5"
            onClick={() => rightScroll(".top-rated-cards")}
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


function sortByPropertyDescending(newarray, property) {
  let array = newarray;
  return array.sort((a, b) => {
    if (a[property] < b[property]) {
      return 1;
    } else if (a[property] > b[property]) {
      return -1;
    } else {
      return 0;
    }
  });
}

const shuffleArray = (newarray,p) => {
  let array = newarray;
  for (let i = array.length - 1; i > 0; i--) {
    const j = (Math.floor(p * (i + 1)))%newarray.length;
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function categoryFilter(item, category) {
  if (category === 'all' || category === 'categories' || category === 'Categories' || category === 'All') {
    return true
  }
  category = category.toLowerCase()
  let g = item.genre;
  for (let i = 0; i < g.length; i++) {
    let c = g[i].toLowerCase();
    if (category.includes(c) || c.includes(category)) {
      console.log(category, c, true)
      return true
    }
  }
  console.log(category, item.genre, false)

  return false
}