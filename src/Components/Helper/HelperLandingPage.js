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

const HelperLandingPage = () => {
    return(
        <div>
            <h1>Helper Landing Page...</h1>
            <Button>
                <Link to='/my_tickets'>My Tickets</Link>                
            </Button>
            
            <PrivateRoute path='/my_tickets' component={MyTickets} />
        </div>
    )

}

export default HelperLandingPage;
