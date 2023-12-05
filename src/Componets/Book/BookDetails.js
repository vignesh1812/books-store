import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const BookDetails = () => {
    const history=useNavigate();
    const [inputs, setInputs] = useState({})
    const [checked, setchecked] = useState()
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const sendRequest = async() =>{
        await axios.put(`http://localhost:3500/books/${id}`, {
            name: String(inputs.name),
            author: String(inputs.author),
            description: String(inputs.description),
            price: Number(inputs.price),
            image: String(inputs.image),
            available: Boolean(checked)
        }).then(res=>res.data)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(()=>history('/books'))
    }
    const id = useParams().id;
    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`http://localhost:3500/books/${id}`).then(res => (res.data)).then(data => setInputs(data.book));
        }
        fetchHandler();


    }, [id])
    return (
        <div>
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
                    <input class="form-check-input" type="checkbox" checked={checked} onChange={() => setchecked(!checked)} value="" id="formCheckDefault" />
                    <label class="form-check-label" for="formCheckDefault">available</label>
                </div>
                <button class="mt-3 btn btn-primary" type='submit'>Update book</button>
            </form>
        </div>
    )
}

export default BookDetails