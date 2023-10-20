'use strict'

navigator.geolocation.getCurrentPosition((position) => {
    climatizando(position.coords.latitude, position.coords.longitude)
})

async function climatizando(Latitude, Longitude) {
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${Latitude}&lon=${Longitude}&appid=5fc51fde5312938982e8e516b505746c&lang=pt_br`
    const response = await fetch(baseUrl)
    const data = await response.json()

    console.log(data)

    city.innerText = `${data.name}`
    temp.innerHTML = `${parseInt(data.main.temp) - 273} <span>°C</span>`
    humidity.innerHTML = `${parseInt(data.main.humidity)}% de Umidade`
    wind.innerHTML = `${parseInt(data.wind.speed)}<span>m/s</span>`
    description.innerHTML = `Tempo ${data.weather[0].description}`

    return
}

/// Mudar o estado da pagina !!!!!
// switch (json.weather[0].main) {
//   case 'Clear' :
//   case 'Clouds' :
//   case 'Rain' :
//   case 'Snow' :
//   case 'Haze' :
// }

const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const humidity = document.querySelector('.Umidade')
const wind = document.querySelector('.windSpeed')
const description = document.querySelector('.descriptrion')
