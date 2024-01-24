import {useEffect, useState} from 'react'
import './App.css'
import {ViewAllBooks} from "./components/view-all-books.tsx";
import {Book} from "./types/Book.ts";
import axios from "axios";

function App() {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    axios.get("/api/books").then(response => setBooks(response.data))
  }, [])

  return (
    <>
      <ViewAllBooks books={books} />
    </>
  )
}

export default App
