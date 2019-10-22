import React from 'react';
import { addTicket } from '../../actions';
import useForm from 'react-hook-form';
import { useDispatch } from "react-redux";

const CreateTicket = () => {
  
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
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="title" placeholder="title" ref={register} />
      <input name="description" placeholder="description" ref={register} />
      <input name="type" placeholder="type" ref={register} />
      <input name="tried" placeholder="tried" ref={register} />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default CreateTicket;