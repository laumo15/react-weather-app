import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="overview">
          <h1>{props.data.city}</h1>
          <ul>
            <li>Last Updated: <FormattedDate date={props.data.date} /></li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div className="row currentWeather">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={props.data.imgUrl}
                alt={props.data.description}
                className="float-left"
              />
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    )
}

