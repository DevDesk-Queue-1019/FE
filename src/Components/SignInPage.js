import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import '../index.css';

const Button = styled.button`
  width: 300px;
  height: 40px;
  background-color: #BB1333;
  color: #fff;
  border-radius: 20px;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 1.3rem;
`;

const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #14121F;
  font-size: 2.2em;
  text-align: center;
`;

const Login = ({ errors, touched, status }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (status) {      
      setUser([...user, status]);
    }
  }, [status, user]);


  return (
    <div className='hd-img'>
    <div className='hero-overlay'></div>

    <div className="form-container">
      <Title>Login</Title>
      <Form className='form-form'>
        <label className='form-label'>Username</label>
        <Field text="type" name="username" placeholder="Username*" className='form-field'/>
        {touched.username && errors.username && <p>{errors.username}</p>}

        <label className='form-label'>Password</label>
        <Field type="password" name="password" placeholder="Current Password*" className='form-field'/>

        {touched.password && errors.password && <p>{errors.password}</p>}

        <Button type="submit" value="Login">Submit</Button>
      </Form>
      {user.map(users => (
        <p key={users.id}>{users.message}</p>
      ))}
    </div>
    </div>
  )
}

const formikSignIn = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required('***Username Required!***'),
    password: Yup.string().required('***Password Required!***')
  }),
  handleSubmit(values, { setStatus, resetForm, props }) {
    console.log(props);
    axios.post("https://devdesk-backend.herokuapp.com/api/auth/login", values)
      .then(result => {
        console.log(result);
        setStatus(result.data);
        localStorage.setItem('token', result.data.token);
        localStorage.setItem('owner', result.data.id);
        resetForm();    

        props.history.push('/student');
      })
      .catch(error => console.error(error));
  }
});

const UserFormWithFormik = formikSignIn(Login);

export default UserFormWithFormik;