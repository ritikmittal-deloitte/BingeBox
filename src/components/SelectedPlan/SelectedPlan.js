import React from "react";
import "./selectedplan.scss";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";

function SelectedPlan() {
  const todayDate = new Date();
  const navigate = useNavigate();
  const location = useLocation();
  let p = location.state;
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
        <Logo />
        {/* <div className="binge-heading"> BINGE</div>
        <div className="box-heading">BOX</div> */}
      </div>
      <div className="card">
        <h2>{p.type} Plan</h2>
        <p>
          Hi <span>Manish Singh</span>, Here is your Subscription Plan Details!
        </p>
        <p style={{ marginTop: "1.5rem" }}>
          Validity: <span>{todayDate.getFullYear()}</span>
        </p>
        <div className="features">
          <h4>Price</h4>
          <h4>Resolution</h4>
          <h4>Video Quality</h4>
          <h4>Supported Devices</h4>
        </div>
        <div className="rate">
          <p>
            Rs. <span>{p.price}</span>/yr
          </p>
          <p style={{ marginLeft: "-1.2rem", marginRight: "0rem" }}>
            {p.resolution}
          </p>
          <p style={{ marginLeft: "7rem", marginRight: "0rem" }}>{p.quality}</p>
          <p style={{ marginLeft: "16.8rem", marginRight: "0rem" }}>
            {p.supporteddevice}
          </p>
        </div>
        <div className="btn">
          <button
            className="back-btn"
            onClick={() => navigate("/subscription-plans")}
          >
            Back
          </button>
          <button
            className="payment-btn"
            onClick={() => {
              Payment(p);
            }}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectedPlan;
