import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { WeatherContainer, Temp, City } from './WeatherStyles';

const url = `https://api.openweathermap.org/data/2.5/weather?q=fukui&units=imperial&appid=${process.env.REACT_APP_WEATHER_KEY}`;

const Weather = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  if (!data) return null;

  return (
    <WeatherContainer>
      <Temp>{data.main.temp.toFixed(0)}&#176;</Temp>
      <Temp>
        {' '}
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="icon"
          style={{ width: 100 }}
        />
      </Temp>

      <City>Fukui, JA</City>
      {/* <p style={{ 'text-transform': 'uppercase', textAlign: 'center' }}>
        {data.weather[0].main}
      </p> */}
      {/* <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="icon"
        style={{ width: 300 }}
      /> */}
    </WeatherContainer>
  );
};

export default Weather;
