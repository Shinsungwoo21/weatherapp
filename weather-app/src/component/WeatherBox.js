import React from 'react'

const WeatherBox = (props) => {
  
  let tempInCelsius;
  let tempInFah;
  
  const temperature = (temp) => {
    if (temp) {
      tempInCelsius = (temp - 273.15).toFixed(2);
      tempInFah = (tempInCelsius * 9/5 + 32).toFixed(2);
    }
    return `${tempInCelsius}°C / ${tempInFah}°F`
  }
  
  return (
    <div className="weatherBox">
      <p className='location'>{props.location}</p>
      <p className='temp'>{temperature(props.temp)}</p>
      <p className='weather'>{props.weather}</p>
    </div>
  )
}

export default WeatherBox
