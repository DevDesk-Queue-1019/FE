import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import DevDeskNav from './Components/DevDeskNav.js';

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
