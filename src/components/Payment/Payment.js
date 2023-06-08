import React, { useState } from "react";
import "./payment.scss";
import HDFC from "../../assets/images/hdfc.svg";
import SBI from "../../assets/images/sbi.svg";
import IDBI from "../../assets/images/idbi.svg";
import AXIS from "../../assets/images/axis.svg";
import ICICI from "../../assets/images/icici.svg";
import { ReactComponent as MainLogo }from "../../assets/images/bingeboxlogo.svg";
import angleRight from "../../assets/icons/angle-right.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useCreditCardValidator, images } from "react-creditcard-validator";
import Logo from "../Logo/Logo";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [validdate, setValiddate] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState({});
  const [activeTab, setActivaTab] = useState("creditDebit");
  const [isValid, setValid] = useState(false);

  const {
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    getCardImageProps,
    meta: { erroredInputs },
  } = useCreditCardValidator();
  let p = location.state;
  const handleTabClick = (tab) => {
    setActivaTab(tab);
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
            Rs. <span style={{ marginLeft: "2rem" }}>{p.price}</span>
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
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="error-payment">
                {errors.name && <span>* {errors.name}</span>}
              </div>
              <label htmlFor="">Card Number </label>
              <div style={{ display: "flex" }}>
                <div className="inputs" style={{ width: "30rem" }}>
                  <input
                    {...getCardNumberProps()}
                    placeholder="XXXX XXXX XXXX XXXX "
                    // type="number"
                    id="cardnumber"
                  />
                </div>
                <svg
                  style={{
                    width: "4rem",
                    height: "2rem",
                    marginTop: "1.5rem",
                    marginLeft: "1rem",
                  }}
                  {...getCardImageProps({ images })}
                />
              </div>
              <div className="error-payment">
                {erroredInputs.cardNumber && erroredInputs.cardNumber}
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
                      {...getExpiryDateProps()}
                      placeholder="MM/YYYY "
                      type="text"
                      id="valid-date"
                    />
                  </div>
                </div>

                <div className="cvv">
                  <label htmlFor="" style={{ marginLeft: "-3rem" }}>
                    CVV
                  </label>
                  <div className="inputs" style={{ width: "12.875rem" }}>
                    <input
                      {...getCVCProps()}
                      placeholder="***"
                      type="password"
                      id="cvv"
                    />
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="error-payment">
                  {erroredInputs.expiryDate && erroredInputs.expiryDate}
                </div>
                <div className="error-payment" style={{ marginLeft: "10rem" }}>
                  {erroredInputs.cvc && erroredInputs.cvc}
                </div>
              </div>

              {
                <button
                  className="pay-btn"
                  onClick={() => {
                    navigate("/payment-successful");
                  }}
                >
                  Pay Now
                </button>
              }
            </form>
          )}
          {activeTab === "upi" && (
            <form action="" className="form" style={{ marginTop: "-9rem" }}>
              <label htmlFor="">UPI Id</label>
              <div className="inputs">
                <input placeholder="Enter UPI Id" type="text" id="name" />
                <div className="upi">
                  <ul className="upi-method">
                    <li className="method">@oksbi</li>
                    <li className="method">@okaxis</li>
                    <li className="method">@ybl</li>
                    <li className="method">@paytm</li>
                    <li className="method">@upi</li>
                    <li className="method">@ap1</li>
                  </ul>
                </div>
              </div>
              <button
                className="pay-btn"
                style={{ marginTop: "45rem" }}
                onClick={() => {
                  navigate("/payment-successful");
                }}
              >
                Pay Now
              </button>
            </form>
          )}
          {activeTab === "netBanking" && (
            <form action="" className="form" style={{ marginTop: "-11rem" }}>
              <div className="methods">
                <div className="banks">
                  <div className="bank">
                    <img src={SBI} />
                  </div>
                  <p>SBI</p>
                </div>
                <div className="banks">
                  <div className="bank">
                    <img src={HDFC} />
                  </div>
                  <p>HDFC</p>
                </div>
                <div className="banks">
                  <div className="bank">
                    <img src={ICICI} />
                  </div>
                  <p>ICICI</p>
                </div>
                <div className="banks">
                  <div className="bank">
                    <img src={AXIS} />
                  </div>
                  <p>AXIS</p>
                </div>
                <div className="banks">
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
                style={{ marginTop: "45rem" }}
                className="pay-btn"
                onClick={() => {
                  navigate("/payment-successful");
                }}
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
