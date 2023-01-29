import {useEffect, useState} from "react";
import axios from "axios";
import '../styles/Weather.css';
import Time from "./Time";

const Weather = () => {

    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [degree, setDegree] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [city, setCity] = useState(null);


     const getLocation = () => {
         navigator.geolocation.getCurrentPosition((position) => {
             setLat(position.coords.latitude);
             setLng(position.coords.longitude);
         });
     }

     const getWeather = (lat, lng) => {
       axios
           .get('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lng + '&appid=eb67592e2eadde56ac6d03b0ba67c05a&units=metric&lang=fr')
           .then(function (response) {
               setDegree(response.data.main.temp.toFixed(0) + '°C');
               setImageUrl('http://openweathermap.org/img/wn/'+response.data.weather[0].icon+'@4x.png');
               setCity(response.data.name);
           });
   }

    useEffect(() => {
        getLocation();
        getWeather(lat, lng);
    }, [lat, lng])


     return (
         <div id={"weather_card"}>
             <div id="weather_text">
                 <Time />
                 <div>{city}</div>
                 <div>{degree}</div>
             </div>
             <img id="weather_img" src={imageUrl} alt={"weathering"}/>
         </div>
     )

}

export default Weather;