import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';


export const Button = styled.button`
  width: 300px;
  height: 40px;
  background-color: #BB1333;
  color: #fff;
  border-radius: 20px;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 1.3rem;
`;

export const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #f0f4f7;
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
    <Form className='form-form'>
      <label className='form-label'>Username</label>
      <Field text="type" name="username" placeholder="Username" className='form-field' />
      {touched.username && errors.username && <p>{errors.username}</p>}

      <label className='form-label'>Password</label>
      <Field type="password" name="password" placeholder="Password" className='form-field' />
      {touched.password && errors.password && <p>{errors.password}</p>}

      <label className='form-label'>User Type</label>
      <Field text="type" name="authType" placeholder="authType" className='form-field' />
      {touched.email && errors.email && <p>{errors.email}</p>}

      <Button type="submit" value="Login">Submit</Button>
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