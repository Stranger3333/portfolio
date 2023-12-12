import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
function App() {
  return (
    <div className="App">

      <header className="App-header">
          <h1>Sirui Wang Portfolio</h1>
          <ButtonGroup aria-label="Basic example">
              <Button variant="outline-primary" size="lg">Home</Button>
              <Button variant="outline-primary" size="lg">Projects</Button>
              <Button variant="outline-primary" size="lg">Resume</Button>
          </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="https://drive.google.com/file/d/11L03WisY2V09jhsNozNksZjohyJ8jcKp/view?usp=sharing">Resume</a>

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
