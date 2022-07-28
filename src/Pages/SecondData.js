import React from 'react'

import Card from 'react-bootstrap/Card';

function SecondData({name,ingredients,link,youtube,steps}) {
 


  return (
    <div>
  


 <Card style={{ width: '30rem' }}>
<Card.Img variant="top" src={link} />
<Card.Body>
  <Card.Title>{name}</Card.Title>
  <Card.Text>
   {ingredients}
   {steps}
  </Card.Text>

</Card.Body>
</Card> 

</div>


  )
}

export default SecondData

