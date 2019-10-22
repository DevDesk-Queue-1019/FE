import { axiosWithAuth } from "../axiosWithAuth";

export const GET_TICKETS = "GET_TICKETS";

export const getTickets = () => dispatch => {
    axiosWithAuth().get("https://devdesk-backend.herokuapp.com/api/tickets/")
    .then( res => {
        dispatch({ type: GET_TICKETS, payload: res.data })
    })
}