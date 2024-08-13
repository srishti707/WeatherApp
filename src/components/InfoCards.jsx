import React from 'react'

const InfoCards = ({data,title}) => {
  return (
    <div className='bg-black text-white rounded-md w-[100%] md:w-[80%] flex flex-col justify-center items-center py-12 '>
      <h1 className="">{title}</h1>
      <h1 className="">{data}</h1>
    </div>
  )
}

export default InfoCards
