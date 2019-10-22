import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTicket } from '../../actions';

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
    <div className='ticket-form'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='Ticket Title'
          value={ticket.title}
          onChange={handleChanges}
        />
        <input
          type='date'
          name='date'
          min='2019-01-01'
          max='2019-12-30'
          value={ticket.date}
          onChange={handleChanges}
        />
        <input
          type='text'
          name='type'
          placeholder='Ticket Type'
          value={ticket.type}
          onChange={handleChanges}
        />
        <input
          type='textarea'
          name='description'
          placeholder='Explain the issue here...'
          value={ticket.description}
          onChange={handleChanges}
        />
        <input 
          type='textarea'
          name='tried'
          placeholder='Explain what you&#39;ve tried...'
          value={ticket.tried}
          onChange={handleChanges}
        />
        <button type='submit'>Add Ticket</button>
      </form>
    </div>
  )
}

export default connect(
  null,
  { addTicket }
)( CreateTicket );