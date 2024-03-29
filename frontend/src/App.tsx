import {useEffect, useState} from 'react'
import './App.css'
import {ViewAllBooks} from "./components/view-all-books.tsx";
import {EditBook} from "./components/edit-book.tsx";
import ViewBook from "./components/view-book.tsx";
import {Book} from "./types/Book.ts";
import axios from "axios";
import {Route, Routes, useNavigate} from "react-router-dom";
import AddNewBook from "./AddNewBook.tsx";
import NavBar from "./components/Navbar.tsx";
import NoPage from "./components/NoPage.tsx";
import Home from "./components/home.tsx";
import KontaktPage from "./components/kontakt-page.tsx";
import {Message} from './types/Message.tsx';
import Thanks from './components/thanks.tsx';
import {MessageDto} from "./types/MessageDto.tsx";


function App() {

    const [books, setBooks] = useState<Book[]>([])
    const [messages, setMessages] = useState<Message[]>([])
    useEffect(() => {
        axios.get("/api/books").then(response => setBooks(response.data))
    }, [])
    useEffect(() => {
        axios.get("/api/messages").then(response => setMessages(response.data))
    }, [])

    const navigate = useNavigate()

    function editMessage(message: Message) {
        axios.post(`/api/messages/${message.id}/update`, {...message, read: !message.read})
            .then((response) => {
                setMessages(messages.map((item) => (item.id === message.id ? response.data : item)))
            })
    }

    const addBook = (bookToSave: Book) => {
        axios.post("/api/books", bookToSave)
            .then((response) => {
                setBooks([...books, response.data])
                navigate("/books/" + response.data.id)
            }) // after save goes to details
    }
    const addMessage = (messageToSave: MessageDto) => {
        axios.post("/api/messages", messageToSave)
            .then((response) => {
                setMessages([...messages, response.data])
                navigate("/thanks")
            }) // after save goes to details
    }

    function uploadFile(file: File) {
        const formData = new FormData();
        formData.append("file", file!)
        return axios.post("/api/books/img", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })


    }

    const deleteBook = (id: string) => {
        axios.delete(`/api/books/${id}`)
            .then(response => {
                setBooks([...books.filter(book => id !== book.id)]);
                navigate("/list")
                return console.log(response.data)
            })
    }
    const deleteMessage = (id: string) => {
        axios.delete(`/api/messages/${id}`)
            .then(() => {
                setMessages([...messages.filter(message => id !== message.id)]);
                navigate("/kontakt")
            })
    }

    const editBook = (book: Book): void => {
        axios.put(`/api/books/${book.id}`, book)
            .then(response => {
                    setBooks(books.map((item) => (item.id === book.id ? response.data : item)))
                    navigate("/books/" + response.data.id)
                }
            )
    }

    return (
        <><NavBar/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/list" element={<ViewAllBooks books={books}/>}/>
                <Route path="/books/:id" element={<ViewBook handleBookDelete={deleteBook}/>}/>
                <Route path="/kontakt" element={<KontaktPage messages={messages} saveMessage={addMessage}
                                                             handleMessageDelete={deleteMessage}
                                                             handleEdit={editMessage}/>}/>
                <Route path="/books/:id/edit"
                       element={<EditBook books={books} editBook={editBook} onUpload={uploadFile}/>}/>
                <Route path={"/books/add"} element={<AddNewBook saveBook={addBook} onUpload={uploadFile}/>}/>
                <Route path={"/*"} element={<NoPage/>}/>
                <Route path={"/thanks"} element={<Thanks/>}/>
            </Routes>
        </>
    )
}

export default App
