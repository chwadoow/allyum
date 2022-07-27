import React from 'react'

function SecondData({name,ingredients,link,youtube,steps}) {
  return (
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src={link} alt={name} style={{width:'300px;height:300px'}} />
    </div>
    <div class="flip-card-back">
      <h1>{name}</h1>
      <p>{ingredients}</p>
      <p>{steps}</p>
    </div>
  </div>
</div>
  
  )
}

export default SecondData


