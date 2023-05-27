import React, { useState } from "react";
import "./Card.scss";
import Card from 'react-bootstrap/Card';
import img1 from "./../../assets/images/image 57.png";
import ReactPlayer from 'react-player';
import vid from "./../../assets/Demo Plank.mp4";
export default function ItemCard() {

  const [onHovering, setOnHovering] = useState(false);
  const handleMouseOver = () => {setOnHovering(true)};
  const handleMouseOut = () => { setOnHovering(false)};

  return (
    <div className=' item-card-design'
     onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut} >
 {!onHovering && (<img src={img1}   style={{width:"100%",height:"8rem"}} / >)}
   {onHovering && (
    <video   playsInline
          loop
          muted
          controls
          alt="All the devices"   src={vid} />

   )} 
    </div>
  )
}
