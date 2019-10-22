import { combineReducers } from "redux";
import { getTickets } from "./getOpenTickets";


const rootReducer = combineReducers({
    getTickets
})

export default rootReducer;