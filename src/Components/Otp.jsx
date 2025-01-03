import React, { useEffect, useRef } from "react";
import { useState } from "react";
export default function Otp({ length, onSubmit }) {
  const [otp, setOtp] = useState(Array.from({ length }));
  const [currentindex, setCurrentIndex] = useState(0);
  const inputRefs = useRef([]);
  useEffect(() => {
    if (inputRefs.current.length > 0) {
      inputRefs.current[0].focus();
    }
  }, [inputRefs]);

  function handleOnchange(e, index) {
    otp[index] = e.target.value;
    if (currentindex === length - 1) {
      onSubmit(otp);
    }
    if (currentindex === length - 1) return;
    inputRefs.current[currentindex + 1].focus();
    setCurrentIndex(currentindex + 1);
  }
  return (
    <div className="otps h-[600px] flex justify-center items-center gap-6">
      {otp.map((number, index) => {
        return (
          <input
            value={otp[index]}
            onChange={(e) => handleOnchange(e, index)}
            key={index}
            ref={(input) => (inputRefs.current[index] = input)}
            type="number"
            className="border-2 w-[100px] h-[100px] rounded-md"
          />
        );
      })}
    </div>
  );
}
