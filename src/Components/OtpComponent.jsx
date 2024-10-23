import React, { useEffect } from "react";
import { ref } from "yup";

export default function OtpComponent({ length = 4, handleSubmit }) {
  const [otps, setOtps] = React.useState(new Array(length).fill(""));

  const otpRef = React.useRef([]);

  function toCheckEvrerythingIsFilled() {
    console.log(
      "caled",
      otps.every((otp) => otp)
    );
    return otps.every((otp) => !isNaN(otp));
  }

  function handleChange(e, index) {
    const value = e.target.value;
    if (isNaN(value)) return false;
    const newOtps = [...otps];
    newOtps[index] = value;
    setOtps(newOtps);

    //auto focus to next input
    if (value && otpRef.current[index + 1]) {
      otpRef.current[index + 1].focus();
    }
    //submit if last input is filled
    if (index === length - 1 && value && toCheckEvrerythingIsFilled()) {
      handleSubmit(newOtps.join(""));
    }
  }

  function handleKeyPress(e, index) {
    if (e.key == "Backspace" && !otps[index] && otpRef.current[index - 1]) {
      otpRef.current[index - 1].focus();
    }
  }

  useEffect(() => {
    console.log(otpRef, "ref");
    console.log("logging");
    if (otpRef.current.length > 0) {
      otpRef.current[0].focus();
    }
  }, []);

  return (
    <div className="inputWrapper">
      {otps.map((digit, index) => {
        return (
          <input
            ref={(input) => (otpRef.current[index] = input)}
            className="input"
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyPress(e, index)}
          />
        );
      })}
    </div>
  );
}
