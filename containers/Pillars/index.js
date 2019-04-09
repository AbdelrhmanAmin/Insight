import React, { Component } from 'react';
import './style.css';
class Pillars extends Component {
    // state = {  }
    render() {
        return (
            <div id='Pillars'>
                <ul>
                    <li>
                        <h1>Level 1</h1>
                        <a href="/1"><img src="https://placekitten.com/200/450" alt=""/></a>
                    </li>
                    <li>
                        <h1>Level 2</h1>
                        <a href="/2"><img src="https://placekitten.com/200/450" alt=""/></a>                    </li>
                    <li>
                        <h1>Level 3</h1>
                        <a href="/3"><img src="https://placekitten.com/200/450" alt=""/></a>
                    </li>
                    <li>
                        <h1>Level 4</h1>
                        <a href="/4"><img src="https://placekitten.com/200/450" alt=""/></a>                    </li>
                    <li>
                        <h1>Level 5</h1>
                        <a href="/5"><img src="https://placekitten.com/200/450" alt=""/></a>                    </li>
                </ul>
            </div>
        );
    }
}

export default Pillars;