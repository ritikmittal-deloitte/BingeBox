import React, { useContext, useState } from "react";
import { ReactComponent as PlayLogo } from "../../assets/images/play-button.svg";
import { ReactComponent as DeleteLogo } from "../../assets/icons/delete icon.svg";
import { ReactComponent as AddToLogo } from "../../assets/icons/addTodesc.svg";

import { ReactComponent as CheckedIcon } from "../../assets/icons/checked.svg";
import "./card.scss";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/Context/UserContext/UserState";
import { useDispatch } from "react-redux";
import { ContinueWatchingAction } from "../../redux/ContinueWatchingSlice";

const Card = ({ cardData, direct }) => {
  const [onHovering, setOnHovering] = useState(false);
  const { watchList, setWatchList } = useContext(UserContext);
  const watch = new Set(watchList);

  const show = watch.has(cardData.id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  const handleAddToWatchList = (event) => {
    setWatchList((previousState) => new Set([...previousState, cardData.id]));
    event.stopPropagation();
    navigate("/wishlist");
  };
  const handleDeleteFromWatchList = (event) => {
    watch.delete(cardData.id);
    console.log("Watch list updated:", watch);
    setWatchList(new Set(watch));
    event.stopPropagation();
  };

  const handleOnClick = () => {
    navigate(`/description/${cardData.id}`);
  };
  const handlePlayingMovie = (event) => {
    event.stopPropagation();
    dispatch(ContinueWatchingAction.addToContinueWatching(cardData));
  };
  return (
    <div
      className={`card-container ${
        onHovering ? "card-container-hovering-style" : ""
      }`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleOnClick}
    >
      {!onHovering && (
        <div
          style={handleBackgorndImage(cardData.posterImage)}
          className={`w-100 h-100 ${onHovering ? "base-styles" : ""}`}
        ></div>
      )}

      {onHovering && (
        <>
          <iframe
            width="560"
            height="315"
            src={`${cardData.videoUrl}` + "?autoplay=1&controls=0"}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className={`w-100 h-100 ${onHovering ? "base-styles" : ""}`}
          ></iframe>
          <div
            className={`d-flex   w-100 h-100 hover-card-style  ${
              onHovering ? "overlay-styles" : ""
            }`}
          >
            <div className="card-end-container">
              <div className="card-logo-container ">
                <a
                  href={cardData.videoUrl}
                  target="_blank"
                  onClick={(event) => handlePlayingMovie(event)}
                >
                  <PlayLogo width={40} height={41} />
                </a>

                {!show && (
                  <div
                    onClick={(event) => {
                      handleAddToWatchList(event);
                    }}
                  >
                    <AddToLogo width={40} height={41} />
                  </div>
                )}
                {direct === "WatchList" && show && (
                  <div
                    onClick={(event) => {
                      handleDeleteFromWatchList(event);
                    }}
                  >
                    <DeleteLogo width={40} height={41} />
                  </div>
                )}
                {direct === "Home" && show && (
                  <div>
                    <CheckedIcon width={40} height={41} />
                  </div>
                )}
              </div>
              <div className="card-details-container ">
                <div className="card-movie-name">
                  &nbsp;&nbsp;{cardData.title}
                </div>

                <div className="card-last-container">
                  <div className="rate-3">&nbsp;CBFC:U/A&nbsp;</div>
                  <div className="ab-33">
                    {" "}
                    {cardData.releaseYear} | {cardData.duration}
                  </div>
                  <div className="cat-box">
                    {cardData?.genre?.length > 2 ? (
                      <div className="last-3">
                        {cardData?.genre?.slice(0, 2).map((item) => {
                          return (
                            <div className="last-1">&nbsp;{item}&nbsp;</div>
                          );
                        })}
                        <span className="more-text">
                          <u>+{cardData.genre.length - 2}more </u>{" "}
                        </span>
                      </div>
                    ) : (
                      cardData?.genre?.map((item) => {
                        return <div className="last-1">&nbsp;{item}&nbsp;</div>;
                      })
                    )}
                  </div>
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
