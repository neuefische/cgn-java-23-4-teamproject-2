import {Message} from "../types/Message.tsx";
import styled from "styled-components";


export default function MessageListItem({message, handleMessageDelete, handleMessageEdit}: {
    message: Message,
    handleMessageDelete: (id: string) => void,
    handleMessageEdit: (message: Message) => void
}) {

    function handleReadChange() {
        handleMessageEdit(message)
    }

    return (
        <StyledLi>
            <h2>{message.name}</h2>
            <p>{message.mail}</p>
            <p>{message.message}</p>
            <StyledDiv>
                <StyledLabel htmlFor={`read-${message.id}`} title={"message wurde gelesen"}>📨
                    <input id={`read-${message.id}`} type="radio" onChange={handleReadChange}
                           checked={message.read}/></StyledLabel>
                <StyledLabel htmlFor={`notRead-${message.id}`} title={"message ist noch ungelesen"}>✉️
                    <input id={`notRead-${message.id}`} type="radio" onChange={handleReadChange}
                           checked={!message.read}/></StyledLabel>
                <StyledButton onClick={() => {
                    handleMessageDelete(message.id)
                }}>✖️
                </StyledButton>
            </StyledDiv>
        </StyledLi>
    );
}

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 3vw;
    right: 3vw;

`;
const StyledButton = styled.button`
    border: white none;
    background-color: aliceblue;
`;

const StyledLabel = styled.label`
    cursor: pointer;
`;

const StyledLi = styled.li`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-around;
    border: solid rgb(221 221 221) 1px;
    box-shadow: 0 2px 4px 0 rgba(38, 59, 56, 0.10), 0 0 0 1.5px rgba(38, 50, 56, 0.10);
    border-radius: 0.375rem;
    padding: 1rem 2.25rem 2.25rem 2.25rem;
    margin: 2vw 2vw 1vw 0;
    height: auto;
    width: 70vw;
`;