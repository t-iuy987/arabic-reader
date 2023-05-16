import React from 'react'
import { useState, useEffect } from 'react';
import bookService from '../services/bookService';
import { Link } from 'react-router-dom';

function BookList() {
    const [books, setBooks] = useState({});
    const fetchBooks = async () => {
        setBooks(await bookService.getBooks());
    }
    useEffect(() => { // for not loading it everytime the component is rendered
        fetchBooks();
    }, [])
    console.log(books.data);
    if (books.data != undefined) {
        console.log(books.data.data.length);
    }

    return (
        <div>
            BookList
            {books.data != undefined && books.data.data.length && (
                <table className='table '>
                    <thead>
                        <th scope="col">Date</th>
                        <th scope="col">Book</th>
                    </thead>
                    <tbody>
                        {books.data.data.map(book => (
                            <tr >
                                <td>{book.date}</td>
                                <td>
                                    <Link to={`/displayBook/${book.book}`}>{book.book}</Link>
                                    {/* <a href={"http://localhost:3000/api/bookFiles/" + book.book} >{book.book}</a> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
            }
        </div>
    )
}

export default BookList;