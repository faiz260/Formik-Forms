import React from "react";
import { useFormik } from "formik";

function App() {
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required !";
    }

    if (!values.firstName) {
      errors.firstName = "Required !";
    }
    // else if (values.firstName.length <= 4) {
    //   errors.firstName = "too short!!";
    // } else if (values.firstName.length >= 10) {
    //   errors.firstName = "too long";
    // } else if (values.firstName.length >= 6 || values.firstName.length <= 9) {
    //   errors.firstName = "Perfect !";
    // }

    if (!values.lastName) {
      errors.lastName = "Required !";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    console.log(errors);
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log("Formik Errors", formik);
  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit} autoComplete="false">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
