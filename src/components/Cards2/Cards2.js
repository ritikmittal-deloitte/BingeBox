import React from "react";
import "./Cards2.scss";
import { ReactComponent as Image1 } from "./../../assets/images/01image.svg";
import { ReactComponent as Image2 } from "./../../assets/images/+.svg";
import {ReactComponent as Plus} from "./../../assets/icons/Frame 1000002499.svg"
export default function Cards2({ cardData }) {
  return (
    <div className="Cards-container">
      <Image1 className="card-banner-image" />
      <div className="card-des">
        <div className="des-top-bar">
          <div className="size-1">
            {" "}
            <b style={{marginLeft:"5%"}}> jurassic world </b>
          </div>
          <div className="plus-icon">
            {/* <Image2 />           */}
            <Plus/>
            </div>
            &nbsp;
        </div>

          <div className="d-flex">
          <div className="rate-1">&nbsp;CBFC : U/A&nbsp;</div>
          <div className="ab-2"> 2018 | 2h 9m</div>         
          </div>
          <div className="last-bar">
          <div className="last-1">&nbsp;sci-fi&nbsp;</div>
          <div className="last-1">&nbsp;Adventure&nbsp;</div>
      
          </div>
       
      </div>
    </div>
  );
}
