import { 
    GET_TICKETS_START,
    GET_TICKETS_SUCCESS,
    GET_TICKETS_ERR,
    FILTER_TICKETS, 
    DELETE_TICKET,
    ADD_TICKET_START,
    ADD_TICKET_SUCCESS,
    ADD_TICKET_ERR,
} from "../actions";

const initialState = {
    tickets: [],
}

export const tickets = (state = initialState, action) => {
    switch(action.type){
        case GET_TICKETS_START:
            return {
                ...state,
                loading: true
            }
        case GET_TICKETS_SUCCESS:
            return {
                ...state,
                tickets: [...action.payload],
                loading: false
            }
        case GET_TICKETS_ERR:
            return {
                ...state,
                loading: false,
                err: action.payload
            }
        case ADD_TICKET_START:
            console.log(state);
            return {
                ...state,
                loading: true,
                error: ''
            }
        case ADD_TICKET_SUCCESS:
            console.log(state);
            return {
                ...state,
                tickets: action.payload,
                loading: false,
                error: ''
            }
        case ADD_TICKET_ERR:
            return {
                ...state,
                loading: false,
                error: 'Error adding ticket :('
            }
        case FILTER_TICKETS:
            let newFilteredTickets = state.tickets.filter( ticket => ticket.type === action.payload )
            return {
                ...state,
                filteredTickets: [...newFilteredTickets]
            }
        case DELETE_TICKET:
            let newTickets = state.tickets.filter( ticket => ticket.id !== action.payload )
            return {
                ...state,
                tickets: [...newTickets]
            }
        default:
            return state;
    }
}