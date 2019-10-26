import React from 'react';
import useForm from 'react-hook-form';
// import axios from 'axios';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
// import { Form, Field, withFormik } from 'formik';
// import * as Yup from 'yup';
import { addTicket } from '../actions';


export const Button = styled.input`
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
  color: #14121F;
  text-align: center;
  font-size: 2.2em;
  
`;
const FormContainer = styled.div`
width: 70%;

margin: auto;

color: #14121F;
display: flex;
flex-direction: column;
border-radius: 20px;

`;
const StyledForm = styled.form`
display: grid;
width: 100%;
justify-content: center;
font-size: 1.3rem;
`;
const StyledInput = styled.input`
border-radius: 20px;
height: 30px;
padding-left: 20px;
margin-bottom: 8%;
`;
const StyledTextarea = styled.textarea`
border-radius: 20px;
height: 30px;
padding-left: 20px;
margin-bottom: 8%
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
    <FormContainer>
      <Title>Create A New Ticket</Title>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput name="title" placeholder="title" ref={register} />
        <StyledInput name="type" placeholder="type" ref={register} />
        <StyledTextarea name="description" placeholder="description" ref={register} />
        <StyledTextarea name="tried" placeholder="tried" ref={register} />
        <Button type="submit" value="Submit" />
      </StyledForm>      
    </FormContainer>

  )
}

export default CreateTicket;