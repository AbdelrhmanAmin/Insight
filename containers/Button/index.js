import React, { Component } from 'react';
import './style.css';

class Button extends Component {
    // state = {  }
    render() {
        return (
            <div id='btn'>
                <a href="/Insight"><button>Let's Start ?</button></a>
            </div>
        );
    }
}

export default Button;