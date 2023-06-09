import React, { useState } from "react";
import Logo from "../Logo/Logo";
import "./forgotpassword.scss";
import leftArrow from "../../assets/icons/arrow-left.svg";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const validateEmail = () => {
    let error = {};
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      error.email = "Invalid email format";
    } else if (email.trim() === "") {
      error.email = "Email is required";
    }
    setErrors(error);
    console.log(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateEmail()) {
      navigate("/reset-password");
    }
  };

  return (
    <div className="forgot-password">
      <div className="forgot-container">
        <Logo className="logo" />
      </div>
      <div className="card">
        <h1>Forgot Your Password?</h1>
        <p>
          Enter your email below to receive your <br />
          password reset instructions
        </p>
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
        <div className="error-signup">
          {errors.email && <span>* {errors.email}</span>}
        </div>
        <button
          type="submit"
          className="btn"
          onClick={(e) => {
            handleSubmit();
          }}
        >
          Send Email
        </button>

        <h1
          onClick={() => {
            navigate("/login");
          }}
        >
          <img src={leftArrow} />
          <span> Back to Login Page</span>
        </h1>
      </div>
    </div>
  );
}

export default ForgotPassword;
