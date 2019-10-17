import React from 'react';
import SignUpPage from './Components/SignUpPage';
import SignInPage from './Components/SignInPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SignUpPage />
        <SignInPage />
      </header>
    </div>
  );
}

export default App;
