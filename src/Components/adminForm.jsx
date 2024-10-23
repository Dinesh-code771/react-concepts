import React, { useState } from "react";
import * as Yup from "yup";
import useForm from "../hooks/useForm";
import axios from "axios";
export default function SignupForm() {

  const { values: formValues, handleChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
  });

  async function handleLogin() {
    // const res = await axios.post("http://localhost:3001/login", {
    //   email: formValues.email,
    //   password: formValues.password,
    // });

    // const data = res.data;
    // const token = data.token;

    localStorage.setItem("token", "sagsagg");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate form values with Yup
      await validationSchema.validate(formValues, { abortEarly: false });
      console.log("Form is valid!");
      handleLogin();
      setErrors({});
    } catch (err) {
      const validationErrors = {};
      console.log(err);
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      console.log("Form is invalid!", validationErrors);
      setErrors(validationErrors); // Set validation errors in state
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
