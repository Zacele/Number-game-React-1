import React, {Component} from 'react';
import logo from './logo.svg';
import Quiz from './Component/Quiz';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Add Number game</h2>
        </div>
        <p className="App-intro">
          <Quiz/>
        </p>
      </div>
    );
  }
}

export default App;
