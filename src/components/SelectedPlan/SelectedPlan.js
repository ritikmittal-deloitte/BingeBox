import React from "react";
import "./selectedplan.scss";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import { ReactComponent as MainLogo } from "./../../assets/images/Group 1000002501.svg";

function SelectedPlan() {
  const todayDate = new Date();
  const navigate = useNavigate();
  const location = useLocation();
  let p = location.state.value;
  let name = location.state.name;
  console.log("Value Recieved:", p);
  const Payment = (value) => {
    let x = 1;
    console.log("Checking");
    console.log("plan Value::", value);
    navigate("/payment", { state: value });
  };
  return (
    <div className="selected-container">
      <div className="binge-box-heading">
        <MainLogo />
        {/* <div className="binge-heading"> BINGE</div>
        <div className="box-heading">BOX</div> */}
      </div>
      <div className="card">
        <h2>{p?.type} Plan</h2>
        <p>
          Hi <span>{name}</span>, Here is your Subscription Plan Details!
        </p>
        <p style={{ marginTop: "1.5rem" }}>
          Validity: &nbsp;&nbsp;<span>{todayDate.getDate()}/{todayDate.getMonth()}/{todayDate.getFullYear()+1}</span>
        </p>
        <div className="features">
          <h4>Price</h4>
          <h4>Resolution</h4>
          <h4>Video Quality</h4>
          <h4>Supported Devices</h4>
        </div>
        <div className="rate-0">
          <div className="price-box">
            Rs. <span style={{fontSize:"2.5rem"}}>{p.price}</span>/yr
          </div>
          <div  className="resolution-box">
            {p.resolution}
          </div>
          <div className="qulaity-box">{p.quality}</div>
          <div className="device-1">
            {p.supporteddevice}
          </div>
        </div>
        <div className="btn">
          <button
            className="back-btn"
            onClick={() => navigate("/subscription-plans")}
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
