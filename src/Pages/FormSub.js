import {useState} from 'react'

function FormSub({addToRecipes}) {
    const [formData,setFormData]= useState(
        {
          name:'',
          ingredients:'',
          link:'',
          steps:''
        }
      )
  



     
      function handleSubmit(event){
        event.preventDefault()
        fetch('http://localhost:3000/meal', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((r) => r.json())
          .then(res=>addToRecipes(res)
          
          
          );
          setFormData(
            {
              title:'',
              content:'',
              author:''
            }
          )
          
      
      }
    
      function handleChange(event){
        const key = event.target.id
        setFormData({
          ...formData,
          [key]:event.target.value
        })
      }
    
  return (
    <div>
          <form onSubmit={handleSubmit}>
    <input type="text" id='name' onChange={handleChange} value={formData.name} placeholder='enter' required />
    <input type="text" id='ingredients' onChange={handleChange} value={formData.ingredients} placeholder='enter' required/>
    <input type="text" id='link' onChange={handleChange} value={formData.link} placeholder='enter'/>
    <input type='text' id='steps' onChange={handleChange} value={formData.steps} placeholder='enter' required/>
    <button type="submit">Submit</button>
  </form>
    </div>
  )
}

export default FormSub