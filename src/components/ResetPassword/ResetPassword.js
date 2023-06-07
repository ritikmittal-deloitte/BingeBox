import React from "react";
import Logo from "../Logo/Logo";
import "./resetpassword.scss";
import leftArrow from "../../assets/icons/arrow-left.svg";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();
  return (
    <div className="forgot-password">
      <div className="forgot-container">
        <Logo className="logo" />
      </div>
      <div className="card">
        <h1>Reset Password?</h1>
        <p>Enter your new password</p>
        <div className="inputs">
          <input placeholder="New Password" type="password" id="newPassword" />
        </div>
        <div className="inputs">
          <input placeholder="Confirm Password" type="password" id="confirmPassword" />
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

export default ResetPassword;
