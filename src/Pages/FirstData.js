import {useState,useEffect} from 'react'
import SecondData from './SecondData'
function FirstData() {
  const[data,setData]=useState([])
    
  useEffect(()=>{
   fetch('http://localhost:3000/meal')
   .then((res)=>res.json())
   .then((res)=>setData(res))


  },[])
  const secondBreak =  data.map((element)=>(
    <SecondData
    key={element['id']}
    name={element['name']}
    ingredients={element['ingredients']}
    link={element['link']}
    youtube={element['strYoutube']}
    steps={element['steps']}
    
    
    />
  )
   
  )
 console.log(data[0])
return (
    <div>

{secondBreak}
    </div>
  )
}

export default FirstData