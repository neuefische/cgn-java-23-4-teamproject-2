import {Book} from "../types/Book.ts";
import React, {ChangeEvent, FormEvent, useState} from "react";
import {useParams} from "react-router-dom";

type EditBookProps = {
    books: Book[],
    editBook: (book: Book) => void
}

export const EditBook: React.FC<EditBookProps> = ({books, editBook}) => {

    const {id} = useParams();

    const book: Book | undefined = books.find(book => book.id === id);

    const [title, setTitle] = useState<string>(book?.title || "")
    const [author, setAuthor] = useState<string>(book?.author || "")

    const [genre, setGenre] = useState<string>(book?.genre||"")

    const [year, setYears] = useState<number>(book?.year||2024)

    const [publisher, setPublisher] = useState<string>(book?.publisher||"")

    const [city, setCity] = useState<string>(book?.city||"")

    const [page, setPage] = useState<number>(book?.page||0)

    const [description, setDescription] = useState<string>(book?.description||"")

    const [views, setViews] = useState<number>(book?.views||0)


    const onTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setTitle(event.target.value)
    }

    const onAuthorChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setAuthor(event.target.value)
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



    const onSubmitEdit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        editBook({
            id: book?.id || "",
            title, author, genre, year, publisher, city,page,description,views
        })

    }

    return (
        <div className="book-detail">
            <div className="book">
                <form onSubmit={onSubmitEdit}>
                    <div>
                        <div>Title</div>
                        <input name="title" value={title} type="text" onChange={onTitleChange} placeholder="Title..."/>
                    </div>
                    <div>
                        <div>Author</div>
                        <input name="author" value={author} type="text" onChange={onAuthorChange}
                               placeholder="Author..."/>
                    </div>

                    <div>
                        <div>Genre</div>
                        <input name={"genre"} value={genre} type={"text"} onChange={onGenreChange}
                               placeholder="Genre..."/>
                    </div>

                    <div>
                        <div>Year</div>
                        <input name={"year"} value={year} type={"number"} onChange={onYearChange} placeholder="Year..."/>
                    </div>

                    <div>
                        <div>Publisher</div>
                        <input name={"publisher"} value={publisher} onChange={onPublisherChange}
                               placeholder="Publisher..."/>
                    </div>

                    <div>
                        <div>City</div>
                        <input name={"city"} value={city} onChange={onCityChange} placeholder="City..."/>
                    </div>

                    <div>
                        <div>Page</div>
                        <input name={"page"} value={page} type={"number"} onChange={onPageChange} placeholder="Page..."/>
                    </div>

                    <div>
                        <div>Description</div>
                        <input name={"description"} value={description} onChange={onDescriptionChange}
                               placeholder="Description..."/>
                    </div>
                    <div>
                        <div>Views</div>
                        <input name={"views"} value={views} type={"number"} onChange={onViewsChange} placeholder="Views..."/>
                    </div>

                    <button type="submit" >Edit book</button>
                </form>
            </div>
        </div>
    );

}