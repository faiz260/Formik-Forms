import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikWithYup() {

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required !"),
        lastName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required !!"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Required !"),
        password: Yup.string()
          .min(4, "Too short")
          .max(15, "Too long")
          .required("Required !"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log("VALUES >>> ", values);
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" />
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />
        <label htmlFor="email">Email</label>
        <Field name="email" type="text" />
        <ErrorMessage name="email" />
        <label htmlFor="password">Password</label>
        <Field name="password" type="text" />
        <ErrorMessage name="password" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default FormikWithYup;
