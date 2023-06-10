import React from "react";
import "./selectedplan.scss";
import { ReactComponent as MainLogo } from "./../../assets/images/Group 1000002501.svg";

function SelectedPlan({ name, value, setPage, setPrice }) {
  const todayDate = new Date();
  let p = value;

  console.log("Value Recieved:", p);
  const Payment = (value) => {
    setPrice(value.price);
    setPage("4");
  };
  return (
    <div className="selected-container">
      <div className="binge-box-heading">
        <MainLogo />
      </div>
      <div className="card">
        <h2>{p?.type} Plan</h2>
        <p>
          Hi <span style={{ textTransform: "capitalize" }}>{name}</span>, Here
          is your Subscription Plan Details!
        </p>
        <p style={{ marginTop: "1.5rem" }}>
          Validity: &nbsp;&nbsp;
          <span>
            {todayDate.getDate()}/{todayDate.getMonth()}/
            {todayDate.getFullYear() + 1}
          </span>
        </p>
        <div className="features">
          <h4>Price</h4>
          <h4>Resolution</h4>
          <h4>Video Quality</h4>
          <h4>Supported Devices</h4>
        </div>
        <div className="rate-0">
          <div className="price-box">
            Rs. <span style={{ fontSize: "2.5rem" }}>{p.price}</span>/yr
          </div>
          <div className="resolution-box">{p.resolution}</div>
          <div className="qulaity-box">{p.quality}</div>
          <div className="device-1">{p.supporteddevice}</div>
        </div>
        <div className="btn">
          <button
            className="back-btn"
            onClick={() => {
              setPage("2");
            }}
          >
            Back
          </button>
          <div
            className="payment-btn"
            onClick={() => {
              Payment(p);
            }}
          >
            Proceed to Payment
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedPlan;
