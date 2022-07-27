import React from 'react'

function SecondData({name,ingredients,link,youtube,steps}) {
  return (
    <div className='display'>
       <img src={link} alt={name} style={{width:'100%'}} />
    <h1>{name}</h1>
    {ingredients}
    {steps}
   

    </div>
  )
}

export default SecondData