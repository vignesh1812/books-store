import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Addbook = () => {
  const [checked,setchecked]=useState(false);
  const [inputs,setInputs]=useState({
    name:"",
    author:"",
    description:"",
    price:"",
    image:"",
  })
  const history=useNavigate()
  const sendRequest=async ()=>{
   await axios.post("http://localhost:3500/books",{
      name:String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      price:Number(inputs.price),
      image:String(inputs.image),
      available:Boolean(checked)
    })
  }
  const handleChange=(e)=>(
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
    // console.log(e.target.name,"value",e.target.value)
  );
  const handleSubmit=(e)=>{
    e.preventDefault()
    sendRequest().then(()=>history('/books'))
    // console.log(inputs,checked);

  }
  return (
    <form action="" id='addbookform' onSubmit={handleSubmit}>
      <label for="formControlInput" class="form-label">Name</label>
      <input type="text" value={inputs.name} name='name' onChange={handleChange} class="form-control " id='formControlInput' placeholder="book name" />
      <label for="formControlInput2" class="form-label">author</label>
      <input type="text" value={inputs.author} name='author' onChange={handleChange} class="form-control " id='formControlInput2' placeholder="author name" />
      <label for="formControlInput3" class="form-label">description</label>
      <input type="text" value={inputs.description} name='description' onChange={handleChange} class="form-control " id='formControlInput3' placeholder="write the decription" />
      <label for="formControlInput4" class="form-label">price</label>
      <input type="number" class="form-control " value={inputs.price} name='price' onChange={handleChange} id='formControlInput4' placeholder="enter your price" />
      <label for="formControlInput5" class="form-label">image</label>
      <input type="text" class="form-control " value={inputs.image} name='image' onChange={handleChange} id='formControlInput5' placeholder="enter your image path" />
      <div class="form-check mt-3">
        <input class="form-check-input" type="checkbox" checked={checked} onChange={()=>setchecked(!checked)} value="" id="formCheckDefault" />
        <label class="form-check-label" for="formCheckDefault">available</label>
      </div>
      <button class="mt-3 btn btn-primary" type='submit'>Add book</button>
    </form>
  )
}

export default Addbook