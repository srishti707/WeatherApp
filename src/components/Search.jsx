import React from 'react'
import { FaSearchLocation } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5"; 

const Search = ({handleCity,getLocation}) => {
  let City="";
  function handleCityName(event){
    City=event.target.value;
  }
 
 
  return (
    <div className="flex w-[90%] gap-3">
      <input onChange={handleCityName} className="px-3 py-1 rounded-md w-[100%] " type="text" placeholder="Enter City Name"/>
      <button onClick={()=>handleCity(City)} className="bg-black md:px-3 px-3 py-1 text-white rounded-md"><FaSearchLocation /></button>
      <button onClick={getLocation} className="bg-black px-3 py-1 text-white rounded-md"><IoLocationSharp /></button>
    </div>
  )
}

export default Search
