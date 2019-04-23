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
  state = {
    isLogin: false,
    isBlured: false,
    isSign: false,
  }
  onSign = () => {
    this.setState({
      isBlured: true,
      isSign: !this.state.isSign,
      isLogin:false,
    })
  }
  onLogin = () => {
    this.setState({
      isBlured: true,
      isLogin: !this.state.isLogin,
      isSign: false
    })
  }
  onCancel = () => {
    this.setState({
      isBlured: false,
      isLogin: false,
      isSign: false
    })
  }
  
  render() {
    const {isBlured,isLogin,isSign} = this.state;
    const {onCancel,onLogin,onSign} = this;
    const blur = isBlured ? 'blured' : null;
    return (
      <div className="App">
          <Login isLogin={isLogin} isSign={isSign} onCancel={onCancel} onSign={onSign}/>
          <Modal isLogin={isLogin} isSign={isSign} onCancel={onCancel} onLogin={onLogin}/>
            <div className={blur}>
            <Head />
            <Newsbar onLogin={onLogin} onSign={onSign}/>
            <Slider />
            <Content />
            <Levels />
            <Button />
            <Footer />
            </div>
      </div>
    );
  }
}

export default Home;
