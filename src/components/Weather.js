import React, { useState, useEffect } from 'react';
import axios from 'axios';

const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&units=imperial&appid=${process.env.REACT_APP_WEATHER_KEY}`;

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
    <div>
      <p>{data.main.temp.toFixed(0)}</p>
      {/* <p style={{ 'text-transform': 'uppercase', textAlign: 'center' }}>
        {data.weather[0].main}
      </p> */}
      {/* <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="icon"
        style={{ width: 300 }}
      /> */}
    </div>
  );
};

export default Weather;
