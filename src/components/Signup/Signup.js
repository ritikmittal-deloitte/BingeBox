import React, { useState, useEffect } from "react";
import "./signup.scss";
import { ReactComponent as MainLogo } from "./../../assets/icons/Group 1000002501.svg";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import Subscriptionplans from "../Subscriptionplans/Subscriptionplans";
import SelectedPlan from "../SelectedPlan/SelectedPlan";
import Payment from "../Payment/Payment";
import PaymentSuccessful from "../PaymentSuccessful/PaymentSuccessful";
import UserPreferences from "../UserPreferences/UserPreferences";
import { AccountAction } from '../../redux/AccountSlice';
import { useDispatch } from "react-redux";
import User3 from '../../assets/images/image 76.png'

const upperTexts = [
  '"Lights, Camera, Sign Up "',
  '"Join the Movie Streaming Revolution"',
];
const belowTexts = [
  'Begin Your Epic Movie Streaming Journey Now!"',
  "Sign Up and Dive into a World of Cinematic Delights!",
];

function Signup({setIsLogin}) {
  const navigate = useNavigate();
  const [texts, setTexts] = useState([]);
  const [lowerText, setLowertext] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [errors, setErrors] = useState({});
  const [plan,setPlan]=useState({});
  const [price,setPrice]=useState(0);
const [page,setPage]=useState('1');
const dispatch=useDispatch();
  function checkPhone(phone) {
    let r1 = false;
    let r2 = false;
    if (phone.length !== 10) {
      r1 = true;
    }
    r2 = isNaN(phone);

    if (r1 && r2) {
      errors.mobile =
        "Phone Number should be of 10 digits and should only contain numbers";
    } else if (r2) {
      errors.mobile = "Phone Number should only contain numbers";
    } else if (r1) {
      errors.mobile = "Phone Numbers should be of 10 digits";
    } else {
      errors.mobile = "";
    }
  }

  const validateForm = () => {
    let errors = {};

    if (name.trim() === "") {
      errors.name = "Name is required";
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      errors.email = "Invalid email format";
    } else if (email.trim() === "") {
      errors.email = "Email is required";
    }
    if (mobile.length !== 10) {
      errors.mobile = "Mobile no. should be of 10 digits.";
    } else if (!/^\d{10}$/.test(mobile)) {
      errors.mobile = "Invalid Mobile no.";
    } else if (mobile.trim() === "") {
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
      setPage('2');
      const body={
        email:email,
    phone: mobile,
    genre: ['Horror', 'Romantic', 'Comedy'],
    accounts: [{ name: name, img: User3 }]
      }
      dispatch(AccountAction.saveSignUpInfo(body))
//      navigate("/subscription-plans", { state: name });
    }
  };
  useEffect(() => {
    setTexts(upperTexts);
    setLowertext(belowTexts);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 2 seconds
    return () => clearInterval(interval);
  }, [texts, lowerText]);

  // const inEnabled = name.length >0 && email

  return (<>
    { page==='1' && <div className="signup-container">
    <div className="left-container">
      <div className="binge-box-heading-1">
        {/* <Logo /> */}
        <MainLogo />
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
              checkPhone(e.target.value);
              // setMobile(e.target.value);
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
  </div>}
  {page==='2' && <Subscriptionplans name={name} setPage={setPage}  setPlan={setPlan} />}
  
  {page==='3' && <SelectedPlan name={name} value={plan} setPage={setPage} setPrice={setPrice}/>}
  {page === '4' && <Payment  price={price} setPage={setPage}/>}
  {page === '5' && <PaymentSuccessful setPage={setPage}/>}
  {page =='6' && <UserPreferences setIsLogin={setIsLogin} />}
  </>
   
  );
}

export default Signup;
