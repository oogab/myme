import React from 'react'

function App(props) {
    let {item, idx} = props
    const day =['월','화','수','목','금','토','일']
    console.log(item)
    return(
        <div>
            <img src={'http://openweathermap.org/img/wn/'+item.weather.icon+'@2x.png'} alt='' id='weather-icon'></img>
            <div id='min-max-temp'>
            <span style={{color:'blue'}}>{Math.ceil(item.minTemp)}°</span>/
            <span style={{color:'red'}}>{Math.ceil(item.maxTemp)}°</span>
            </div>
            <p>{item.date.getMonth()+1}/{item.date.getDate()}({day[item.date.getDay()]})</p>
        </div>
    );
}
export default App