import React, { Component } from 'react';
import './style.css';
class Innercontent extends Component {
    state = {  
        arr : [
            'https://www.youtube.com/embed/5j4CWwQdQSo',
            "https://www.youtube.com/embed/iaacJNE_is8",
            "https://www.youtube.com/embed/OfkFZowoZxA" ],
        currV: '',
        count: 0,
    }
    componentWillMount = () => {
        this.setState({currV: this.state.arr[this.state.count]})
    }
    Vext = () => {
        let up = true;
        let ceiling = 3;
        if(up == true && this.state.count < 2){
            this.setState( () => {this.state.count+=1});
            if(this.state.count < 2){
                up = false;
            }
        }else{
            up = false;
            console.log('true?')
            this.setState( () => {this.state.count = 0});
        }
        this.setState({ currV: this.state.arr[this.state.count]})
    }
    render() {
        return (
            <div>
                <ul id='videoShow'>
                    <li><iframe width="560" height="315" src={this.state.currV}></iframe></li>
                <button onClick={this.Vext} id='nextr'>Next</button>
                </ul>
            </div>
        );
    }
}

export default Innercontent;