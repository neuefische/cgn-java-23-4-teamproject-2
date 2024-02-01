import {Book} from "../types/Book.ts";
import React from "react";
import {FavoriteBookElement} from "./favoriteBook-element.tsx";
import {FavoriteBook} from "../types/FavoriteBook.ts";


type ViewFavoriteBooksProps = {
    books: Book[]
    onclickHeart: (book:Book) => void
    favorites:FavoriteBook[]
}

export const ViewFavoriteBooks: React.FC<ViewFavoriteBooksProps> = ({books, onclickHeart, favorites}) => {

    return (
        <div className="books">
            {favorites.map(favBook => (<FavoriteBookElement key={favBook.id} favoriteBook={favBook} onclickHeart={onclickHeart} isFavorite={books.find((book)=> book.id===favBook.book.id)!==undefined} />))}
        </div>
    );

}
