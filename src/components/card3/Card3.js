import React, { useContext, useState } from "react";
import { ReactComponent as Triangle } from "../../assets/icons/triangle.svg";
import { ReactComponent as AddToLogo } from "../../assets/icons/addTodesc.svg";
import "./card3.scss";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/Context/UserContext/UserState";

const Card = ({ cardData }) => {
  const [onHovering, setOnHovering] = useState(false);
  const { watchList, setWatchList } = useContext(UserContext);

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
        height: "27rem",
        width: "45rem",
        transition: "height 0s, width 0.3s",
      };
    }
    return {
      height: "27rem",
      width: "20rem",
      transition: "height 0s, width 0.3s",
    };
  };

  const handleBackgorndImage = (image) => {
    return {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      borderRadius: "0.938rem",
    };
  };

  const handleAddToWatchList = (event) => {
    setWatchList([...watchList, cardData.id]);
    event.stopPropagation();
    navigate("/wishlist");
  };

  const handleOnClick = () => {
    navigate(`/description/${cardData.id}`);
  };

  return (
    <div
      className={`card-container-3 ${
        onHovering ? "card-container-hovering-style-3" : ""
      }`}
      style={getDynamicStyles()}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleOnClick}
    >
      {!onHovering && (
        <div
          style={handleBackgorndImage(cardData.posterImage)}
          className={`w-100 h-100 ${onHovering ? "base-styles-3" : ""}`}
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
            className={`w-100 h-100 ${onHovering ? "base-styles-3" : ""}`}
          ></iframe>
          <div
            className={`d-flex   w-100 h-100 hover-card-style-3  ${
              onHovering ? "overlay-styles-3" : ""
            }`}
          >
            <div className="card-end-container-3">
              <div
                style={{
                  height: "60%",
                  width: "35%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <div className="card-details-container-3 ">
                  <span className="card-movie-name-3">
                    &nbsp;&nbsp;{cardData.title.slice(0, 18)}
                  </span>

                  <div className="card-last-container-3">
                    <div className="obj-details" style={{ width: "100%" }}>
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          gap: "4%",
                          paddingLeft: "5%",
                          marginTop: "8%",
                        }}
                      >
                        <div className="rate-1-card-3">
                          &nbsp;CBFC:U/A&nbsp;
                        </div>
                        <div className="ab-3">
                          {" "}
                          {cardData.releaseYear} &nbsp;|&nbsp;{" "}
                          {cardData.duration}
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          overflow: "hidden",
                          gap: "4%",
                          paddingLeft: "5%",
                          marginTop: "5%",
                        }}
                      >
                        {cardData?.genre?.length > 2 ? (
                          <div style={{ display: "flex", gap: "10px" }}>
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
                            return (
                              <div className="last-1">&nbsp;{item}&nbsp;</div>
                            );
                          })
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-logo-container-3 ">
                  <a
                    href={cardData.videoUrl}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="play-button d-flex"
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Triangle style={{ height: "90%", width: "25%" }} />{" "}
                      <span style={{ fontSize: "18px" }}>Play</span>
                    </div>
                  </a>
                  <div
                    onClick={(event) => {
                      handleAddToWatchList(event);
                    }}
                  >
                    <AddToLogo width={40} height={41} />
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
