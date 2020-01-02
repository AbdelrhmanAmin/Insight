import React, { Component } from 'react';
import './style.css';
class Pillars extends Component {
    // state = {  }
    render() {
        return (
            <div id='Pillars'>
                <ul>
                    <li id='Pillar'>
                        <div id='thumb'>
                            <a href="/1"><img src="https://placekitten.com/300/300" alt=""/></a>
                        </div>
                        <div id="description">
                            <h1>Level 1</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </li>
                    <li id='Pillar'>
                        <div id='thumb'>
                            <a href="/1"><img src="https://placekitten.com/300/300" alt=""/></a>
                        </div>
                        <div id="description">
                            <h1>Level 2</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </li>
                    <li id='Pillar'>
                        <div id='thumb'>
                            <a href="/1"><img src="https://placekitten.com/300/300" alt=""/></a>
                        </div>
                        <div id="description">
                            <h1>Level 3</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </li>
                    <li id='Pillar'>
                        <div id='thumb'>
                            <a href="/1"><img src="https://placekitten.com/300/300" alt=""/></a>
                        </div>
                        <div id="description">
                            <h1>Level 4</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </li>
                    <li id='Pillar'>
                        <div id='thumb'>
                            <a href="/1"><img src="https://placekitten.com/300/300" alt=""/></a>
                        </div>
                        <div id="description">
                            <h1>Level 5</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </li>
                    
                </ul>
            </div>
        );
    }
}

export default Pillars;