import React from "react";

function Signup() {
  return (
    <div className="login-container">
      <div className="overlay">
        <div className="container">
          <div className="binge-box-heading">
            <div className="binge-heading"> BINGE</div>
            <div className="box-heading">BOX</div>
          </div>
          <form className="form">
            <h3 className="d-flex justify-content-start w-100 mb-0 heading">
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
            <div className="remember-forgot">
              <label htmlFor="">
                <input type="checkbox" />
                By signing up you agree to our <a href="#">privacy policy</a>
              </label>
            </div>
            <button type="submit" className="btn">
              Sign Up
            </button>
          </form>
        </div>
        <div className="w-100 sidebar"></div>
      </div>
    </div>
  );
}

export default Signup;
