import React from "react";
import "./subscriptionplans.scss";
import { useNavigate } from "react-router-dom";
import SubscriptionComponent from "./SubscriptionComponent";

function Subscriptionplans() {
  // const navigate = useNavigate();
  // const SelectPlan = (value) => {
  //   let x = 1;
  //   console.log("Checking");
  //   console.log("Value::", value);
  //   navigate("/selected-plan", { state: value });
  // };

  return (
    <div className="plans-container">
      <div className="left-container">
        <div className="binge-box-heading" style={{ marginTop: "17rem" }}>
          <div
            className="binge-heading"
            style={{ heigh: "4rem", width: "17rem" }}
          >
            BINGE
          </div>
          <div className="box-heading">BOX</div>
        </div>
        <h2>"Unleash Your Movie Magic"</h2>
        <h4>Subscription Plans for Endless Streaming Delight!"</h4>
      </div>
      <div className="right-container">
        <div className="cards">
          {plans.map((p, index) => {
            return <SubscriptionComponent p={p} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Subscriptionplans;

const plans = [
  {
    type: "Premium",
    price: "1499",
    device: "4",
    resolution: "4k(Ultra HD) + HDR",
    quality: "Best",
    supporteddevice: "Tv,computer, mobile, tablet",
  },
  {
    type: "Super",
    price: "899",
    device: "4",
    resolution: "1080p",
    quality: "Better",
    supporteddevice: "Tv,computer, mobile, tablet",
  },
  {
    type: "Mobile",
    price: "499",
    device: "4",
    resolution: "480p",
    quality: "Good",
    supporteddevice: "Mobile, Tablet",
  },
];
