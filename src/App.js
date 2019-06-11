import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Classone from './Components/Classone';
import Classtwo from './Components/Classtwo';
import Classthree from './Components/Classthree';

function App() {
  return (
    <div>
      {/* <header className="App-header">
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
      </header> */}
      <Classone title="Name & Age List"/>
      <Classtwo title="Name & City List"/>
      <Classthree title="Name & D.O.B List"/>
    </div>
  );
}

export default App;
