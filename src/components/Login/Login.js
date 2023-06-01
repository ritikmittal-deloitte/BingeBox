import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import "../Login/login.css";

const Login = ({ setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};

    if (!email) {
      errors.email = "Email is required";
    }

    if (!password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log("Login successful");
    } else {
      setErrors(errors);
    }
    // setIsLogin(true);
    // setEmail("");
    // setPassword("");
    navigate("/home");
  };
  return (
    <div className="login-container">
      <div className="overlay">
        <div className="container">
          <div className="binge-box-heading">
            <div className="binge-heading"> BINGE</div>
            <div className="box-heading">BOX</div>
          </div>
          <form onSubmit={handleLogin} className="form">
            <h3 className="d-flex justify-content-start w-100 mb-0 heading">
              Login
            </h3>
            <div className="inputs">
              <input
                placeholder="abcdxyz@gmail.com"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="inputs">
              <input
                placeholder="**********"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="remember-forgot">
              <label htmlFor="">
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <div className="sign-up">
              <label htmlFor="">Doesn't Have An Account ?</label>
              <a href="#">Sign Up</a>
            </div>
            <div className="divider">
              <span className="divider-title">or Login with</span>
            </div>
            <div className="signin-methods">
              <button className="google-signin">
                <div className=" google-icon"></div>Google
              </button>
              <button className="mac-signin">
                <AppleIcon className="apple-icon" /> Apple
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
