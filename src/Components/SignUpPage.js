import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';


export const Button = styled.button`
  width: 300px;
  height: 35px;
  background-color: #BB1333;
  color: #fff;
  border-radius: 3px;
`;

export const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #4d4d4d;
  font-size: 2.2em;
`;




const Signup = ({ errors, touched, status }) => {

const [user, setUser] = useState([]);

useEffect(() => {
  if (status) {
    setUser([...user, status]);
  }
}, [status, user]);

return (
  <div className="form-container">
    <Title>Sign Up</Title>
    <Form>
      <label>Username</label>
      <Field text="type" name="username" placeholder="Username" />
      {touched.username && errors.username && <p>{errors.username}</p>}

      <label>Password</label>
      <Field type="password" name="password" placeholder="Password" />
      {touched.password && errors.password && <p>{errors.password}</p>}

      <label>User Type</label>
      <Field text="type" name="authType" placeholder="authType" />
      {touched.email && errors.email && <p>{errors.email}</p>}

      <Button type="submit" value="Login">Submit!</Button>
    </Form>
    {user.map(users => (
      <p key={users.id}>{users.username}</p>
    ))}
  </div>
)
}

const formikSignUp = withFormik({
mapPropsToValues({ username, password, authType, }) {
  return {
    username: username || "",
    password: password || "",
    authType: authType || "",
  };
},
validationSchema: Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
  authType: Yup.string().required()
}),
handleSubmit(values, { setStatus, resetForm }) {
  axios.post("https://devdesk-backend.herokuapp.com/api/auth/register", values)
    .then(result => {
      console.log(result);
      setStatus(result.data);
      resetForm();
    })
    .catch(error => console.error(error));
}
});

const UserFormWithFormik = formikSignUp(Signup);

export default UserFormWithFormik;