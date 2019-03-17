import React, { Component } from 'react';
import './style.css';
import Head from '../../containers/Head';
import Slider from '../../containers/Slider';
import Newsbar from '../../containers/Newsbar';

class Home extends Component {
  render() {
    return (
      <div className="App">
          <Head />
          <Newsbar />
          <Slider />
      </div>
    );
  }
}

export default Home;
