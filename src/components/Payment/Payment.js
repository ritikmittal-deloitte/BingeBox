import React from "react";
import "./payment.scss";
import { useLocation } from "react-router-dom";

function Payment() {
  const location = useLocation();
  let p = location.state;
  return (
    <div className="payment-container">
      <div className="binge-box-heading">
        <div className="binge-heading"> BINGE</div>
        <div className="box-heading">BOX</div>
      </div>
      <p style={{ marginLeft: "4.8rem", width: "100%" }}>
        Choose the mode of payment
      </p>
      <ul className="method">
        <li>Credit/Debit</li>
        <li>UPI</li>
        <li>Net Banking</li>
      </ul>
      <div className="card">
        <div className="left">
          <p style={{ fontWeight: "400", fontSize: "1.25rem" }}>Payment</p>
          <p style={{ fontWeight: "700", fontSize: "2.5rem" }}>
            Rs. <span style={{ marginLeft: "2rem" }}>{p.price}</span>
          </p>
        </div>
        <div className="right">
          <form className="form">
            <label htmlFor="">Name on Card </label>
            <div className="inputs">
              <input placeholder="Name" type="text" id="name" />
            </div>

            <label htmlFor="">Card Number </label>
            <div className="inputs">
              <input
                placeholder="XXXX XXXX XXX XXXX "
                type="number"
                id="card-number"
              />
            </div>

            <div className="date-cvv">
              <div className="vaild-date">
                <label htmlFor="" style={{ marginLeft: "-15rem" }}>
                  Valid Upto
                </label>
                <div
                  className="inputs"
                  style={{ width: "20rem", marginRight: "2rem" }}
                >
                  <input
                    placeholder="DD/MM/YYYY "
                    type="number"
                    id="valid-date"
                  />
                </div>
              </div>
              <div className="cvv">
                <label htmlFor="" style={{ marginLeft: "-3rem" }}>
                  CVV
                </label>
                <div className="inputs" style={{ width: "12.875rem" }}>
                  <input placeholder="***" type="password" id="cvv" />
                </div>
              </div>
            </div>
            <button className="pay-btn">Pay Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
