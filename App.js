import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import Insight from './screens/Insight';
import Video from './screens/Video';
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
                <div> <h1>This section is not available yet, please go back to <a href="/" style={{color:"red"}}>HOME</a></h1> </div>
                )
              }} />
              <Route  path='/1' exact component={Video} />
      </Switch>
      </div>
          </BrowserRouter>
    );
  }
}

export default App;
