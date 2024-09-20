import React, { useState } from "react";
import DateFormatted from "./DateFormatted";
import axios from "axios";
import "./SearchWeather.css";

export default function SearchWeather(props) {
  const [city, setCity] = useState(" ");
  const [load, setLoad] = useState(false);
  const [weather, setWeather] = useState(null);

  function displayWeather(response) {
    setLoad(true);
    setWeather({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  //2nd make the event listener for onsubmit
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "3a94f3778290bfeee61278505dbbe51d";
    let celcius = "metric"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${celcius}`;
    // to check if apiUrl is working --> console.log(apiUrl);
    axios.get(apiUrl).then(displayWeather);
    //make api call
    //update weather UI
  }
  // 3rd set up the update city for onChange event
  function updateCity(event) {
    setCity(event.target.value);
    //updates the city value based on the user search
  }

  let form = // 1st build the form and add event listeners
    (
      <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-9">
            <input
                type="search"
                placeholder="Enter a city..."
                onChange={updateCity}
                className="form-control"
                autoFocus="on"
             />
            </div>
            <div className="col-3">
                <button type="submit" className="btn btn-primary w-100">Search</button>
            </div>
        </div>
      </form>
    );


  if (load) {
    return (
      <div className="SearchWeather">
        {form}
        <h1>{weather.city}</h1>
        <ul className="date-n-desciption">
          <li>
            < DateFormatted date={weather.date} />
          </li>
          <li className="text-capitalize">{weather.description}</li>
        </ul>
        <div className="row">
            <div className="col-6 temp">
                    <img 
                        src={weather.icon} 
                        alt={weather.description}
                    /> 
                        <span className="temperature">{weather.temperature}</span>
                        <span className="unit">°C</span>
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation:15%</li>
                    <li>Humidity: {weather.humidity}%</li>
                    <li>Wind: {weather.wind}km/h</li>
                </ul>
             </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
