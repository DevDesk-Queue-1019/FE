import React from 'react';
import useForm from 'react-hook-form';
// import axios from 'axios';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
// import { Form, Field, withFormik } from 'formik';
// import * as Yup from 'yup';
import { addTicket } from '../actions';


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


const CreateTicket = props => {

  console.log('CreateTicket props', props);

  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    let ownerId = parseInt(localStorage.getItem("owner"));
    let input = {
      ...data,
      date: new Date().toISOString(),
      assigned: null,
      owner: ownerId
    }
    dispatch(addTicket(input));
    // props.history.push('/student');
  }

  return (
    <div>
    <h1>Create Ticket</h1>
    <div className="ticketForm">
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="title" placeholder="title" ref={register} />
      <input name="type" placeholder="type" ref={register} />
      <textarea name="description" placeholder="description" ref={register} />
      <textarea name="tried" placeholder="tried" ref={register} />
      <br></br>
      <input type="submit" value="Submit" />
    </form>
    </div>
    </div>
  )
}

export default CreateTicket;