import React, { useState, useEffect } from "react";
import "./signup.scss";

const upperTexts = [
  '"Lights, Camera, Sign Up "',
  '"Join the Movie Streaming Revolution"',
];
const belowTexts = [
  'Begin Your Epic Movie Streaming Journey Now!"',
  "Sign Up and Dive into a World of Cinematic Delights!",
];

function Signup() {
  const [texts, setTexts] = useState([]);
  const [lowerText, setLowertext] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    setTexts(upperTexts);
    setLowertext(belowTexts);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 2 seconds
    return () => clearInterval(interval);
  }, [texts, lowerText]);
  return (
    <div className="signup-container">
      <div className="left-container">
        <div className="binge-box-heading">
          <div className="binge-heading"> BINGE</div>
          <div className="box-heading">BOX</div>
        </div>
        <form action="" className="signup-form">
          <h3 className="d-flex justify-content-start w-100 mb-0 signup-heading">
            Sign Up
          </h3>
          <div className="inputs">
            <input placeholder="Name" type="text" id="name" />
          </div>
          <div className="inputs">
            <input placeholder="Email Id" type="email" id="email" />
          </div>
          <div className="inputs">
            <input
              placeholder="Create Password"
              type="password"
              id="password"
            />
          </div>
          <div className="inputs">
            <input
              placeholder="Confirm Password"
              type="password"
              id="confirm-password"
            />
          </div>

          <div className="privacy-policy">
            <label htmlFor="">
              <input type="checkbox" />
            </label>
            By signing up you agree to our <a href="#">privacy policy</a>
          </div>

          <button type="submit" className="btn">
            Sign Up
          </button>
        </form>
      </div>
      <div className="right-container">
        <div className="change-text">
          <h1
            style={{
              color: "#F03A47",
              fontSize: "6rem",

              fontWeight: "900",
            }}
          >
            {texts.length > 0 ? texts[currentIndex] : "Loading..."}
          </h1>
          <p
            style={{
              fontWeight: "400",
              fontSize: "1.875rem",
              color: "#FFFFFF",
            }}
          >
            {lowerText.length > 0 ? lowerText[currentIndex] : "Loading..."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
