import axios from 'axios';
import { useEffect, useState } from 'react';
import { usePosition } from 'use-position';
import './App.css';
import HavaDurumu from './components/HavaDurumu';
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const App = () => {
  const [weather,setWeather] = useState();
  const {latitude,longitude} = usePosition();
  
  const getWeatherData = async (lat,lon) => {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const lang = navigator.language.split("-")[0];
    console.log(lang)
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=${lang}&units=metric`;
    try {
      const {data} = await axios.get(url);
      setWeather(data);
    } catch (error) {
      alert("Veri getirilirken hata oluştu")
    }
  }
  useEffect(()=>{
    latitude && longitude && getWeatherData(latitude,longitude)
  },[latitude,longitude]);
  console.log(longitude,latitude,weather)
  return(
    <div>
      <h1>Hava Durumu</h1>
      <HavaDurumu weather={weather} />
    
    </div>

  )
}
export default App;