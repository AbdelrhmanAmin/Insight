import React, { Component } from 'react';
import Head from '../../containers/Head';
import Slider from '../../containers/Slider';
import Newsbar from '../../containers/Newsbar';
import Content from '../../containers/Content';
import Levels from '../../containers/Levels';
import Button from '../../containers/Button';
import Article from '../../containers/Article';
import Pillars from '../../containers/Pillars';
import Footer from '../../containers/Footer';

class Insight extends Component {
  render() {
    return (
      <div className="App">
          <Head />
          <Newsbar />
          <Article />
          <Pillars />
          <Footer />
      </div>
    );
  }
}

export default Insight;
