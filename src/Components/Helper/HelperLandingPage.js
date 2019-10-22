import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getTickets } from '../../actions';

const HelperLandingPage = () => {
    const dispatch = useDispatch();
    const tickets = useSelector(state => state.tickets.tickets);

    useEffect(() => {
        dispatch(getTickets());
    }, []);

    return(
        <div>
            {
                tickets ? tickets.map( ticket => {
                    return <h1>{ ticket.id }</h1>
                }) : <h1>LoADING...</h1>
            }
        </div>
    )
}

export default HelperLandingPage;