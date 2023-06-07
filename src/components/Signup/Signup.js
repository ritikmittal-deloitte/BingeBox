import React, { useState, useEffect } from "react";
import "./signup.scss";
import { ReactComponent as MainLogo } from "./../../assets/images/bingeboxlogo.svg";
import { useNavigate } from "react-router-dom";

const upperTexts = [
  '"Lights, Camera, Sign Up "',
  '"Join the Movie Streaming Revolution"',
];
const belowTexts = [
  'Begin Your Epic Movie Streaming Journey Now!"',
  "Sign Up and Dive into a World of Cinematic Delights!",
];

function Signup() {
  const navigate = useNavigate();
  const [texts, setTexts] = useState([]);
  const [lowerText, setLowertext] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (name.trim() === "") {
      errors.name = "Name is required";
    }

    if (email.trim() === "") {
      errors.email = "Email is required";
    } else {
      // Simple email format validation
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email)) {
        errors.email = "Invalid email format";
      }
    }

    if (mobile.trim() === "") {
      errors.mobile = "Mobile number is required.";
    }

    if (password.trim() === "") {
      errors.password = "Password is required";
    }

    if (confirmPassword.trim() === "") {
      errors.confirmPassword = "Confirm password is required";
    } else if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
    }
    console.log(checkbox);
    if (checkbox === false) {
      errors.checkbox = "Please click on checkbox to agree with Privacy Policy";
    }

    setErrors(errors);

    // Return true if there are no errors
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform signup logic
      console.log("Signup successful!");
      navigate("/subscription-plans");
    }
  };
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
        <form action="" className="signup-form" onSubmit={handleSubmit}>
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
            <div className="error-signup">
              {errors.name && <span>* {errors.name}</span>}
            </div>
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
            <div className="error-signup">
              {errors.email && <span>* {errors.email}</span>}
            </div>
          </div>
          <div className="inputs">
            <input
              placeholder="Mobile Number"
              type="text"
              id="mobile"
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
            <div className="error-signup">
              {errors.mobile && <span>* {errors.mobile}</span>}
            </div>
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
            <div className="error-signup">
              {errors.password && <span>* {errors.password}</span>}
            </div>
          </div>
          <div className="inputs">
            <input
              placeholder="Confirm Password"
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <div className="error-signup">
              {errors.confirmPassword && (
                <span>* {errors.confirmPassword}</span>
              )}
            </div>
          </div>
          <div className="privacy-policy">
            <label htmlFor="">
              <input
                type="checkbox"
                value={checkbox}
                onChange={(e) => {
                  setCheckbox(!checkbox);
                }}
              />
            </label>
            By signing up you agree to our <a href="#">privacy policy</a>
          </div>
          <div className="error-signup" style={{ marginBottom: "1%" }}>
            {errors.checkbox && <span>* {errors.checkbox}</span>}
          </div>
          {name === "" ||
          email === "" ||
          password === "" ||
          confirmPassword === "" ? (
            <button type="submit" className="btn" disabled>
              Sign Up
            </button>
          ) : (
            <button
              type="submit"
              className="btn"
              style={{
                backgroundColor: "#F03A47",
                fontSize: "1.5rem",
                fontWeight: "600",
              }}
            >
              Sign Up
            </button>
          )}
        </form>
      </div>
      <div className="right-container">
        <div className="change-text">
          {currentIndex === 0 ? (
            <h1
              style={{
                color: "#F03A47",
                fontSize: "6rem",

                fontWeight: "900",
              }}
            >
              "Lights, Camera, <span style={{ color: "white" }}> Sign Up</span>"
            </h1>
          ) : (
            <h1
              style={{
                color: "#F03A47",
                fontSize: "6rem",
                fontWeight: "900",
              }}
            >
              "<span style={{ color: "white" }}>Join</span> the Movie Streaming
              Revolution"
            </h1>
          )}
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
