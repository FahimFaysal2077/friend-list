import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import personData from './fakeData/data.json';

function App() {
  const [person, setPerson] = useState([]);

  useEffect(()=>{
    setPerson(personData);
    console.log(personData);
  }, [])

  return (
    <div className="App">
      <h1>Person Loaded: {person.length}</h1>
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
