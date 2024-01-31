import {Book} from "../types/Book.ts";
import React from "react";
import {FavoriteBookElement} from "./favoriteBook-element.tsx";


type ViewFavoriteBooksProps = {
    books: Book[]
    onclickHeart: (book:Book) => void
    favorites:Book[]
}

export const ViewFavoriteBooks: React.FC<ViewFavoriteBooksProps> = ({books, onclickHeart, favorites}) => {

    return (
        <div className="books">
            {favorites.map(favBook => (<FavoriteBookElement key={favBook.id} book={favBook} onclickHeart={onclickHeart} isFavorite={books.find((book)=> book.id===favBook.id)!==undefined} />))}
        </div>
    );

}
