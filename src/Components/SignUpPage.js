import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const Button = styled.button`
background: red;
border-style: solid;
border-color: black;
color: white;
`;


const Signup = ({ errors, touched, status }) => {

const [user, setUser] = useState([]);

useEffect(() => {
  if (status) {
    setUser([...user, status]);
  }
}, [status]);

return (
  <div className="form-container">
    <h1>Sign Up</h1>
    <Form>
      <label>Username</label>
      <Field text="type" name="username" placeholder="Username" />
      {touched.username && errors.username && <p>{errors.username}</p>}

      <label>Password</label>
      <Field text="type" name="password" placeholder="Password" />
      {touched.password && errors.password && <p>{errors.password}</p>}

      <label>Status</label>
      <Field text="type" name="authType" placeholder="authType" />
      {touched.authType && errors.authType && <p>{errors.authType}</p>}

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
  console.log(values);
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

// const Signup = () => {
//   const { register, handleSubmit, watch, errors } = useForm()
//   const onSubmit = data => {
//     console.log(data);
//     axios.post("https://devdesk-backend.herokuapp.com/api/auth/register", data)
//     .then( res => {
//       console.log(res.data)
//     })
//    }


//   return (
    
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input name="username" defaultValue="test" ref={register} />
      
//       <input name="password" ref={register({ required: true })} />
      
//       <input type="submit" />
//     </form>
//   )
// }

// export default Signup;