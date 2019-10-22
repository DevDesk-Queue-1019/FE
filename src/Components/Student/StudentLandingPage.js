import React from "react";
import { Link, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import CreateTicket from './CreateTicket';

const StudentLandingPage = () => {
    return(
        <div>
            <h1>Student Landing Page...</h1>
            <button>
                <Link to='/createticket'>New Ticket</Link>                
            </button>
            <PrivateRoute path='/createticket' component={CreateTicket} />
        </div>
    )

}

export default StudentLandingPage;
