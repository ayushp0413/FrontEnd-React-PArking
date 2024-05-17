/* eslint-disable no-unused-vars */
import React from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', values);
      console.log(response.data);
      // Redirect to home page upon successful login
      navigate('/home');
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setErrors({ email: 'The provided email or password is incorrect or not found in the database.' });
      } else {
        console.error(err.response.data);
      }
    }
    setSubmitting(false);
  };

  return (
    <div className="login-details-container">
      <img src="src/components/First/background.jpg" alt="background" />
      <div className="details-container">
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            }
            if (!values.password) {
              errors.password = 'Required';
            }
            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="details-form">
              <div className="form-group">
                <label htmlFor="email">Email / Username:</label>
                <Field type="text" id="email" name="email" placeholder="Enter your email or username" />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <Field type="password" id="password" name="password" placeholder="Enter your password" />
                <ErrorMessage name="password" component="div" className="error-message" />
              </div>
              <button type="submit" disabled={isSubmitting}>Login</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
