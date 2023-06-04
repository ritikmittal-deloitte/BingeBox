import React from "react";
import "./paymentsuccessful.scss";
function PaymentSuccessful() {
  return (
    <div>
      <div className="success-container"></div>
      <div className="congrats-card">
        <div className="check">
          <div className="img"></div>
          {/* <img src="../../assets/images/sign-up-bg.svg" /> */}
        </div>
        <h2>Congratulations</h2>
        <h4>Payment Done Successfully!</h4>
      </div>
    </div>
  );
}

export default PaymentSuccessful;
