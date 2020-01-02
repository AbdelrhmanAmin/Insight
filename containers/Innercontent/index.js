import React, { Component } from 'react';
import './style.css';
class Innercontent extends Component {
    state = {  
        arr : [
            "https://www.dailymotion.com/embed/video/x5ge5nd" ,
            "https://www.dailymotion.com/embed/video/x2mz5od" ,
            "https://www.dailymotion.com/embed/video/x3b7zr2"  ],
        currV: '',
        count: 0,
        widthx: 80,
        heightx: 50,
        widthy: 750,
        heighty: 550,
        widthz: 80,
        heightz: 50,
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
    widthX = () => {
        let x = true;
        if(x === true && this.state.widthx === 50){
            this.setState({widthx: 560,heightx:560})
            if(this.state.widthx === 560){
                x = false;
            }
        }else {
            this.setState({widthx: 50,heightx:50})
        }
    }
    widthY = () => {
        let y = true;
        if(y === true && this.state.widthy === 560){
            this.setState({widthy: 50,heighty:50})
            if(this.state.widthy === 50){
                y = false;
            }
        }else {
            this.setState({widthy: 560,heighty:560})
        }
    }
    widthZ = () => {
        let z = true;
        if(z=== true && this.state.widthz === 50){
            this.setState({widthz: 560,heightz:560})
            if(this.state.widthz === 560){
                z = false;
            }
        }else {
                this.setState({widthz:50,heightz:50})
            }
        }
    render() {
        return (
            <div id='grid-vid'>
                <ul id='vids'>
                    <li>
                        <iframe width={this.state.widthx} height={this.state.heightx} src={this.state.arr[1]}></iframe>
                        <div>
                            <p class='label-vid'>Sample video</p>
                            <p>duration time</p>
                        </div>
                    </li>
                    <li>
                        <iframe width={this.state.widthz} height={this.state.heightz} src={this.state.arr[2]}></iframe>
                        <div>
                            <p class='label-vid'>Sample video</p>
                            <p>duration time</p>
                        </div>
                    </li>
                    <li>
                        <iframe width={this.state.widthx} height={this.state.heightx} src={this.state.arr[1]}></iframe>
                        <div>
                            <p class='label-vid'>Sample video</p>
                            <p>duration time</p>
                        </div>
                    </li>
                    <li>
                        <iframe width={this.state.widthz} height={this.state.heightz} src={this.state.arr[2]}></iframe>
                        <div>
                            <p class='label-vid'>Sample video</p>
                            <p>duration time</p>
                        </div>
                    </li>
                    <li>
                        <iframe width={this.state.widthx} height={this.state.heightx} src={this.state.arr[1]}></iframe>
                        <div>
                            <p class='label-vid'>Sample video</p>
                            <p>duration time</p>
                        </div>
                    </li>
                    <li>
                        <iframe width={this.state.widthz} height={this.state.heightz} src={this.state.arr[2]}></iframe>
                        <div>
                            <p class='label-vid'>Sample video</p>
                            <p>duration time</p>
                        </div>
                    </li>
                    <li>
                        <iframe width={this.state.widthx} height={this.state.heightx} src={this.state.arr[1]}></iframe>
                        <div>
                            <p class='label-vid'>Sample video</p>
                            <p>duration time</p>
                        </div>
                    </li>
                    <li>
                        <iframe width={this.state.widthz} height={this.state.heightz} src={this.state.arr[2]}></iframe>
                        <div>
                            <p class='label-vid'>Sample video</p>
                            <p>duration time</p>
                        </div>
                    </li>
                </ul>
                <ul id='videoShow'>
                    <li>
                        <iframe width={this.state.widthy} height={this.state.heighty} src={this.state.currV}></iframe>
                    </li>
                </ul>
                
            </div>
        );
    }
}

export default Innercontent;