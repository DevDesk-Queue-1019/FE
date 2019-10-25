import React from 'react';
import { addTicket } from '../../actions';
import useForm from 'react-hook-form';
import { useDispatch } from "react-redux";
import '../../index.css';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const Button = styled.button`
  width: 300px;
  margin: 0 auto;
  height: 40px;
  background-color: #BA112E;
  color: #fff;
  border-radius: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 1.3rem;
    :hover {
      background-color: #14121F;
    }

    @media screen and (max-width: 700px) {
      width: 100%;
      text-align: center;
     
`;

export const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #14121F;
  font-size: 2.2em;
  text-align: center;
`;

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    // flexWrap: 'wrap',
    flexDirection: 'column',
    width: '35%',
    margin: '0 auto',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  }
}))

const CreateTicket = () => {
  
  const classes = useStyles();

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
    <div className='hd-img'>
    <div className='hero-overlay'></div>

      <div className="form-container">
        <Title>Create A New Ticket</Title>
          <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
            <TextField required className="outlined-required" className={classes.textField} margin="normal" variant="outlined" name="title" label="title" ref={register} />
            <TextField required className="outlined-required" className={classes.textField} margin="normal" variant="outlined" name="type" label="type" ref={register} /><br />
            <TextField required className="outlined-multiline-static" name="description" label="description" multiline rows="4" className={classes.textField} margin="normal" variant="outlined" ref={register} />
            <TextField className="outlined-multiline-static" name="tried" label="tried" multiline rows="4" className={classes.textField} margin="normal" variant="outlined" ref={register} /><br />
            <Button type="submit">Add Ticket</Button>
          </form>
      </div>
    </div>
  )
}

export default CreateTicket;