import React, { useEffect } from "react";
import "./paymentsuccessful.scss";
import Check from "../../assets/images/check.svg";

function PaymentSuccessful({ setPage }) {
  useEffect(() => {
    setTimeout(() => {
      setPage("6");
    }, 3000);
  });
  return (
    <div>
      <div className="success-container"></div>
      <div className="congrats-card">
        <div className="check">
          <img src={Check} />
        </div>
        <h2>Congratulations</h2>
        <h4>Payment Done Successfully!</h4>
      </div>
    </div>
  );
}

export default PaymentSuccessful;
