import React, { Component } from 'react';
import './style.css';


class index extends Component {
    state = {
        Hijri: [],
    }
    componentDidMount = () => {
        fetch('http://api.aladhan.com/v1/gToHCalendar/4/2019')
        .then(results => {
            return results.json();
        }).then(res => {
            console.log(res.data);
            var monthNames = [
                "01", "02", "03",
                "04", "05", "06", "07",
                "08", "09", "10",
                "11", "12"
              ];
            let date = new Date();
            var day = date.getDate();
            var monthIndex = date.getMonth();
            var year = date.getFullYear();
            let currDate =  (monthIndex > 8 ? "0" + day + '-' + monthNames[monthIndex] + '-' + year : day + '-' + monthNames[monthIndex] + '-' + year);
            console.log(monthIndex);
            let Hijri = res.data.map((x) => {
                if(x.gregorian.date === currDate){
                return(
                    <strong id='par'>{x.hijri.year} - {x.hijri.month.en} - {x.hijri.day}</strong>
                )}
            })
            this.setState({Hijri: Hijri})
        })
    }

    render() {
        return (
            <div id='div'>
            <iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/63224826&color=%23ffd800&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=true"></iframe>
                {this.state.Hijri}
                    {/* <ul id='form-l'>
                        <li><button  onClick={this.props.onLogin}>Login</button></li>
                        <li><button onClick={this.props.onSign} >Sign up</button></li>
                    </ul> */}
            </div>
        );
    }
}

export default index;