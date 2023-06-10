import React from "react";
import "./subscriptionplans.scss";
import SubscriptionComponent from "./SubscriptionComponent";
import { ReactComponent as MainLogo } from "./../../assets/images/Group 1000002501.svg";

function Subscriptionplans({ name, setPage, setPlan }) {
  return (
    <div className="plans-container">
      <div className="left-container">
        <div className="binge-box-heading" style={{ marginTop: "17rem" }}>
          <MainLogo />
        </div>
        <h2>"Unleash Your Movie Magic"</h2>
        <h4>Subscription Plans for Endless Streaming Delight!"</h4>
      </div>
      <div className="right-container">
        <div className="cards">
          {plans.map((p, index) => {
            return (
              <SubscriptionComponent
                p={p}
                index={index}
                name={name}
                setPage={setPage}
                setPlan={setPlan}
              />
            );
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
