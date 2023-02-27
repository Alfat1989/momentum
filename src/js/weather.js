'use strict';

const cityInput=document.querySelector('.city');

const weatherIcon=document.querySelector('.weather-icon')
const temperature=document.querySelector('.temperature')
const weatherDescription=document.querySelector('.weather-description');

let city='Minsk';
cityInput.value=city;


const getWeather=async()=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=2284470f9a3d8c444201333ab421ed46&units=metric`;
     const res = await fetch(url);
     const data= await res.json();


     weatherIcon.className = 'weather-icon owf';
     weatherIcon.classList.add(`owf-${data.weather[0].id}`);
     temperature.textContent=`${data.main.temp}°C`;
     weatherDescription.textContent=data.weather[0].description;
      
}

const handleChange=(e)=>{
    if(e.target.value===''){
        city='minsk'
        cityInput.value='Minsk'
    } else {
        city=e.target.value
    }

    getWeather()
}

cityInput.addEventListener('change',handleChange);

const weather=()=>{

    getWeather()

}

export default weather