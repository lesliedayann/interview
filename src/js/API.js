

export async function fetchWeatherApi(id){
    const response =await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${id}/`)
    const info = await response.json()
    return info
}

// export async function fetchIconWeather(id){
//     const response =await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/static/img/weather/X.svg/`)
//     const info = await response.json()
//     return info
// }