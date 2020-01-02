import React, { Component } from 'react';
import './style.css';

class Levels extends Component {
    // state = {  }
    render() {
        return (
            <div>
                <ul id='contain-level'>
                    <li><p>Level 1: <span>Learn about basics of Islam.</span></p> </li>
                    <li><p>Level 2: <span>Learn about the life of the prophet.</span></p> </li>
                    <li><p>Level 3: <span>Learn about the shariah law.</span> </p></li>
                    <li><p>Level 4: <span>Learn about Islam and Sociology.</span> </p> </li>
                    <li><p>Level 5: <span>My thoughts on Islam.</span> </p></li>
                </ul>
            </div>
        );
    }
}

export default Levels;