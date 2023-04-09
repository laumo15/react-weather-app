import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let apiKey = "0efb4fc16a9ed98dc0b3aafd8491d6ad";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    function handleResponse(response) {

    }
    
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Tue</div>
            <div className="WeatherForecast-icon"></div>
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperatures-max">19</span>
              <span className="WeatherForecast-temperatures-min">10</span>
            </div>
          </div>
        </div>
      </div>
    )
}