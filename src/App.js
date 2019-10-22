import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DevDeskNav from './components/DevDeskNav';
import DevDeskHome from './components/DevDeskHome';

import './App.css';

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
