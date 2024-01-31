import {Book} from "../types/Book.ts";
import React from "react";
import {BookElement} from "./book-element.tsx";


type ViewFavoriteBooksProps = {
    books: Book[]
}


export const ViewFavoriteBooks: React.FC<ViewFavoriteBooksProps> = ({books}) => {

    return (
        <div className="books">
            {books.map(book => (<BookElement key={book.id} book={book}/>))}
        </div>
    );

}
