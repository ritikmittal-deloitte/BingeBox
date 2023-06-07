import React from "react";
import Logo from "../Logo/Logo";
import "./forgotpassword.scss";
import leftArrow from "../../assets/icons/arrow-left.svg";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
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
          <input placeholder="Email Id" type="email" id="email" />
        </div>
        <button type="submit" className="btn">
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
