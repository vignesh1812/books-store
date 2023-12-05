import axios from 'axios';
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
const Book = (props) => {
    const history=useNavigate();
    const { name, author, description, price, available, image,_id } = props.book;
    const handlerDelete=async()=>{
      await axios.delete(`http://localhost:3500/books/${_id}`)
      .then(res=>res.data)
      .then(()=>history('/'))
      .then(()=>history('/about'))
      .then(()=>history('/books'))
    }
    return (
        <div className='bordera p-1'>
            <img className='' src={image} alt={name} />
            <article>By {author}</article>
            <h3>{name}</h3>
            <p>{description}</p>
            <h2 className='mark'>Rs{price}</h2>
            <p>{available?"in stock":"out of stock"}</p>
            <div id='flexbox'>
                <button className='my-2 btn btn-success'><Link className='text-decoration-none text-white' to={`/books/${_id}`}>update</Link></button>
                <button onClick={handlerDelete} className='my-2 btn btn-danger'>Delete</button>
            </div>

        </div>
    )
}

export default Book