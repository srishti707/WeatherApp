import React from 'react'
import InfoCards from './InfoCards'

const WeatherCards = ({data}) => {
  return (
    <div className="grid grid-cols-2 w-[90%] gap-3 place-items-center">
      <InfoCards data={data.main.humidity} title="Humidity"/>
      <InfoCards data={data.main.feels_like} title="feels_like"/>
      <InfoCards data={data.visibility} title="visibility"/>
      <InfoCards data={data.wind.speed} title="wind"/>
    </div>
  )
}

export default WeatherCards
