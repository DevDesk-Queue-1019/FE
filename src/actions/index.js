import { axiosWithAuth } from "../axiosWithAuth";

export const GET_TICKETS = "GET_TICKETS";

export const ADD_TICKET_START = "ADD_TICKET_START";
export const ADD_TICKET_SUCCESS = "ADD_TICKET_SUCCESS";
export const ADD_TICKET_ERR = "ADD_TICKET_ERR"

export const getTickets = () => dispatch => {
    axiosWithAuth().get("https://devdesk-backend.herokuapp.com/api/tickets/")
    .then( res => {
        console.log(res.data)
        dispatch({ type: GET_TICKETS, payload: res.data })
    })
}

export const addTicket = ticket => dispatch => {
    dispatch({ type: ADD_TICKET_START })
    axiosWithAuth()
        .post("https://devdesk-backend.herokuapp.com/api/tickets/", ticket)
        .then( res => {
            dispatch({ type: ADD_TICKET_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: ADD_TICKET_ERR, payload: err })
        })
}
