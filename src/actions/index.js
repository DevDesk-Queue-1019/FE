import { axiosWithAuth } from "../axiosWithAuth";

export const GET_TICKETS_START = "GET_TICKETS_START";
export const GET_TICKETS_SUCCESS = "GET_TICKETS_SUCCESS";
export const GET_TICKETS_ERR = "GET_TICKETS_ERR";

export const FILTER_TICKETS = "FILTER_TICKETS";
export const DELETE_TICKET = "DELETE_TICKET";

export const ADD_TICKET_START = "ADD_TICKET_START";
export const ADD_TICKET_SUCCESS = "ADD_TICKET_SUCCESS";
export const ADD_TICKET_ERR = "ADD_TICKET_ERR";

export const GET_STUDENT_TICKETS = "GET_STUDENT_TICKETS";

export const UPDATE_TICKET = "UPDATE_TICKET";

// export const GET_SINGLE_USER = "GET_SINGLE_USER";

// export const getSingleUser = id => dispatch => {

//   axiosWithAuth()
//     .get(`https://devdesk-backend.herokuapp.com/api/users/${id}`, id)
//     .then(res => {
//       console.log(res.data);
//       dispatch({ type: GET_SINGLE_USER, payload: res.data })
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }

export const getTickets = () => dispatch => {
  dispatch({ type: GET_TICKETS_START })
  axiosWithAuth()
    .get("https://devdesk-backend.herokuapp.com/api/tickets")
    .then(res => {
      console.log(res)
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
  .then(() => {
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
      console.log(res.data)
      dispatch({ type: ADD_TICKET_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_TICKET_ERR, payload: err });
    });
};

export const getStudentTickets = id => dispatch => {
  axiosWithAuth().get("https://devdesk-backend.herokuapp.com/api/tickets/")
  .then( res => {
    let studentTickets = res.data.filter( ticket => ticket.owner === id )
    dispatch({ type: GET_STUDENT_TICKETS, payload: studentTickets })
  })
}

export const updateTicket = (id, ticket) => dispatch => {
  axiosWithAuth().put(`https://devdesk-backend.herokuapp.com/api/tickets/${id}`, ticket)
  .then( res => {
    console.log(res);
    dispatch({ type: UPDATE_TICKET, payload: res.data });
  })
  .catch( err => {
    console.log( err );
  })
}