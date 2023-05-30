import React, { useState } from "react";
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

  return (
    <div className="card-container">
      <div
        style={handleBackgorndImage(cardData.posterImage)}
        className="w-100 h-100"
      ></div>
      {/* <div className="hover-card-style">
        <video width="320" height="240">
          <source src="https://www.youtube.com/watch?v=fb5ELWi-ekk&t=12s"/>
         
          Your browser does not support the video tag.
        </video>
\      </div> */}
    </div>
  );
};

export default Card;
