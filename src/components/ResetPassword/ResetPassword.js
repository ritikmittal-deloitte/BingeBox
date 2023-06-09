import React, { useState } from "react";
import Logo from "../Logo/Logo";
import "./resetpassword.scss";
import leftArrow from "../../assets/icons/arrow-left.svg";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validatePassword = () => {
    let error = {};
    if (password.trim() === "") {
      errors.password = "Password is required";
    }

    if (confirmPassword.trim() === "") {
      errors.confirmPassword = "Confirm password is required";
    } else if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
    }
    setErrors(error);
    return Object.keys(error).length === 0;
  };

  const handleSubmit = () => {
    if (!validatePassword()) {
      navigate("/login");
    }
  };

  return (
    <div className="forgot-password">
      <div className="forgot-container">
        <Logo className="logo" />
      </div>
      <div className="card">
        <h1>Reset Password?</h1>
        <p>Enter your new password</p>
        <div className="inputs">
          <input
            placeholder="New Password"
            type="password"
            id="newPassword"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="error-signup">
          {errors.password && <span>* {errors.password}</span>}
        </div>
        <div className="inputs">
          <input
            placeholder="Confirm Password"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <div className="error-signup">
          {errors.confirmPassword && <span>* {errors.confirmPassword}</span>}
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

export default ResetPassword;
