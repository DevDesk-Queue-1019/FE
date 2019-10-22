import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getTickets, filterTickets } from '../../actions';
import TicketCard from "./TicketCard";

const HelperLandingPage = () => {
    const dispatch = useDispatch();
    const tickets = useSelector(state => state.tickets.tickets);

    useEffect(() => {
        dispatch(getTickets());
    }, []);

    return(
        <div>
            <h1>Welcome Helper</h1>
            <button onClick={() => {
                dispatch(filterTickets("test"))
            }}>filter</button>
            {
                tickets ? tickets.map( ticket => {
                    return <TicketCard key={ticket.id} id={ticket.id} title={ticket.title} description={ticket.description} tried={ticket.tried} type={ticket.type} />
                }) : <h1>LoADING...</h1>
            }
        </div>
    )
}

export default HelperLandingPage;