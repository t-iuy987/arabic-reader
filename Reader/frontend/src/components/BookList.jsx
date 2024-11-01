import React from 'react'
import { useState, useEffect } from 'react';
import bookService from '../services/bookService';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useBookContext } from './BookContext';
function BookList() {
    const [books, setBooks] = useState({});
    const [userData, setUserData] = useState('');
    const { setBookTitle } = useBookContext();
    const fetchBooks = async () => {
        setBooks(await bookService.getBooks());
    }
    useEffect(() => { // for not loading it everytime  the component is rendered
        fetchBooks();
        fetch("http://localhost:4000/api/getBooks", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData~~~~~~~~~~~~");


        setUserData(data.data);

        if (data.data == "token expired") {
          alert("Token expired login again");
          window.localStorage.clear();
          window.location.href = "/login";
        }
      });
    }, [])
    console.log(books.data);
    if (books.data != undefined) {
        console.log(books.data.data.length);
    }

    return (
        <div style={{backgroundColor:"white"}}>
            <Sidebar userData={userData}/>
            {books.data != undefined && books.data.data.length && (
                <table className='table '>
                    <thead>
                        <th scope="col">Title</th>
                        <th scope="col">Book</th>
                    </thead>
                    <tbody>
                        {books.data.data.map(book => (
                            <tr >
                                <td>{book.title}</td>
                                <td>
                                                                      
                                    <Link to={ `/displayBook/${book.book}` }
                                        onClick={() => setBookTitle(book.title)

                                }>{book.book}
                                    </Link>
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