import React from "react";
import "./subscriptionplans.scss";

function Subscriptionplans() {
  return (
    <div className="plans-container">
      <div className="left-container">
        <div className="binge-box-heading" style={{ marginTop: "17rem" }}>
          <div className="binge-heading"> BINGE</div>
          <div className="box-heading">BOX</div>
        </div>
        <h2>"Unleash Your Movie Magic"</h2>
        <h4>Subscription Plans for Endless Streaming Delight!"</h4>
      </div>
      <div className="right-container">
        <div className="cards">
          <div className="card">
            <h2 className="plan-type">Premium</h2>
            <h4 className="price">
              Rs. <span>1499</span>/yr
            </h4>
            <p className="device">4 device</p>
            <div className="resolution">
              <p>Resolution</p>
              <h5>4k(Ultra HD) + HDR</h5>
            </div>
            <hr />
            <div className="quality">
              <p>Video Quality</p>
              <h5>Best</h5>
            </div>
            <hr />
            <div className="supported-device">
              <p>Supported Devices</p>
              <h5>Tv,computer, mobile, tablet</h5>
            </div>
            <button className="btn">Buy Now</button>
          </div>
          <div className="card">
            <h2 className="plan-type">Premium</h2>
            <h4 className="price">
              Rs. <span>1499</span>/yr
            </h4>
            <p className="device">4 device</p>
            <div className="resolution">
              <p>Resolution</p>
              <h5>4k(Ultra HD) + HDR</h5>
            </div>
            <hr />
            <div className="quality">
              <p>Video Quality</p>
              <h5>Best</h5>
            </div>
            <hr />
            <div className="supported-device">
              <p>Supported Devices</p>
              <h5>Tv,computer, mobile, tablet</h5>
            </div>
            <button className="btn">Buy Now</button>
          </div>
          <div className="card">
            <h2 className="plan-type">Premium</h2>
            <h4 className="price">
              Rs. <span>1499</span>/yr
            </h4>
            <p className="device">4 device</p>
            <div className="resolution">
              <p>Resolution</p>
              <h5>4k(Ultra HD) + HDR</h5>
            </div>
            <hr />
            <div className="quality">
              <p>Video Quality</p>
              <h5>Best</h5>
            </div>
            <hr />
            <div className="supported-device">
              <p>Supported Devices</p>
              <h5>Tv,computer, mobile, tablet</h5>
            </div>
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscriptionplans;
