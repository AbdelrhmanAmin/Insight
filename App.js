import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';

class App extends Component {
  render() {
    return (
      <div className='body'>
        <div className="App">
        <Home />
      </div>
      </div>
    );
  }
}

export default App;
