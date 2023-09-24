import React from 'react';
import logo from './logo.svg';
import EventList from './components/EventList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="event-list"></div> {/* This is where you add the new div */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
