import React, {useMemo} from 'react'
import './WeatherCard.css'

const WeaterCard = (weather) => {

    if(!weather) return null
    // console.log(weather)

    const {name,main,weather:weatherInfo}=weather
    const {temp, humidity}=main || {}
    const {description, icon}=(weatherInfo && weatherInfo[0]) || {}

    console.log(name, temp,humidity,description,icon)

    const iconUrl = useMemo(()=>(
        icon? `https://openweathermap.org/img/wn/03d@2x.png`:""
    ),[icon])

    return (
        <div className='card'>
            <h2>{name}</h2>
            <div className="img-wrap">
                <img src={iconUrl} alt={description} />
            </div>
            <p>{discription}</p>
            <p>🌡️ {Math.round(temp)}℃</p>
            <p>💧 {humidity}%</p>
        </div>
    )
}

export default WeatherCard