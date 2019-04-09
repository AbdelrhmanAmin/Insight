import React, { Component } from 'react';
import './style.css';
import Head from '../../containers/Head';
import Slider from '../../containers/Slider';
import Newsbar from '../../containers/Newsbar';
import Content from '../../containers/Content';
import Levels from '../../containers/Levels';
import Button from '../../containers/Button';
import Footer from '../../containers/Footer';

class Home extends Component {
  render() {
    return (
      <div className="App">
          <Head />
          <Newsbar />
          <Slider />
          <Content />
          <Levels />
          <Button />
          <Footer />
      </div>
    );
  }
}

export default Home;
