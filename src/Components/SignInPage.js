import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

const Login = ({ errors, touched, status }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (status) {      
      setUser([...user, status]);
    }
  }, [status, user]);

    const classes = useStyles();

  return (


    <div>
      <Title>Login</Title>
      <Form>
        <Field required  text="type" name="username" placeholder="Username" />
        {touched.username && errors.username && <p>{errors.username}</p>}<br />

        <Field required type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && <p>{errors.password}</p>}

        <Button type="submit" value="Login">Submit!</Button>
      </Form>
      {user.map(users => (
        <p key={users.id}>{users.message}</p>
      ))}
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
    username: Yup.string().required(),
    password: Yup.string().required()
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