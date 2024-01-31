import {Book} from "../types/Book.ts";
import {BookElement} from "./book-element.tsx";
import React from "react";

type ViewAllBooksProps = {
    books: Book[]
    onclickHeart: (book:Book)=>void
    favorites:Book[]
}

export const ViewAllBooks: React.FC<ViewAllBooksProps> = ({books, onclickHeart,  favorites}) => {

    return (
        <div className="books">
            {books.map(book => (<BookElement key={book.id} book={book} favorites={favorites}  onclickHeart={onclickHeart} isFavorite={favorites.find((favBook)=> book.id===favBook.id)!==undefined} />))}
        </div>
    );

}