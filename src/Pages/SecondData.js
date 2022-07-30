import React from 'react'

import Card from 'react-bootstrap/Card';

function SecondData({name,ingredients,link,youtube,steps}) {
 


  return (
    <div >
  


 <Card className="card"style={{display: 'flex',background: '#cfd9df '}}>
<div>

<container className='ratio-16x9'>
    <iframe src={youtube} title='Youtube Video player' allowFullScreen style={{float:'centre'}}></iframe>
    </container>
    </div>
<Card.Body>
  <Card.Title>{name}</Card.Title>
  <Card.Text>
   <h5> {ingredients}</h5>
   <strong>{steps}</strong> 
  </Card.Text>


</Card.Body>
</Card> 

</div>


  )
}

export default SecondData





