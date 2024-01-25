import {Book} from "./types/Book.ts";

import {ChangeEvent, FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";

  type AddNewBookProps = {
    saveBook: (bookToSave: Book) => void
}


export default function AddNewBook(props : AddNewBookProps){

    const [title, setTitle] = useState<string>("")

    const [author, setAuthor] = useState<string>("")

    const [genre, setGenre] = useState<string>("")

    const [year, setYears] = useState<string>("")

    const [publisher, setPublisher] = useState<string>("")

    const [city, setCity] = useState<string>("")

    const [page, setPage] = useState<string>("")

    const [description, setDescription] = useState<string>("")

    const [views, setViews] = useState<string>("")


    function onTitleChange(event:ChangeEvent<HTMLInputElement>) {
            setTitle(event.target.value);
    }
    function onAuthorChange(event:ChangeEvent<HTMLInputElement>) {
            setAuthor(event.target.value);
    }

    function onGenreChange(event: ChangeEvent<HTMLInputElement>) {
            setGenre(event.target.value)
    }

    function onYearChange(event:ChangeEvent<HTMLInputElement>) {
            setYears(event.target.value);
    }

    function onPublisherChange(event: ChangeEvent<HTMLInputElement>) {
            setPublisher(event.target.value)
    }

    function onCityChange(event:ChangeEvent<HTMLInputElement>) {
            setCity(event.target.value);
    }

    function onPageChange(event: ChangeEvent<HTMLInputElement>) {
            setPage(event.target.value)
    }
    function onDescriptionChange(event: ChangeEvent<HTMLInputElement>) {
            setDescription(event.target.value)
    }
    function onViewsChange(event: ChangeEvent<HTMLInputElement>) {
            setViews(event.target.value)
    }



    const onBookSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const bookToSave: Book = {
            id : "1",
            title: title,
            author: author,
            genre: genre,
            year: year,
            publisher: publisher,
            city: city,
            page: page,
            description: description,
            views: views
        }

        props.saveBook(bookToSave)

        setTitle("")
        setAuthor("")
        setGenre("")
        setYears("")
        setPublisher("")
        setCity("")
        setPage("")
        setDescription("")
        setViews("")

    }
    const navigate = useNavigate()

     const redirect = ()=>{ navigate("/")}

          return(
              <div>

                  <p>Add Book</p>
                  <form onSubmit={onBookSubmit}>
                      <input value={title} onChange={onTitleChange} placeholder="Title"/>
                      <input value={author} onChange={onAuthorChange} placeholder={"Author"}/>
                      <input value={genre} onChange={onGenreChange} placeholder={"Genre"}/>
                      <input value={year} onChange={onYearChange} placeholder={"Year"}/>
                      <input value={publisher} onChange={onPublisherChange} placeholder={"Publisher"}/>
                      <input value={city} onChange={onCityChange} placeholder={"City"}/>
                      <input value={page} onChange={onPageChange} placeholder={"Page"}/>
                      <input value={description} onChange={onDescriptionChange} placeholder={"Description"}/>
                      <input value={views} onChange={onViewsChange} placeholder={"Views"}/>
                      <button type="submit">Save</button>
                      <br/>
                      <button type="button" onClick={redirect}>Home</button>
                  </form>
              </div>
          )

}