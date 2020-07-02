import React, { Component } from 'react';
import "./WeatherList.css";
import "bootstrap/scss/bootstrap.scss";
import axios from 'axios';
import Weather from './Weather';

class WeatherList extends Component {
    state = { 
        appkey: "14bcf82a4395129027b7b7a341b60cad",
        name: "lens",
        periods: [],
    }

    handleChangeCity = (e) => {
        this.setState({
            name: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            name: this.state.name
        })
    }


    componentDidMount() {
        axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+this.state.name+'&lang=fr&units=metric&appid='+this.state.appkey)
        .then(res => {
            console.log(res.data)
            this.setState({
                periods: res.data.list,
            })
        })
    }

    render() { 
        
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
                {meteos}
            </div>
        );
    }
}
 
export default WeatherList;