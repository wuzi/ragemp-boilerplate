import React from 'react';
import rpc from 'rage-rpc';
import logo from './logo.svg';
import './App.css';

function App() {
  function spawn() {
    rpc.callClient('playerLogin');
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
