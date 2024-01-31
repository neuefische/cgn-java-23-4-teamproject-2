import {Book} from "../types/Book.ts";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import { CiHeart } from "react-icons/ci";


type BookElementProps = {
    book: Book
}

export const BookElement: React.FC<BookElementProps> = ({book}) => {

    const navitage= useNavigate();

    const [favorite, setFavorite]=useState<Book>()

    const [books, setBooks] = useState<Book[]>([])

    const [changeColor, setChangeColor] =useState(false)

    const onclickHeart=(event: React.MouseEvent <HTMLDivElement, MouseEvent>)=>{

         event.stopPropagation()

        // console.log("Heart")

         setChangeColor(!changeColor)

         setFavorite(book);

         setBooks(...books, Array.of(favorite));
    }


    const onboxclick=()=>{
        navitage(`/books/${book.id}`)
    }


    return (
        <div>

            {/*   <Link to={`/books/${book.id}`}>*/}

            <div onClick={onboxclick} className="book">

                <div>{book.title}</div>

                <div className={changeColor?"heartIcon heartIcon-active":"heartIcon"} onClick={onclickHeart}>
                    <CiHeart/>
                </div>

            </div>

            {/*</Link>*/}

        </div>

    );

}