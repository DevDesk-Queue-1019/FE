import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DevDeskNav from './Components/DevDeskNav';
import StudentTicketList from './Components/Student/StudentTicketList';


function App() {
  return (
    <Router>
      <div className="App">
        <DevDeskNav />
        {/* <Route exact path="/" component={DevDeskHome} /> */}
      </div>      
    </Router>
  );
}

export default App;
