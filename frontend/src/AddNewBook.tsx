import {Book} from "./types/Book.ts";

import {ChangeEvent, FormEvent, useState} from "react";


  type AddNewBookProps = {
    saveBook: (bookToSave: Book) => void
}


export default function AddNewBook(props : AddNewBookProps){

    const [title, setTitle] = useState<string>("")

    const [author, setAuthor] = useState<string>("")

    const [genre, setGenre] = useState<string>("")

    const [year, setYears] = useState<number>(2024)

    const [publisher, setPublisher] = useState<string>("")

    const [city, setCity] = useState<string>("")

    const [page, setPage] = useState<number>(0)

    const [description, setDescription] = useState<string>("")

    const [views, setViews] = useState<number>(0)



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
            setYears(event.target.valueAsNumber);
    }

    function onPublisherChange(event: ChangeEvent<HTMLInputElement>) {
            setPublisher(event.target.value)
    }

    function onCityChange(event:ChangeEvent<HTMLInputElement>) {
            setCity(event.target.value);
    }

    function onPageChange(event: ChangeEvent<HTMLInputElement>) {
            setPage(event.target.valueAsNumber)
    }
    function onDescriptionChange(event: ChangeEvent<HTMLInputElement>) {
            setDescription(event.target.value)
    }
    function onViewsChange(event: ChangeEvent<HTMLInputElement>) {
            setViews(event.target.valueAsNumber)
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
        setYears(2024)
        setPublisher("")
        setCity("")
        setPage(0)
        setDescription("")
        setViews(0)

    }


          return(
              <div>

                  <p>Add Book</p>
                  <form onSubmit={onBookSubmit}>
                      <input value={title} onChange={onTitleChange} placeholder="Title"/>
                      <input value={author} onChange={onAuthorChange} placeholder={"Author"}/>
                      <input value={genre} onChange={onGenreChange} placeholder={"Genre"}/>
                      <input value={year} type={"number"} onChange={onYearChange} placeholder={"Year"}/>
                      <input value={publisher} onChange={onPublisherChange} placeholder={"Publisher"}/>
                      <input value={city} onChange={onCityChange} placeholder={"City"}/>
                      <input value={page} type={"number"} onChange={onPageChange} placeholder={"Page"}/>
                      <input value={description} onChange={onDescriptionChange} placeholder={"Description"}/>
                      <input value={views} type={"number"} onChange={onViewsChange} placeholder={"Views"}/>
                      <button type="submit">Save</button>
                  </form>
              </div>
          )

}