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
    <div className='form-container'>
      <Title>Create A New Ticket</Title>
      <form onSubmit={handleSubmit} className='ticket-form'>
        <input
          type='text'
          name='title'
          placeholder='Ticket Title'
          value={ticket.title}
          onChange={handleChanges}
          className='form-field'
        />
        <input
          type='date'
          name='date'
          min='2019-01-01'
          max='2019-12-30'
          value={ticket.date}
          onChange={handleChanges}
          className='form-field'
        />
        <input
          type='text'
          name='type'
          placeholder='Ticket Type'
          value={ticket.type}
          onChange={handleChanges}
          className='form-field'
        />
        <input
          type='textarea'
          name='description'
          placeholder='Explain the issue here...'
          value={ticket.description}
          onChange={handleChanges}
          className='form-field'
        />
        <input 
          type='textarea'
          name='tried'
          placeholder='Explain what you&#39;ve tried...'
          value={ticket.tried}
          onChange={handleChanges}
          className='form-field'
        />
        <Button type='submit'>Add Ticket</Button>
      </form>
    </div>
  )
}

export default CreateTicket;