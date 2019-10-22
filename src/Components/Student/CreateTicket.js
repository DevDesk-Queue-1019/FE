import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTicket } from '../../actions';
import '../../index.css';
import styled from 'styled-components';

const Button = styled.button`
  width: 300px;
  height: 40px;
  background-color: #BB1333;
  color: #fff;
  border-radius: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 1.3rem;
`;

export const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #f0f4f7;
  font-size: 2.2em;
  text-align: center;
`;

const CreateTicket = props => {
  const id = parseInt(localStorage.getItem('owner'));
  const defaultState = {
    title: '',
    description: '',
    type: '',
    tried: '',
    owner: id,
    assigned: false,
    date: '',
  }

  const [ticket, setTicket] = useState([defaultState]);

  const handleSubmit = e => {
    e.preventDefault();
    props.addTicket(ticket);
  }
  const handleChanges = e => {
    setTicket({
      ...ticket,
      [e.target.name]: e.target.value
    });
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

export default connect(
  null,
  { addTicket }
)( CreateTicket );