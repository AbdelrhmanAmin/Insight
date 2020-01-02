import React, { Component } from 'react';
import './style.css';
import Head from '../../containers/Head';
import Content from '../../containers/Content';
import Slider from '../../containers/Slider';
import Newsbar from '../../containers/Newsbar';
import Levels from '../../containers/Levels';
import Button from '../../containers/Button';
import Login from '../../containers/Login';
import Modal from '../../containers/Modal';
import Footer from '../../containers/Footer';


class Home extends Component {
  render() {
    return (
      <div className="App">
            <Head />
            {/* <Newsbar/> */}
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
