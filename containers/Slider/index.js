import React, { Component } from 'react';
import bg1 from '../../pics/bg1.jpg';
import bg2 from '../../pics/bg2.jpg';
import bg3 from '../../pics/bg3.jpg';
import './style.css';

class Slider extends Component {
    state = {
        imgs: [
            bg1, bg2 , bg3
        ],
        currentImg: ''
    }
    componentWillMount = () => {
        let arr = this.state.imgs;
        const func = () => {
        for(let i = 0 ;i < arr.length;i++){
            if(i < arr.length -1){
                i++;
            }else {
                i = 0;
            }
            this.setState({currentImg:arr[i]})
        }}
        setTimeout(func(),1000);
        }
    render() {
        const target = <img src={this.state.currentImg} />
        return (
         <div className='Slider'>
            {target}
         </div> 
        )
    }
}
export default Slider;