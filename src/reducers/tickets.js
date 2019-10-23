import { 
    GET_TICKETS, 
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
        case GET_TICKETS:
            console.log("GET_Tickets")
            return {
                ...state,
                tickets: [...action.payload]
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
            console.log("filter tickets called " + action.payload);
            return state;
        case DELETE_TICKET:
            
            return state;
        default:
            return state;
    }
}