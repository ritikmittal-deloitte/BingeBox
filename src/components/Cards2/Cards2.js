import React, { useContext, useState } from "react";
import "./Cards2.scss";
import { ReactComponent as Image1 } from "./../../assets/images/01image.svg";
import { ReactComponent as CheckedIcon } from "../../assets/icons/checked.svg";
import { ReactComponent as Image2 } from "./../../assets/images/+.svg";
import {ReactComponent as Plus} from "./../../assets/icons/Frame 1000002499.svg"
import { UserContext } from "../../context/Context/UserContext/UserState";
export default function Cards2({ cardData }) {
  const {watchList,setWatchList}=useContext(UserContext);
  const watch = new Set(watchList);

  const handleAddToWatchList=(event)=>{
    setWatchList(previousState => new Set([...previousState,cardData.id]));
   event.stopPropagation();
//   navigate("/wishlist");
  }


  return (
    <div className="Cards-container">
      {/* <Image1 className="card-banner-image" /> */}
      <img src={cardData?.posterImage} className="card-banner-image" />
      <div className="card-des">
        <div className="des-top-bar">
          <div className="size-1">
            {" "}
            <b style={{marginLeft:"5%"}}> {cardData.title} </b>
          </div>
          {watch.has(cardData.id) ? (<div>
            <CheckedIcon width={35}  />
            </div>) : (<div className="plus-icon"  onClick={(event)=>{handleAddToWatchList(event)}}>
            <Plus/>
            </div>)}
            &nbsp;
        </div>

          <div className="d-flex">
          <div className="rate-1">&nbsp;CBFC : U/A&nbsp;</div>
          <div className="ab-2"> {cardData.releaseYear}| {cardData.duration}</div>         
          </div>
          <div className="last-bar">
          {cardData.genre.map((item)=>
          {
            <div className="last-1">
            &nbsp;{item}&nbsp;
            </div>

          })}
          </div>
       
      </div>
    </div>
  );
}
