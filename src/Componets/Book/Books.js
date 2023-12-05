import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Book from './Book';
const URL = 'http://localhost:3500/books';
const fetchHandler = async () => {
    return await axios.get(URL).then(res => res.data)
}
const Books = () => {
    const [books, setbooks] = useState();
    useEffect(() => {
        fetchHandler().then((data)=>setbooks(data.books))
    },[]);
    return (
        <div>
                    <ul>
                        {  
                        books?books.map((book,i)=>(
                            <div key={i}>
                               <Book book={book}/>
                            </div>
                        )):(<h1>No Books Available</h1>)
                        }
                    </ul>
        </div>
    )
}

export default Books