import React, { Component } from 'react';
import './style.css';

class Levels extends Component {
    // state = {  }
    render() {
        return (
            <div>
                <ul id='contain-level'>
                    <li><a href='/1'><p>Level 1: <span>Learn about basics of Islam.</span></p></a> </li>
                    <li><a href='/2'><p>Level 2: <span>Learn about the life of the prophet.</span></p></a> </li>
                    <li><a href='/3'><p>Level 3: <span>Learn about the shariah law.</span> </p></a></li>
                    <li><a href='/4'> <p>Level 4: <span>Learn about Islam and Sociology.</span> </p> </a></li>
                    <li><a href='/5'> <p>Level 5: <span>My thoughts on Islam.</span> </p></a> </li>
                </ul>
            </div>
        );
    }
}

export default Levels;