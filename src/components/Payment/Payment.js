import React, { useEffect, useState } from "react";
import "./payment.scss";
import HDFC from "../../assets/images/hdfc.svg";
import SBI from "../../assets/images/sbi.svg";
import IDBI from "../../assets/images/idbi.svg";
import AXIS from "../../assets/images/axis.svg";
import ICICI from "../../assets/images/icici.svg";
import { ReactComponent as MainLogo } from "../../assets/images/bingeboxlogo.svg";
import angleRight from "../../assets/icons/angle-right.svg";
import { useLocation, useNavigate } from "react-router-dom";
import Upi from "./Upi";

function Payment({price,setPage}) {
//  const location = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [validDate, setValidDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState({});
  const [activeTab, setActivaTab] = useState("creditDebit");
  const [isFormValid, setIsFormValid] = useState(false);
  const [upiId, setUpiId] = useState("");
  const [selectedUpiMethod, setSelectedUpiMethod] = useState("");
  const [isPayNowEnabled, setIsPayNowEnabled] = useState(false);
  const [valid, setValid] = useState(false);

//  let p = location.state;
  const handleTabClick = (tab) => {
    setActivaTab(tab);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCardNumberChange = (e) => {
    setCardnumber(e.target.value);
  };

  const handleValidDateChange = (e) => {
    setValidDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  useEffect(() => {
    if(name !== "" || cardnumber!== "" || validDate !== "" || cvv !== "" )
    {
      validateForm();
    }
  }, [name, cardnumber, validDate, cvv]);

  const validateForm = () => {
    const errors = {};
    const regex = /^[A-Za-z\s]+$/;
    if (!name.trim()) {
      errors.name = "* Name is required";
    } else if (!regex.test(name.trim())) {
      errors.name = "* Invalid name";
    }

    // Regular expression pattern for credit card validation
    const creditCardRegex =
      /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/;
    if (!creditCardRegex.test(cardnumber.replace(/\s/g, ""))) {
      errors.cardnumber = "* Invalid credit card number";
    }

    // Regular expression pattern for expiry date validation (MM/YY format)
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    if (!expiryDateRegex.test(validDate)) {
      errors.validDate = "* Invalid expiry date";
    }

    // Regular expression pattern for CVV validation (3 or 4 digits)
    const cvvRegex = /^[0-9]{3,4}$/;
    if (!cvvRegex.test(cvv)) {
      errors.cvv = "* Invalid CVV";
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handlePayment = () => {
    // Perform payment processing logic here

    // if (!isFormValid) {
    console.log("Payment processed successfully!");
    setPage('5');
//    navigate("/payment-successful");
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setUpiId(value);
    setIsPayNowEnabled(false); // Disable the "Pay Now" button when the UPI ID changes
  };

  const handleUpiMethodClick = (upiMethod) => {
    const updatedUpiId = upiId + upiMethod;
    setUpiId(updatedUpiId);
    setSelectedUpiMethod(upiMethod);
    console.log(isPayNowEnabled);
    console.log(upiId);
    console.log(upiMethod);
    setIsPayNowEnabled(true); // Enable the "Pay Now" button when a UPI method is selected
  };
  const handlePayNowClick = () => {
    // Perform payment processing logic with the selected UPI ID and method
    console.log(`Processing payment with UPI ID: ${upiId}`);
  };

  const handlePayButton = () => {
    setValid(true);
    console.log("pay");
    setPage('5');
    //    navigate("/payment-successful");
  };

  return (
    <div className="payment-container">
      <div className="binge-box-heading">
        {/* <div className="binge-heading"> BINGE</div>
        <div className="box-heading">BOX</div> */}
        <MainLogo />
      </div>
      <p style={{ marginLeft: "4.8rem", width: "100%" }}>
        Choose the mode of payment
      </p>
      <ul className="pay-method">
        <li
          className={`tab ${activeTab === "creditDebit" ? "active" : ""}`}
          onClick={() => {
            handleTabClick("creditDebit");
            console.log("credit card active");
          }}
        >
          Credit/Debit
        </li>
        <li
          className={`tab ${activeTab === "upi" ? "active" : ""}`}
          onClick={() => {
            handleTabClick("upi");
            console.log("upi");
          }}
        >
          UPI
        </li>
        <li
          className={`tab ${activeTab === "netBanking" ? "active" : ""}`}
          onClick={() => {
            handleTabClick("netBanking");
            console.log("netBanking");
          }}
        >
          Net Banking
        </li>
      </ul>
      <div className="card">
        <div className="left">
          <p style={{ fontWeight: "400", fontSize: "1.25rem" }}>Payment</p>
          <p style={{ fontWeight: "700", fontSize: "2.5rem" }}>
            Rs.<span style={{ marginLeft: "0.3rem" }}>{price}</span>
          </p>
        </div>
        <div className="right">
          {activeTab === "creditDebit" && (
            <form className="form">
              <label htmlFor="">Name on Card </label>
              <div className="inputs">
                <input
                  placeholder="Name"
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <div className="error-payment">
                {errors.name && (
                  <span style={{ color: "#f03a47" }}>{errors.name}</span>
                )}
                {/* {nameError && <span style={{ color: "red" }}>{nameError}</span>} */}
              </div>
              <label htmlFor="">Card Number </label>
              <div style={{ display: "flex" }}>
                <div className="inputs">
                  <input
                    placeholder="XXXX XXXX XXXX XXXX "
                    // type="number"
                    id="cardnumber"
                    value={cardnumber}
                    onChange={handleCardNumberChange}
                    maxLength={16}
                  />
                </div>
              </div>
              <div className="error-payment">
                {errors.cardnumber && (
                  <span style={{ color: "#f03a47" }}>{errors.cardnumber}</span>
                )}
              </div>

              <div className="date-cvv">
                <div className="vaild-date">
                  <label htmlFor="" style={{ marginLeft: "-15rem" }}>
                    Valid Upto
                  </label>
                  <div
                    className="inputs"
                    style={{ width: "20rem", marginRight: "2rem" }}
                  >
                    <input
                      placeholder="MM/YY"
                      type="text"
                      id="valid-date"
                      value={validDate}
                      onChange={handleValidDateChange}
                    />
                  </div>
                </div>

                <div className="cvv">
                  <label htmlFor="" style={{ marginLeft: "-3rem" }}>
                    CVV
                  </label>
                  <div className="inputs" style={{ width: "12.875rem" }}>
                    <input
                      placeholder="***"
                      type="password"
                      id="cvv"
                      value={cvv}
                      onChange={handleCvvChange}
                      maxLength={3}
                    />
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="error-payment">
                  {errors.validDate && (
                    <span style={{ color: "#f03a47" }}>{errors.validDate}</span>
                  )}
                </div>
                <div
                  className="error-payment"
                  style={{ marginLeft: "21rem", position: "fixed" }}
                >
                  {errors.cvv && (
                    <span style={{ color: "#f03a47" }}>{errors.cvv}</span>
                  )}
                </div>
              </div>

              <button
                className="pay-btn"
                onClick={handlePayment}
                disabled={!isFormValid}
                style={{ backgroundColor: isFormValid ? "#f03a47" : "gray" }}
              >
                Pay Now
              </button>
            </form>
          )}
          {activeTab === "upi" && <Upi />}
          {activeTab === "netBanking" && (
            <form action="" className="form" style={{ marginTop: "-11rem" }}>
              <div className="methods">
                <div className="banks" onClick={handlePayButton}>
                  <div className="bank">
                    <img src={SBI} />
                  </div>
                  <p>SBI</p>
                </div>
                <div className="banks" onClick={handlePayButton}>
                  <div className="bank">
                    <img src={HDFC} />
                  </div>
                  <p>HDFC</p>
                </div>
                <div className="banks" onClick={handlePayButton}>
                  <div className="bank">
                    <img src={ICICI} />
                  </div>
                  <p>ICICI</p>
                </div>
                <div className="banks" onClick={handlePayButton}>
                  <div className="bank">
                    <img src={AXIS} />
                  </div>
                  <p>AXIS</p>
                </div>
                <div className="banks" onClick={handlePayButton}>
                  <div className="bank">
                    <img src={IDBI} />
                  </div>
                  <p>IDBI</p>
                </div>
                <div className="view">
                  <button className="view-btn">
                    <img src={angleRight} />
                  </button>
                  <p>View All</p>
                </div>
              </div>
              <button
                style={{
                  marginTop: "45rem",
                  backgroundColor: valid ? "#f03a47" : "gray",
                }}
                className="pay-btn"
                disabled={!valid}
                // onClick={() => {
                //   navigate("/payment-successful");
                // }}
              >
                Pay Now
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Payment;
