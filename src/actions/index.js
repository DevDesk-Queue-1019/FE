import { axiosWithAuth } from "../axiosWithAuth";

export const GET_TICKETS_START = "GET_TICKETS_START";
export const GET_TICKETS_SUCCESS = "GET_TICKETS_SUCCESS";
export const GET_TICKETS_ERR = "GET_TICKETS_ERR";

export const FILTER_TICKETS = "FILTER_TICKETS";
export const DELETE_TICKET = "DELETE_TICKET";

export const ADD_TICKET_START = "ADD_TICKET_START";
export const ADD_TICKET_SUCCESS = "ADD_TICKET_SUCCESS";
export const ADD_TICKET_ERR = "ADD_TICKET_ERR";

export const getTickets = () => dispatch => {
  dispatch({ type: GET_TICKETS_START })
  axiosWithAuth()
    .get("https://devdesk-backend.herokuapp.com/api/tickets/")
    .then(res => {
      dispatch({ type: GET_TICKETS_SUCCESS, payload: res.data })
    })
    .catch( err => {
      dispatch({ type: GET_TICKETS_ERR, payload: err })
    })
};

export const filterTickets = category => ({
  type: FILTER_TICKETS,
  payload: category
});

export const deleteTicket = id => dispatch => {
  axiosWithAuth().delete(`https://devdesk-backend.herokuapp.com/api/tickets/${id}`)
  .then( res => {
    dispatch({ type: DELETE_TICKET, payload: id })
  })
  .catch( err => {
    console.log(err)
  })
}

export const addTicket = ticket => dispatch => {
  dispatch({ type: ADD_TICKET_START });
  axiosWithAuth()
    .post("https://devdesk-backend.herokuapp.com/api/tickets/", ticket)
    .then(res => {
      dispatch({ type: ADD_TICKET_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_TICKET_ERR, payload: err });
    });
};
