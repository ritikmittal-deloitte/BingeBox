import React, { useState } from "react";

function Upi() {
  const [upiId, setUpiId] = useState("");
  const [selectedUpiMethod, setSelectedUpiMethod] = useState("");
  const [isPayNowEnabled, setIsPayNowEnabled] = useState(false);
  const [valid, setValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const handleInputChange = (event) => {
    const { value } = event.target;
    setUpiId(value);
    setIsPayNowEnabled(false); // Disable the "Pay Now" button when the UPI ID changes
  };

  const handleUpiMethodClick = (event, upiMethod) => {
    event.preventDefault();
    const updatedUpiId = upiId + upiMethod;
    setUpiId(updatedUpiId);
    setSelectedUpiMethod(upiMethod);
    console.log(isPayNowEnabled);
    console.log(upiId);
    console.log(upiMethod);

    setIsPayNowEnabled(true); // Enable the "Pay Now" button when a UPI method is selected
    console.log(isPayNowEnabled);
  };

  const handlePayNowClick = () => {
    // Perform payment processing logic with the selected UPI ID and method
    console.log(`Processing payment with UPI ID: ${upiId}`);
  };
  return (
    <div>
      <form action="" className="form" style={{ marginTop: "-9rem" }}>
        <label htmlFor="">UPI Id</label>
        <div className="inputs">
          <input
            placeholder="Enter UPI Id"
            type="text"
            id="name"
            value={upiId}
            onChange={handleInputChange}
          />
          <div className="upi">
            <ul className="upi-method">
              {/* {suggestedUpiMethods.map((upi) => {
                      <li
                        className="method"
                        key={upi}
                        onClick={() => handleUpiMethodClick(upi)}
                      >
                        {upi}
                      </li>;
                    })} */}
              <button
                className="method"
                key="@oksbi"
                onClick={(event) => handleUpiMethodClick(event, "@oksbi")}
              >
                @oksbi
              </button>
              <button
                className="method"
                key="@okaxis"
                onClick={(event) => handleUpiMethodClick(event, "@okaxis")}
              >
                @okaxis
              </button>
              <button
                className="method"
                key="@ybl"
                onClick={(event) => handleUpiMethodClick(event, "@ybl")}
              >
                @ybl
              </button>
              <button
                className="method"
                key="@paytm"
                onClick={(event) => handleUpiMethodClick(event, "@paytm")}
              >
                @paytm
              </button>
              <button
                className="method"
                key="@upi"
                onClick={(event) => handleUpiMethodClick(event, "@upi")}
              >
                @upi
              </button>
              <button
                className="method"
                key="@api"
                onClick={(event) => handleUpiMethodClick(event, "@api")}
              >
                @ap1
              </button>
            </ul>
          </div>
        </div>
        <button
          className="pay-btn"
          style={{
            marginTop: "45rem",
            backgroundColor: isFormValid ? "#f03a47" : "gray",
          }}
          onClick={handlePayNowClick}
          disabled={!isPayNowEnabled}
        >
          Pay Now
        </button>
      </form>
    </div>
  );
}

export default Upi;
