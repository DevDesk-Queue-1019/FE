import { GET_TICKETS, FILTER_TICKETS, DELETE_TICKET } from "../actions";

const initialState = {
    tickets: [],
    filteredTickets: []
}

export const tickets = (state = initialState, action) => {
    switch(action.type){
        case GET_TICKETS:
            return {
                ...state,
                tickets: [...action.payload]
            }
        case FILTER_TICKETS:
            let newFilteredTickets = state.tickets.filter( ticket => ticket.type === action.payload )
            return {
                ...state,
                filteredTickets: [...newFilteredTickets]
            }
        case DELETE_TICKET:
            let newTickets = state.tickets.filter( ticket => !(ticket.id === action.payload))
            return {
                ...state,
                tickets: [...newTickets]
            }
        default:
            return state;
    }
}