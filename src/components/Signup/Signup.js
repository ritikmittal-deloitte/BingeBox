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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
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

  // const inEnabled = name.length >0 && email

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
            <input
              placeholder="Name"
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="inputs">
            <input
              placeholder="Email Id"
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="inputs">
            <input
              placeholder="Create Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="inputs">
            <input
              placeholder="Confirm Password"
              type="password"
              id="confirm-password"
              value={confirmpassword}
              onChange={(e) => {
                setConfirmpassword(e.target.value);
              }}
            />
          </div>

          <div className="privacy-policy">
            <label htmlFor="">
              <input type="checkbox" value={checkbox} />
            </label>
            By signing up you agree to our <a href="#">privacy policy</a>
          </div>

          <button type="submit" className="btn" disabled>
            Sign Up
          </button>
        </form>
      </div>
      <div className="right-container">
        <div className="change-text">
          {currentIndex===0 ?  
          <h1
            style={{
              color: "#F03A47",
              fontSize: "6rem",

              fontWeight: "900",
            }}
          >
            "Lights, Camera, <span style={{color:'white'}}> Sign Up </span>"
          </h1>:
          <h1 style={{
            color: "#F03A47",
            fontSize: "6rem",
            fontWeight: "900",
          }}>
            "<span style={{color:'white'}}>Join</span> the Movie Streaming Revolution"
          </h1>
        }
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
