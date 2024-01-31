import {Book} from "../types/Book.ts";
import React from "react";
import {BookElement} from "./book-element.tsx";


type ViewFavoriteBooksProps = {
    books: Book[]
    onclickHeart: (book:Book) => void
    favorites:Book[]
}


export const ViewFavoriteBooks: React.FC<ViewFavoriteBooksProps> = ({books, onclickHeart, favorites}) => {

    return (
        <div className="books">
            {books.map(book => (<BookElement key={book.id} book={book}  onclickHeart={onclickHeart} isFavorite={favorites.find((favBook)=> book.id===favBook.id)!==undefined} />))}
        </div>
    );

}
