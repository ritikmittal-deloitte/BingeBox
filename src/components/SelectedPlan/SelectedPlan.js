import React from "react";
import "./selectedplan.scss";

function SelectedPlan() {
  return (
    <div className="selected-container">
      <div className="binge-box-heading">
        <div className="binge-heading"> BINGE</div>
        <div className="box-heading">BOX</div>
      </div>
      <div className="card">
        <h2>Premium Plan</h2>
        <p>
          Hi <span>Manish Singh</span>, Here is your Subscription Plan Details!
        </p>
        <p style={{ marginTop: "1.5rem" }}>
          Validity: <span>1 June 2024</span>
        </p>
        <div className="features">
          <h4>Price</h4>
          <h4>Resolution</h4>
          <h4>Video Quality</h4>
          <h4>Supported Devices</h4>
        </div>
        <div className="rate">
          <p>
            Rs. <span>1499</span>/yr
          </p>
          <p style={{ marginLeft: "-1.2rem", marginRight: "0rem" }}>
            4k (Ultra HD) + HDR
          </p>
          <p style={{ marginLeft: "7rem", marginRight: "0rem" }}>Best</p>
          <p style={{ marginLeft: "16.8rem", marginRight: "0rem" }}>
            TV, Computer, Mobile
          </p>
        </div>
        <div className="btn">
          <div className="back-btn">Back</div>
          <div className="payment-btn">Proceed to Payment</div>
        </div>
      </div>
    </div>
  );
}

export default SelectedPlan;
