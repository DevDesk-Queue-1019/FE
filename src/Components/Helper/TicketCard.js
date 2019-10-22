import React from "react";

const TicketCard = ({ title, description, tried, type, id }) => {
    return(
        <div>
            <h2>{title} : {type}</h2>
            <h3>{description}</h3>
            <h3>Tried: {tried}</h3>
            <button onClick={() => {
                console.log(id)
            }}>Delete ticket</button>
        </div>
    )
}

export default TicketCard;