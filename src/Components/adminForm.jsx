import React, { useEffect } from "react";
import { useRef } from "react";
import "../Styles/userFrom.css";
export default function AdminForm() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    console.log({ firstName, lastName });
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
  };

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label className="label">First Name: </label>
        <input className="input" type="text" ref={firstNameRef} />
      </div>
      <div>
        <label className="label">Last Name: </label>
        <input className="input" type="text" ref={lastNameRef} />
      </div>
      <button className="submit" type="submit">
        Submit
      </button>
    </form>
  );
}
