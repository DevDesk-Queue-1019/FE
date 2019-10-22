import { GET_TICKETS } from "../actions";

const initialState = {
    tickets: [],
    loading: true
}

export const getTickets = (state = initialState, action) => {
    switch(action.type){
        case GET_TICKETS:
            return {
                tickets: [...action.payload],
                loading: false
            }
        default:
            return state;
    }
}