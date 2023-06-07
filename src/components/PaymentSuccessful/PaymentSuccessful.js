import React, { useEffect } from "react";
import "./paymentsuccessful.scss";
import Check from "../../assets/images/check.svg";
import { useNavigate } from "react-router-dom";
function PaymentSuccessful() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/userpreferences");
    }, 5000);
  });
  return (
    <div>
      <div className="success-container"></div>
      <div className="congrats-card">
        <div className="check">
          {/* <div className="img"></div> */}
          <img src={Check} />
        </div>
        <h2>Congratulations</h2>
        <h4>Payment Done Successfully!</h4>
      </div>
    </div>
  );
}

export default PaymentSuccessful;
