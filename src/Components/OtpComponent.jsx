import React from "react";

export default function OtpComponent({ length = 4, handleSubmit }) {
  const [otp, setOtp] = React.useState(new Array(length).fill(""));
  const inputRef = React.useRef([]);

  function handleChange(e, index) {
    const value = e.target.value;
    if (isNaN(value)) {
      return;
    }

    const otpArray = [...otp];
    otpArray[index] = value.substring(value.length - 1);
    setOtp(otpArray);

    // Auto focus to next Input
    if (value && inputRef.current[index + 1]) {
      inputRef.current[index + 1].focus();
    }

    // Submit if last field is filled
    if (index === length - 1 && value) {
      handleSubmit(otpArray);
    }
  }

  React.useEffect(() => {
    if (inputRef.current.length > 0) {
      inputRef.current[0].focus();
    }
  }, []);

  function handleKeyPress(e, index) {
    if (e.key === "Backspace" && !otp[index] && inputRef.current[index - 1]) {
      inputRef.current[index - 1].focus(); // Move focus to previous field
    }
  }

  return (
    <div className="inputWrapper">
      {otp.map((data, index) => (
        <input
          ref={(ref) => (inputRef.current[index] = ref)}
          className="input"
          key={index}
          type="text"
          value={data}
          onChange={(e) => handleChange(e, index)} // Pass the event and the index
          onKeyDown={(e) => handleKeyPress(e, index)}
          //   maxLength={1} // Limit input to a single character
        />
      ))}
    </div>
  );
}
