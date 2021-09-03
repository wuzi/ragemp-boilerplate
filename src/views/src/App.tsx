import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  function spawn() {
    if (process.env.NODE_ENV !== 'development') {
      const rpc = require('rage-rpc');
      rpc.callClient('playerLogin');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          RageMp boilerplate
        </p>
        <button className="App-link" onClick={spawn}>
          Spawn
        </button>
      </header>
    </div>
  );
}

export default App;
