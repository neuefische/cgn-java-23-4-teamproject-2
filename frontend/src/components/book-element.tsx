import {Book} from "../types/Book.ts";
import React from "react";

import {Link} from "react-router-dom";
import styled from "styled-components";

type BookElementProps = {
    book: Book
}

export const BookElement: React.FC<BookElementProps> = ({book}) => {

    return (
        <StyledLink to={`/books/${book.id}`}>

            <StyledDiv>
                <StyledH>{book.title}</StyledH>
                <StyledImg src={book?.img} alt={`${book?.title} book cover`}/>
            </StyledDiv>
        </StyledLink>
    );

}
const StyledH = styled.h2`
    margin: 1vw 0 0 0;
    font-size: 2vw;
    font-style: normal`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 2px 4px 0 rgba(38, 59, 56, 0.10), 0 0 0 1.5px rgba(38, 50, 56, 0.10);
    margin: .25rem;
    height: 18rem;
    width: 20rem;
    border-radius: 0.375rem;
    border-color: rgb(221 221 221);
    background-color: white;
    padding: 1.25rem;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;
const StyledImg = styled.img`
    margin: 1vw 0 1vw 0;
    height: auto;
    width: auto;
    max-width: 90%;
    max-height: 90%;
    object-fit: contain`;