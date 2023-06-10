import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/login.scss";
import { ReactComponent as MainLogo } from "./../../assets/images/bingeboxlogo.svg";
import { useDispatch } from "react-redux";
import { AccountAction } from "../../redux/AccountSlice";
import { dummyData } from "../../mockData/accountsMockData";

const Login = ({ setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateForm = () => {
    const error = {};
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (email.trim() === "") {
      error.email = "Email Id is required.";
    } else if (!emailRegex.test(email)) {
      error.email = "Incorrect Email Id";
    }

    if (!password) {
      error.password = "Password is required";
    }
    console.log("Error :", error);
    setErrors(error);

    return Object.keys(error).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const errors1 = validateForm();

    if (errors1) {
      console.log("Login successful");
      setIsLogin(true);
      dispatch(AccountAction.saveSignUpInfo(dummyData));

      if (dummyData.accounts.length === 1) {
        navigate("/home");
      } else navigate("/accounts");
    } else {
      // setErrors(errors);
    }
  };
  return (
    <div className="login-container">
      <div className="overlay-1">
        <div className="container">
          <div className="binge-box-heading">
            <MainLogo />
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
              <div className="error-signup">
                {errors.email && <span>* {errors.email}</span>}
              </div>
            </div>
            <div className="inputs">
              <input
                placeholder="**********"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="error-signup">
                {errors.password && <span>* {errors.password}</span>}
              </div>
            </div>
            <div className="remember-forgot">
              <label htmlFor="">
                <input type="checkbox" />
                Remember me
              </label>
              <a
                onClick={() => {
                  navigate("/forgot-password");
                }}
                style={{ cursor: "pointer" }}
              >
                Forgot password?
              </a>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <div className="sign-up">
              <label htmlFor="">Doesn't Have An Account ?</label>
              <a
                onClick={() => {
                  navigate("/signup");
                }}
                style={{ cursor: "pointer" }}
              >
                <u> Sign Up</u>
              </a>
            </div>
            <div className="divider">
              <span className="divider-title">or Login with</span>
            </div>
            <div className="signin-methods">
              <button className="google-signin">
                <div className=" google-icon"></div>Google
              </button>
              <button className="mac-signin">
                <div className="apple-icon"></div> Apple
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
