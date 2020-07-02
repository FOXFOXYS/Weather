import React, { Component } from 'react';

class Weather extends Component {
    state = {  }
    render() { 

        let weath = this.props.period;

        let icon = ('http://openweathermap.org/img/wn/'+weath.weather[0].icon+'@2x.png');

        return ( 
            <div>
                <div className="wea_illu">
                    <img className="wea_images" src={icon} alt="weather image"/>
                </div>
                <div className="wea_desc">
                    <small>{weath.dt_txt}</small> <br/>
                    <small>{weath.main.temp}°</small> <br/>
                    <small>{weath.weather[0].description}</small>

                </div>
            </div>
        );
    }
}
 
export default Weather;