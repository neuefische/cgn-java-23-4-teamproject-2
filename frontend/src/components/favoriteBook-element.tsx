import {Book} from "../types/Book.ts";
import React from "react";
import {useNavigate} from "react-router-dom";
import { CiHeart } from "react-icons/ci";


type BookElementProps = {
    book: Book
    onclickHeart: (book:Book)=>void
    isFavorite:boolean

}

export const FavoriteBookElement: React.FC<BookElementProps> = ({book, onclickHeart, isFavorite}) => {

    const navitage= useNavigate();

    const onboxclick=()=>{
        navitage(`/books/${book.id}`)
    }

    const onheartClick=(event :React.MouseEvent <HTMLDivElement, MouseEvent>)=>{
        event.stopPropagation()
        onclickHeart(book)
    }

    return (
        <div>

            <div onClick={onboxclick} className="book">

                 <div> {book.title}</div>

                <div className={isFavorite?"heartIcon heartIcon-active":"heartIcon"} onClick={onheartClick}>
                    <CiHeart/>
                </div>

            </div>

        </div>

    );

}