import React, { Component } from 'react';
import bg1 from '../../pics/bg1.jpg';
import bg2 from '../../pics/bg2.jpg';
import bg3 from '../../pics/bg3.jpg';
import bg4 from '../../pics/bg4.jpg';
import './style.css';

class Slider extends Component {
    state = {
        imgs: [
            bg1, bg2 , bg3 ,bg4
        ],
        currentImg: bg1,
        counter: 0,
    }
    componentWillMount = () => {
        setInterval(() => {
            this.Next()
        }, 1000);
    }
    Next = () => {
        let up = true;
        let ceiling = 3;
        let increment = 1;
        if(up == true && this.state.counter < ceiling){
            this.setState( () => {this.state.counter+=increment});
            if(this.state.counter < ceiling){
                up = false
            }
        }else{
            up = false;
            this.setState( () => {this.state.counter-=increment});
        }
        this.setState({ currentImg: this.state.imgs[this.state.counter]})
    }
    render() {
        const target = <img src={this.state.currentImg} />
        return (
         <div className='Slider'>
            <p>counter: {this.state.counter} <br/>
            <span>-note: there is a litte bug here.</span>
            </p>
            {target}
         </div> 
        )
    }
}
export default Slider;