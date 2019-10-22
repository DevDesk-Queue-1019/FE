import React from "react";
import { useDispatch } from "react-redux";
import { deleteTicket } from "../../actions";

const TicketCard = ({ title, description, tried, type, id }) => {
    const dispatch = useDispatch();

    return(
        <div>
            <h2>{title} : {type}</h2>
            <h3>{description}</h3>
            <h3>Tried: {tried}</h3>
            <button onClick={() => {
                console.log(id)
                dispatch(deleteTicket(id))
            }}>Delete ticket</button>
        </div>
    )
}

export default TicketCard;