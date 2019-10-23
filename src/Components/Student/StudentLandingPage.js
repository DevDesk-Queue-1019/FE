import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import CreateTicket from './CreateTicket';
import MyTickets from '../Student/StudentTicketList';
import styled from 'styled-components';
import TicketCard from "../Helper/TicketCard";
// import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { getTickets, filterTickets } from "../../actions";

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

const StudentLandingPage = () => {
    const dispatch = useDispatch();
    const tickets = useSelector(state => state.tickets.tickets);

    useEffect(() => {
        dispatch(getTickets());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return(
        <div>
            <h1>Welcome Student!</h1>
            <Button>
                <Link to='/createticket'>New Ticket</Link>                
            </Button>
            <Button>
                <Link to='/my_tickets'>My Tickets</Link>                
            </Button>
            <PrivateRoute path='/createticket' component={CreateTicket} />
            <PrivateRoute path='/my_tickets' component={MyTickets} />
            {
                tickets ? tickets.map( ticket => {
                    return <TicketCard key={ticket.id} id={ticket.id} title={ticket.title} description={ticket.description} tried={ticket.tried} type={ticket.type} />
                }) : <h1>Loading...</h1>
            }
        </div>
    )

}

export default StudentLandingPage;
