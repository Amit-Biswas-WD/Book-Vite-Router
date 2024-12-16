import { useEffect } from "react"
import { useState } from "react"
import Book from "../Book/Book"

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch("./fakedata.json")
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
  return (
    <div>
        <h2 className="text-4xl text-center font-bold my-8">Books</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {
            books.map(book => <Book key={book.bookId} book={book} /> )
        }
        </div>
    </div>
  )
}

export default Books