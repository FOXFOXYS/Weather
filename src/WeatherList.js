import React, { Component } from 'react';
import "./WeatherList.css";
import "bootstrap/scss/bootstrap.scss";
import axios from 'axios';
import Weather from './Weather';

class WeatherList extends Component {
    state = { 
        appkey: "14bcf82a4395129027b7b7a341b60cad",
        name: "",
        periods: [],
    }

    handleChangeCity = (e) => {
        let ville = e.target.value
        this.setState({
            name: ville
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            name: this.state.name
        })
    }


    // componentDidMount() {
    //     axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+this.state.name+'&lang=fr&units=metric&appid='+this.state.appkey)
    //     .then(res => {
    //         console.log(res.data)
    //         this.setState({
    //             periods: res.data.list,
    //         })
    //     })
    // }

    render() { 

        axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+this.state.name+'&lang=fr&units=metric&appid='+this.state.appkey)
        .then(res => {
            console.log(res.data)
            this.setState({
                periods: res.data.list,
            })
        })
        
        let meteos = this.state.periods.slice(0,4).map(period => {
            return <Weather period={period}/>
        
        })

        return ( 
            <div className="weather">
                <form method="post" onSubmit={this.handleSubmit}>
                    <div className="wea"> 
                        <input type="text" className="form-control" id="city" aria-describedby="emailHelp" onChange={this.handleChangeCity} value={this.state.name}></input>
                    </div>
                </form>
                <div className="wea_city">
                    <h1>{this.state.name}</h1>
                </div>
                <div className="margin row mx-md-n1">
                 {meteos}
                </div>
                <div className="pub">
                    <div className="pub_content">
                    </div>
                </div>
                <div className="button">
                    <i class="fas fa-chevron-circle-left fa-3x"></i> <i class="fab fa-chrome fa-3x"></i>
                </div>
            </div>
        );
    }
}
 
export default WeatherList;