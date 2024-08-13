import React from 'react'
import { useState } from 'react'
import WeatherBackgrounds from '../WeatherBackgrounds';

const WeatherInfo = ({data,isLoading,error}) => {
console.log(data);
  return (
    
    <div className='flex justify-center items-center flex-col gap-3'>
    {isLoading &&<p>Loading...</p>}
    {!isLoading&& error&&<p>Enter a valid city name</p>}
    {!isLoading && !error && (
      <div>
      <h1 className="text-2xl font-bold ">{data.main.temp}</h1>
      <h2 className="font-semibold text-xl">{data.weather[0].description}</h2>
      <p className="">{WeatherBackgrounds[data.weather[0].main].text}</p>
      </div>
    )}
     
    </div>
  )
}

export default WeatherInfo
