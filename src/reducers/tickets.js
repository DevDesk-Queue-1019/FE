import { GET_TICKETS, FILTER_TICKETS, DELETE_TICKET } from "../actions";

const initialState = {
    tickets: []
}

export const tickets = (state = initialState, action) => {
    switch(action.type){
        case GET_TICKETS:
            console.log("GET_Tickets")
            return {
                ...state,
                tickets: [...action.payload]
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