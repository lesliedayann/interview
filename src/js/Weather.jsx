import React, {useEffect, useState} from 'react';
import {fetchWeatherApi} from './API';
import css from 'styles/Page';

const Wheater = ()=>{
    const [idLocation, setIdLocation]= useState("2367105");
    const [info, setInfo] = useState({});
    
    useEffect(()=>{
        fetchWeatherApi(idLocation).then((result)=>{
            setInfo(result)
        })
    }, []);
    

    return (
        <div>
            <h2>{info.title}, {info.parent && info.parent.title}</h2>
            <div className={css.weatherCardsContainer}>
                <div className={css.weatherCard}>
                    <p>
                    Today:
                    </p>
                        {info.consolidated_weather &&   
                            <img src={`https://www.metaweather.com/static/img/weather/${info.consolidated_weather[0].
                            weather_state_abbr}.svg`} className={css.weatherIcon}/>
                        }
                    <p>Min: {info.consolidated_weather && Math.round(info.consolidated_weather[0].min_temp)}°C</p>
                    <p>Max: {info.consolidated_weather && Math.round(info.consolidated_weather[0].max_temp)}°C</p>
                </div>
                <div className={css.weatherCard}>
                    <p>
                        Tomorrow:
                    </p>
                        {info.consolidated_weather &&   
                            <img src={`https://www.metaweather.com/static/img/weather/${info.consolidated_weather[1].
                            weather_state_abbr}.svg`} className={css.weatherIcon}/>
                        }
                    <p>Min: {info.consolidated_weather && Math.round(info.consolidated_weather[1].min_temp)}°C</p>
                    <p>Max: {info.consolidated_weather && Math.round(info.consolidated_weather[1].max_temp)}°C</p>
                </div>
            </div>
           
        </div>
    )
};
export default Wheater;