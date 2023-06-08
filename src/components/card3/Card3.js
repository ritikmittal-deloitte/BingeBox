import React, { useContext, useState } from "react";
import { ReactComponent as PlayLogo } from "../../assets/images/play-button.svg";
import {ReactComponent as Triangle} from '../../assets/icons/triangle.svg'
import { ReactComponent as AddToLogo } from "../../assets/icons/addTodesc.svg";
import "./card3.scss";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/Context/UserContext/UserState";


const Card = ({ cardData }) => {
  const [onHovering, setOnHovering] = useState(false);
  const { watchList, setWatchList } = useContext(UserContext);


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

        height: '27rem',
        width: '45rem',
        transition: 'height 0s, width 0.3s',
      };
    }
    return {
      height: '27rem',
      width: '20rem',
      transition: 'height 0s, width 0.3s',
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
  const handleAddToWatchList = (event) => {
    console.log("Card Data :", cardData.id)
    console.log("Current Watch List:", watchList)
    setWatchList([...watchList, cardData.id]);
    //    setWatchList(previousState => new Set([...previousState,cardData.movieId]));
    console.log("add to watch list:", event)
    event.stopPropagation();
    navigate("/wishlist");

  }
  // const handlePlayMovie=()=>{
  //   console.log("play movie")
  //   window.location.replace('https://www.youtube.com/watch?v=fb5ELWi-ekk');
  // }

  const handleOnClick = () => {
    //    navigate("/wishlist");
    navigate(`/description/${cardData.id}`)
  }

  return (
    <div
      className={`card-container-3 ${onHovering ? "card-container-hovering-style-3" : ""}`}
      style={getDynamicStyles()}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleOnClick}
    >
      {
        !onHovering && <div
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
          <iframe width="560" height="315" src={`${cardData.videoUrl}` + "?autoplay=1&controls=0"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className={`w-100 h-100 ${onHovering ? "base-styles-3" : ""}`}></iframe>
          <div
            className={`d-flex   w-100 h-100 hover-card-style-3  ${onHovering ? "overlay-styles-3" : ""
              }`}
          >
            <div className="card-end-container-3">
              <div style={{ height: '60%', width: '35%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>

                <div className="card-details-container-3 ">
                  <span className="card-movie-name-3">&nbsp;&nbsp;{cardData.title.slice(0, 18)}</span>
                  {/* <div className="d-flex  justify-content-between card-release-style">
                <div className="cbfc-style">CBFC : U/A</div>

                <h4 className="px-3">{cardData.releaseYear}</h4>
                <h4>{cardData.movieDuraction}</h4>
              </div> */}
                  <div className="card-last-container-3">
                    <div className="obj-details" style={{ width: '100%' }}>
                      <div style={{ display: 'flex', width: '100%', gap: '4%', paddingLeft: '5%', marginTop: '8%' }}>
                        <div className="rate-1-card-3">&nbsp;CBFC:U/A&nbsp;</div>
                        <div className="ab-3"> {cardData.releaseYear} &nbsp;|&nbsp; {cardData.duration}</div>
                      </div>
                      <div style={{ display: 'flex', width: '100%', overflow: 'hidden', gap: '4%', paddingLeft: '5%', marginTop: '5%' }}>
                        {cardData.genre.map((item) => {
                          return <div className="last-1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>&nbsp;{item}&nbsp;</div>
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-logo-container-3 ">
                  <a href={cardData.videoUrl} target="_blank" style={{textDecoration:'none'}}>
                    {/* <PlayLogo width={40} height={41} /> */}
                    <div className="play-button d-flex" style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                      <Triangle style={{height:'90%',width:'25%'}}/> <span style={{fontSize:'18px'}}>Play</span>
                    </div>
                  </a >
                  <div onClick={(event) => { handleAddToWatchList(event) }}><AddToLogo width={40} height={41} /></div >

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
