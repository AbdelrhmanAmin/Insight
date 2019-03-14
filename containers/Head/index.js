import React, { Component } from 'react';
import Logo from '../../pics/logo.jpg';
import './style.css';
class Head extends Component {
  render() {
    return (
      <div className="Head">
        <img src={Logo} width='150px'/>
        <p>قد جائكم<span>بصائر</span> من ربكم</p>
      </div>
    );
  }
}

export default Head;
