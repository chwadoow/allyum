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
          name:'',
          ingredients:'',
          link:'',
          steps:''
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
    <input type="text" id='name' onChange={handleChange} value={formData.name} placeholder='enter name' required />
    <input type="text" id='ingredients' onChange={handleChange} value={formData.ingredients} placeholder='enter ingredients' required/>
    <input type="text" id='link' onChange={handleChange} value={formData.link} placeholder='enter image link'/>
    <input type='text' id='steps' onChange={handleChange} value={formData.steps} placeholder='enter steps in prose' required/>
    <button type="submit">Submit</button>
  </form>
    </div>
  )
}

export default FormSub