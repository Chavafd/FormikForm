import React from "react";
import { useFormik } from 'formik';

function App() {
  const validate = values => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Field required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Username should be an email';
    }

    if (!values.password) {
      errors.password = 'Field required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate,
    onSubmit: values => {
      alert("Login Successful");
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="emailField">Email</label>
          <input
            id="emailField"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <div id="emailError">{formik.errors.email}</div>
        </div>
        <div>
          <label htmlFor="pswField">Password</label>
          <input
            id="pswField"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <div id="pswError">{formik.errors.password}</div>
        </div>
        <div>
          <button id="submitBtn" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;

