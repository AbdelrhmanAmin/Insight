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
        }, 3000);
    }
    Next = () => {
        let up = true;
        let ceiling = 3;
        if(up == true && this.state.counter < ceiling){
            this.setState( () => {this.state.counter+=1});
            if(this.state.counter < ceiling){
                up = false
            }
        }else{
            up = false;
            console.log('true?')
            this.setState( () => {this.state.counter-=3});
        }
        this.setState({ currentImg: this.state.imgs[this.state.counter]})
    }
    render() {
        return (
         <div className='Slider'>
            <img src={this.state.currentImg} />
            <div class="centered"><h1>مؤسسة بصائر</h1></div>
            <div class="centered-x"><h1>مؤسسة بصائر</h1></div>
         </div> 
        )
    }
}
export default Slider;