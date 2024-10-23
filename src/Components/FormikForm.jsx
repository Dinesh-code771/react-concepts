import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
};
export default function FormikForm() {
  return (
    <div>
      <h1>Formik Form</h1>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          // stimulate  form submission
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>Name:</label>
              <Field className={"name"} type="text" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <label>Email:</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label>Password:</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
