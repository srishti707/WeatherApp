import React from 'react'
import Search from './Search'
import WeatherInfo from './WeatherInfo'
import WeatherCards from './WeatherCards'
const Weather = ({handleCity,data,getLocation,isLoading,error}) => {

  return (
    
    <div className="flex flex-col md:w-1/2 w-3/4 py-10 px-4 bg-white bg-opacity-30 backdrop-blur-sm rounded-lg justify-center items-center">
      <Search handleCity={handleCity} getLocation={getLocation} />
      <div className="flex flex-col p-5 justify-center items-center mt-7 gap-8 w-[90%]">
<WeatherInfo  data={data} isLoading={isLoading} error={error}/>
{!error && <WeatherCards data={data}/>}
    </div>
    </div>
   
   
  )
}

export default Weather
