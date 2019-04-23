import React, { Component } from 'react';
import Head from '../../containers/Head';
import Slider from '../../containers/Slider';
import Newsbar from '../../containers/Newsbar';
import Levels from '../../containers/Levels';
import Button from '../../containers/Button';
import Login from '../../containers/Login';
import Modal from '../../containers/Modal';
import Article from '../../containers/Article';
import Pillars from '../../containers/Pillars';
import Footer from '../../containers/Footer';
import './style.css';
var firstName = localStorage.getItem('firstName');
class Welcome extends Component {
  render(){
    return(
      <div id='div'>
            <iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/63224826&color=%23ffd800&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=true"></iframe>
                    <ul id='form-l'>
                        <li id='wel'>Welcome {firstName} !</li>
                    </ul>
      </div>
    )
  }
}
class Insight extends Component {
  render() {
    return (
      <div className="App">
          <Head />
          <Welcome />
          <Article />
          <Pillars />
          <Footer />
      </div>
    );
  }
}

export default Insight;
