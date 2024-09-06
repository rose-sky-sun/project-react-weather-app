import React, { useState } from "react";
import axios from "axios";

export default function SearchWeather() {
  const [city, setCity] = useState(" ");
  const [load, setLoad] = useState(false);
  const [weather, setWeather] = useState(null);

  function displayWeather(response) {
    setLoad(true);
    console.log(response.data);
    setWeather({
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
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
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
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={updateCity}
        />
        <button type="submit">Search</button>
      </form>
    );

  if (load) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature:{weather.temperature}°C</li>
          <li>Description:{weather.description}</li>
          <li>Humidity:{weather.humidity}%</li>
          <li>Wind:{weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
