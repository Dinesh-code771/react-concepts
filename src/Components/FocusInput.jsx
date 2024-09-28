import React, { useRef, useEffect } from "react";

function FocusInput() {
  // Create a ref object for the input field
  const inputRef = useRef(null);
 console.log(inputRef);
  // Focus the input field when the component mounts
  useEffect(() => {
    inputRef.current.focus();
    console.log(inputRef);
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me on load" />
    </div>
  );
}

export default FocusInput;
