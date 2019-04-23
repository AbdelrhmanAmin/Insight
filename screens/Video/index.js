import React, { Component } from 'react';
import Head from '../../containers/Head';
import Slider from '../../containers/Slider';
import Newsbar from '../../containers/Newsbar';
import Levels from '../../containers/Levels';
import Button from '../../containers/Button';
import Article from '../../containers/Article';
import Login from '../../containers/Login';
import Modal from '../../containers/Modal';
import Pillars from '../../containers/Pillars';
import Innercontent from '../../containers/Innercontent';
import Footer from '../../containers/Footer';
class Welcome extends Component {
  render(){
    return(
      <div id='div'>
            <iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/63224826&color=%23ffd800&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=true"></iframe>
                    <ul id='form-l'>
                        <li>Welcome Mate !</li>
                    </ul>
      </div>
    )
  }
}
class Video extends Component {
    render() {
        return (
        <div id='cent'>
          <Head />
          <Welcome />
          <Innercontent />
          <Footer />
        </div>
        );
    }
}

export default Video;