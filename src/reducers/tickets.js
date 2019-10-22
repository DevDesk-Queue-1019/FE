import { GET_TICKETS } from "../actions";

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
        default:
            return state;
    }
}