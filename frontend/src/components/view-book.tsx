import {Book} from "../types/Book.ts";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";

type ViewBookProps = {
    handleBookDelete: (id: string) => void
}

export default function ViewBook(props: ViewBookProps) {

    const [book, setBooks] = useState<Book>();
    const {id} = useParams();
    useEffect(() => {
        axios.get(`/api/books/${id}`).then(response => setBooks(response.data))
    }, [])

    const handleBookDelete = (id: string | undefined) => {
        if (id) {
            props.handleBookDelete(id)
        }
    }

    return (
        <>
            <StyledDiv>
                <StyledDivInfo>
                    <StyledDivInfoImg>
                        <StyledInfo>
                            <StyledTitle>{book?.title}</StyledTitle>
                            <StyledAuthor>{book?.author}</StyledAuthor>

                            <StyledG>{book?.genre}.</StyledG>
                            <StyledH>
                                <StyledPubl><i> {book?.publisher}</i>,</StyledPubl>
                                <StyledYCP><i> {book?.year}.</i></StyledYCP>
                                {book?.city ?
                                    <StyledYCP>,<i> {book?.city}</i></StyledYCP> : null}
                                <StyledYCP><i>P. {book?.page}</i></StyledYCP>
                            </StyledH>
                        </StyledInfo>
                        <StyledImgBox>
                            <img src={book?.img} alt={`${book?.title} book Cover`} width="400vw" height="auto"/>
                        </StyledImgBox>
                    </StyledDivInfoImg>
                    <StyledDiscrDiv>
                        <StyledDiscription>{book?.description}</StyledDiscription>
                    </StyledDiscrDiv>
                    <StyledDiscrDiv>
                    <StyledViews>Wurde {book?.views} Mal angeschaut</StyledViews>
                    <Link to={`/books/${book?.id}/edit`}>
                        <button>Edit</button>
                        <button className="book-delete-button" onClick={() => handleBookDelete(book?.id)}>Delete
                        </button>
                    </Link>
                </StyledDiscrDiv>
                </StyledDivInfo>
            </StyledDiv>
        </>
    );

}
const StyledDivInfoImg = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin:0 10vw 0 10vw;
    padding:0;
    max-width: 100%;
`;
const StyledDiv = styled.div`
    margin: 2vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;
const StyledDivInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-around;
`;
const StyledTitle = styled.h1`
    font-size: 4vw;
    margin: 0 0 1vw 0;
`;
const StyledAuthor = styled.h2`
    margin: 2vw 0 0 0;
    font-size: 3vw;
    font-style: italic;
`;
const StyledInfo = styled.div`
    margin: 4vw 0 0 0;
`;
const StyledImgBox = styled.div`
    margin: 4vw 0 2vw 0;
`;
const StyledG = styled.h2`
    margin: 1vw 0 1vw 0;
    font-size: 2vw;
`;

const StyledYCP = styled.p`
    margin: 1vw 0 1vw 0;
`;
const StyledH = styled.div`
    display: flex;
    flex-direction: row;
`;
const StyledPubl = styled.p`
    margin: 1vw 0 1vw 0;
    font: italic;
`;
const StyledDiscrDiv = styled.div`
    margin: 0 10vw 0 10vw;
`;
const StyledDiscription = styled.p`
`;
const StyledViews = styled.p`
`;