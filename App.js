import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import Insight from './screens/Insight';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
          <BrowserRouter>
      <div className='body'>
        <Switch className="App">
            <Route  path='/' exact component={Home} />
            <Route  path='/Insight' exact component={Insight} />
            <Route  component={ () => {
              return(
                <div> <h1>GO BACK <a href="/" style={{color:"red"}}>HOME</a> BOY !</h1> </div>
              )
            }} />
      </Switch>
      </div>
          </BrowserRouter>
    );
  }
}

export default App;
