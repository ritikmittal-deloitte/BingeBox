import React, { useEffect, useState } from "react";
import "./Background.scss";
// import pic1 from "../../assets/images/pic1.svg"
// import pic2 from "../../assets/images/pic2.svg"
// import pic3 from "../../assets/images/pic3.svg"
// import pic4 from "../../assets/images/pic4.svg"
// import pic5 from "../../assets/images/pic5.svg"
const cla = ["div1", "div2", "div3", "div4"];
const Background = () => {
  // const [divClass,setDivClass]=useState(cla)

  // useEffect(()=>{
  //     setInterval(()=>{
  //         setDivClass((prev)=>{
  //             const newArray=[]
  //             newArray[0]=prev[3]
  //             newArray[1]=prev[0]
  //             newArray[2]=prev[1]
  //             newArray[3]=prev[2]
  //             return newArray
  //         })

  //     },5000)
  // })
  // console.log("div class",divClass)
  return (
    <div className="main-back-container">
      <div className="row1 d-flex flex-column">
        <div className="div1"></div>
        <div className="div2"></div>
        <div className="div3"></div>
        <div className="div4"></div>
        <div className="div1"></div>
      </div>
      <div className="row2 d-flex flex-column">
        <div className="div1"></div>
        <div className="div2"></div>
        <div className="div3"></div>
        <div className="div4"></div>
        <div className="div1"></div>
      </div>
      <div className="row1 d-flex flex-column">
        <div className="div1"></div>
        <div className="div2"></div>
        <div className="div3"></div>
        <div className="div4"></div>
        <div className="div1"></div>
      </div>
      <div className="row2 d-flex flex-column">
        <div className="div1"></div>
        <div className="div2"></div>
        <div className="div3"></div>
        <div className="div4"></div>
        <div className="div1"></div>
        <div className="div2"></div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Background;
