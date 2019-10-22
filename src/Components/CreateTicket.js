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


const CreateTicket = ({ errors, touched, status }) => {

const [ticket, setTicket] = useState([]);

useEffect(() => {
  if (status) {
    setTicket([...ticket, status]);
  }
}, [status, ticket]);

return (
  <div className="form-container">
    <Title>Create A New Ticket</Title>
    <Form className='form-form'>
      <label className='form-label'>Title:</label>
      <Field text="type" name="title" placeholder="Title" className='form-field' />
      {touched.title && errors.title && <p>{errors.title}</p>}

      <label className='form-label'>Date:</label>
      <Field type="date" name="date" min="2019-01-01" max="2022-12-31" className='form-field'/>
      {touched.date && errors.date && <p>{errors.date}</p>}

      <label className='form-label'>Type:</label>
      <Field type="text" name="type" placeholder="Ticket Type" className='form-field' />
      {touched.type && errors.type && <p>{errors.type}</p>}

      <label className='form-label'>Tried:</label>
      <Field component="textarea" name="tried" placeholder="Let us know what didn't work..." className='form-field' />
      {touched.tried && errors.tried && <p>{errors.description}</p>}

      <label className='form-label'>Description:</label>
      <Field component="textarea" name="description" placeholder="Explain your issue here..." className='form-field' />
      {touched.description && errors.description && <p>{errors.description}</p>}

      <Button type="submit" value="CreateTicket">Submit</Button>
    </Form>
    {ticket.map(tickets => (
      <p key={tickets.id}>{tickets.title}</p>
    ))}
  </div>
)
}

const formikCreateTicket = withFormik({
mapPropsToValues({ title, type, date, tried, description, }) {
  return {
    title: title || "",
    type: type || "",
    date: date || "",
    tried: tried || "",
    description: description || "",
  };
},
validationSchema: Yup.object().shape({
  title: Yup.string().required(),
  type: Yup.string().required(),
  description: Yup.string().required()
}),
handleSubmit(values, { setStatus, resetForm }) {
  axios.post("https://devdesk-backend.herokuapp.com/api/tickets/", values)
    .then(result => {
      console.log(result);
      // setStatus(result.data);
      resetForm();
    })
    .catch(error => console.error(error));
}
});

const CreateTicketWithFormik = formikCreateTicket(CreateTicket);

export default CreateTicketWithFormik;