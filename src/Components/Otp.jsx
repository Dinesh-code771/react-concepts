import React from "react";
import OtpComponent from "./OtpComponent";
import "../Styles/otp.css";
export default function Otp() {
  function handleSubmit(otp) {
    console.log(otp);
  }


  return (
    <div className="containerWrapper">
      <OtpComponent length={4} handleSubmit={handleSubmit} />
    </div>
  );
}
// Compare this snippet from my-app/src/Components/Settings.jsx:    