import './App.css';
import React,{useEffect, useState} from 'react'
import axios from 'axios'
import weatherToKorean from './weatherToKorean'
import Weather from './WeatherComponent/'

function App() {
  let [address, setAddress] = useState('')
  let [nowWeather, setNowWeather] = useState([])
  let [weathers, setWeathers] = useState([])
  let [apiDong, setApiDong] = useState('')

  const key = `${process.env.REACT_APP_GEOCODING_KEY}`
  const weatherKey=`${process.env.REACT_APP_OPENWEATHER_KEY}`
  const day =['월','화','수','목','금','토','일']
  useEffect(()=>{
    // console.log(`REACT_APP_GEOCODING_KEY = ${process.env.REACT_APP_GEOCODING_KEY}`);
  },[])
  async function getLocation(){
    const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&key='+key);
    const location = response.data.results[0].geometry.location
    const adr = response.data.results[0].address_components
    for(let item of adr){
      if(item.types.length!==3) continue;
      if(item.types[2]==='sublocality_level_2'){
        setApiDong(item.short_name)
      }
    }
    const weather = await axios.get('https://api.openweathermap.org/data/2.5/onecall?units=metric&exclude=hourly?&lat='+location.lat+'&lon='+location.lng+'&appid='+weatherKey)
    const daily = weather.data.daily
    const hourly = weather.data.hourly
    setNowWeather({
      date : new Date(daily[0].dt*1000),
      minTemp: daily[0].temp.min,
      maxTemp: daily[0].temp.max,
      nowTemp: hourly[0].temp,
      weather: daily[0].weather[0]
    })
    let tempWeathers =[]
    for(let i=1;i<6;i++){
      tempWeathers.push({
        date : new Date(daily[i].dt*1000),
        minTemp: daily[i].temp.min,
        maxTemp: daily[i].temp.max,
        weather: daily[i].weather[0]
      })
    }
    setWeathers(tempWeathers)
  }

  return (
    <div className="App">
      <div>
        <input onChange={(e)=>{setAddress(e.target.value)}}></input>
        <button onClick={getLocation}>검색</button>
      </div>
      {
        !nowWeather.date?
        null:
        <>
        <div>
        <img src={'http://openweathermap.org/img/wn/'+nowWeather.weather.icon+'@2x.png'} alt='' id='weather-icon'></img>
        <h1 id='now-temp'>{Math.ceil(nowWeather.nowTemp)}°</h1>
        <h1>{weatherToKorean(nowWeather.weather.id)}</h1>
        <div id='min-max-temp'>
          <span style={{color:'blue'}}>{Math.ceil(nowWeather.minTemp)}°</span>/
          <span style={{color:'red'}}>{Math.ceil(nowWeather.maxTemp)}°</span>
        </div>
        <p id='dong'>{apiDong}</p>
        </div>
        <div>
          {
            weathers.map((item, idx) =>(<Weather item={item} key={idx} idx={idx}></Weather>))
          }
        </div>
        </>
      }
    </div>
  );
}

export default App;
