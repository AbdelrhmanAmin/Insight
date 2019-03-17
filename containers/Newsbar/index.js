import React, { Component } from 'react';
import './style.css';
class index extends Component {
    state = {
        Hijri: []
    }
    componentDidMount = () => {
        fetch('http://api.aladhan.com/v1/gToHCalendar/3/2019')
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
            let currDate = day + '-' + monthNames[monthIndex] + '-' + year;
            console.log(currDate);
            let Hijri = res.data.map((x) => {
                if(x.gregorian.date === currDate){
                return(
                    <p>{x.hijri.year} - {x.hijri.month.en} - {x.hijri.day}</p>
                )}
            })
                            // return(
                            //     <div key={y.gregorian.date}>
                            //         <p>{y.hijri.year} - {y.hijri.month.ar}- {y.hijri.day}</p>
                            //     </div>
                            // )
            this.setState({Hijri: Hijri})
        })
    }
    render() {
        return (
            <div id='div'>
                {this.state.Hijri}
            </div>
        );
    }
}

export default index;