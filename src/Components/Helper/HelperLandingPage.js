
import React from "react";
import { Link, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import MyTickets from '../Student/StudentTicketList';
import styled from 'styled-components';

const Button = styled.button`
  width: 300px;
  height: 40px;
  background-color: #BB1333;
  color: #fff;
  border-radius: 20px;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 1.3rem;
`;

const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #f0f4f7;
  font-size: 2.2em;
  text-align: center;
`;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getTickets, filterTickets } from '../../actions';
import TicketCard from "./TicketCard";

const HelperLandingPage = () => {
    const dispatch = useDispatch();
    const tickets = useSelector(state => state.tickets.tickets);

    useEffect(() => {
        dispatch(getTickets());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


const HelperLandingPage = () => {
    return(
        <div>

        
            <h1>Welcome Helper</h1>
            <button onClick={() => {
                dispatch(filterTickets("test"))
            }}>filter</button>
            {
                tickets ? tickets.map( ticket => {
                    return <TicketCard key={ticket.id} id={ticket.id} title={ticket.title} description={ticket.description} tried={ticket.tried} type={ticket.type} />
                }) : <h1>Loading...</h1>
            }

        </div>
    )

}

export default HelperLandingPage;
