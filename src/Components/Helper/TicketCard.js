/* eslint-disable no-restricted-globals */
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTicket } from "../../actions";
// import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";

const TicketCard = ({ title, description, tried, type, id, }) => {
    const dispatch = useDispatch();

    return(
        <div className="TicketCard">
            <h2>{title} : {type}</h2>
            <h3>{description}</h3>
            <h3>Tried: {tried}</h3>
            <FontAwesomeIcon icon={ faTrash } className="DeleteButton" onClick={() => {
                dispatch(deleteTicket(id))
            }}>Delete ticket</FontAwesomeIcon>
            {/* <Button variant="contained" color="secondary">Assign</Button> */}
        </div>
    )
}

export default TicketCard;