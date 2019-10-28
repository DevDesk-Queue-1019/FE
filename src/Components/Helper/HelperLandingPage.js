import React, { useEffect } from "react";
import TicketCard from "./TicketCard";
// import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { getTickets } from "../../actions";
import "../../App.css";

// const Title = styled.h1`
//   font-family: 'Raleway', sans-serif;
//   font-weight: 600;
//   color: #f0f4f7;
//   font-size: 2.2em;
//   text-align: center;
// `;


const HelperLandingPage = () => {
    const dispatch = useDispatch();
    const tickets = useSelector(state => state.tickets.tickets);
    const loading = useSelector(state => state.tickets.loading);

    useEffect(() => {
        dispatch(getTickets());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div className="Menu">
            <h1>{ localStorage.getItem('welcome') }</h1>
            {/* <button onClick={() => {
                //dispatch(filterTickets("test"))
            }}>filter</button> */}
            {
                !(loading) ? tickets.map( ticket => {
                    return <TicketCard key={ticket.id} id={ticket.id} title={ticket.title} description={ticket.description} tried={ticket.tried} type={ticket.type} />
                }) : <h1>Loading...</h1>
            }
        </div>
    )

}

export default HelperLandingPage;
