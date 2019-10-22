import { combineReducers } from "redux";
import { tickets } from "./tickets";
import { addTicket } from "./AddTicket";

const rootReducer = combineReducers({
    tickets,
    addTicket,
})

export default rootReducer;