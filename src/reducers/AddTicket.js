import { 
    ADD_TICKET_START,
    ADD_TICKET_SUCCESS,
    ADD_TICKET_ERR,

} from '../actions';

// const id = parseInt(localStorage.getItem('owner'));

const initialState = {
    tickets: [],
    loading: false,
    error: '',
}

export const addTicket = (state = initialState, action) => {
    switch(action.type){
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
        default:
            return state;
    }
}