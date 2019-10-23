import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import DevDeskNav from './components/DevDeskNav';


function App() {
  return (
    <Router>
      <div className="App">
        <DevDeskNav />
      </div>      
    </Router>
  );
}

export default App;
