import React from "react";
import useForm from "react-hook-form";
// import axios from 'axios';
import styled from "styled-components";
import { useDispatch } from "react-redux";
// import { Form, Field, withFormik } from 'formik';
// import * as Yup from 'yup';
import "../index.css";
import { addTicket } from "../actions";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

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
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  color: #14121f;
  font-size: 2.2em;
  text-align: center;
`;

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "40vh",
    margin: "5px auto"
  },
  textField: {
    borderRadius: "20px",
    height: "30px",
    paddingLeft: "20px"
  },
  button: {
    borderRadius: "20px",
    height: "30px",
    paddingLeft: "20px",
    backgroundColor: "#BA112E",
    color: "#fff",
    fontSize: "1.3rem",
    marginTop: "40px",
    height: "40px"
  }
}));

const CreateTicket = props => {
  console.log("CreateTicket props", props);

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
    };
    dispatch(addTicket(input));
    props.history.push("/student");
  };

  return (
    <div>
      <h1>Create Ticket</h1>
      <div className="ticketForm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="title" placeholder="title" ref={register} />
          <input name="type" placeholder="type" ref={register} />
          <textarea
            name="description"
            placeholder="description"
            ref={register}
          />
          <textarea name="tried" placeholder="tried" ref={register} />
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default CreateTicket;
