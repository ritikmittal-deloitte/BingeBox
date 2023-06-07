import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/login.scss";
import { ReactComponent as MainLogo } from "./../../assets/images/bingeboxlogo.svg";
import { UserContextProvider } from "../../context/Context/UserContext/UserState";
const Login = ({ setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  // const Login = ({setIsLogin}) => {
  //     const navigate = useNavigate();

  // const validateForm = () => {
  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
      errors.email = "Incorrect Email Id";
    } else if (email.trim() === "") {
      errors.email = "Email Id is required.";
    }

    if (!password) {
      errors.password = "Password is required";
    }

    setErrors(errors);
    // Return true if there are no errors
    return Object.keys(errors).length === 0;
  };
  // };

  const handleLogin = (e) => {
    e.preventDefault();
    const errors = validateForm();
    console.log(errors);
    console.log("errors:", Object.keys(errors).length);
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
            {/* <div className="binge-heading"> BINGE</div>
            <div className="box-heading">BOX</div> */}
            <MainLogo/>
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
              <a href="#">Forgot password?</a>
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
              >
                Sign Up
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
