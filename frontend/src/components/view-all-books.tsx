import {Book} from "../types/Book.ts";
import {BookElement} from "./book-element.tsx";
import React from "react";
import styled from "styled-components";

type ViewAllBooksProps = {
    books: Book[]
}

export const ViewAllBooks: React.FC<ViewAllBooksProps> = ({books}) => {

    return (
        <StyledDiv>
            <h2>Meine Büche</h2>
        <div className="books">
            {books.map(book => (<BookElement key={book.id} book={book}/>))}
        </div>
        </StyledDiv>
    );

}
const StyledDiv =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;