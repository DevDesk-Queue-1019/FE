import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import App from './App';
import StudentLandingPage from "./components/StudentLandingPage";
import HelperLandingPage from "./components/HelperLandingPage";

const PrivateRoute = ({ component: Component }) => (
    <Route render={props => 
        localStorage.getItem("token") ?
        (<Component {...props} />) : 
        (<Redirect to="/login" />)
    }
    />
);


const createRoutes = () => (
    <Router>
      <Route exact path="/" component={App}/>
      <Route exact path="/student" component={StudentLandingPage}/>
      <Route exact path="/helper" component={HelperLandingPage}/>
    </Router>
);

export default createRoutes;