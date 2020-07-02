import React, { Component } from 'react';
import WeatherList from "./WeatherList";
import "./App.css";

class App extends Component {
  state = {  }
  render() { 
    return ( 
        <div className="App">
          <WeatherList/>
        </div>
    );
  }
}
 
export default App;
