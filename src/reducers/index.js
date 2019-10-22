import { combineReducers } from "redux";
import { getTickets } from "./getOpenTickets";
import { addTicket } from "./AddTicket";

const rootReducer = combineReducers({
    getTickets,
    addTicket,
})

export default rootReducer;