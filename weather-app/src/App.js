import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";


function App() {

  const [weathercondition, setWeatherCondition] = useState("");
  const [location, setLocation] = useState("");
  const [temp, setTemp] = useState("")

  const [city, setCity] = useState("");

  const [loading, setLoading] = useState(true);

  const cities = ['Paris', 'New york', 'London'];
  
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      // console.log("현재 위치", lat, lon)
      getWeatherData(lat, lon);
    });
    return 
  };

  const getWeatherData = async (lat, lon) => {
    setLoading(true)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7e64059e5fb021386973b4b22948c246`);
    const jsonData = await response.json()
    console.log(jsonData);
    // console.log(jsonData.weather[0].description);
    setWeatherCondition(jsonData.weather[0].description);
    setLocation(jsonData.name)
    setTemp(jsonData.main.temp);
    setLoading(false)
  };

  const getWeatherByCity = async (city) => {
      setLoading(true)
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7e64059e5fb021386973b4b22948c246`)
      const data = await response.json()
      console.log(data);
      setWeatherCondition(data.weather[0].description);
      setLocation(data.name)
      setTemp(data.main.temp);
      setLoading(false)
  }

  useEffect(() => {
    if (city==="") {
      getCurrentLocation();
    } else {
      getWeatherByCity(city);
    }
  }, [city])



  return (
   
    <div className='main'>
      {loading ? (
        <ClipLoader color="#ff88c6" loading={loading} size={150} />
      ) : (
      <div className='main'>
        <WeatherBox weather={weathercondition} location={location} temp={temp} />
        <WeatherButton cities={cities} setCity={setCity}/> 
      </div> )}
    </div>
  );
}

export default App;
