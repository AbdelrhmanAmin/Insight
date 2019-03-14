import React, { Component } from 'react';
import './style.css';
import Head from '../../containers/Head';
import Slider from '../../containers/Slider';

class Home extends Component {
  render() {
    return (
      <div className="App">
          <Head />
          <Slider />
      </div>
    );
  }
}

export default Home;
