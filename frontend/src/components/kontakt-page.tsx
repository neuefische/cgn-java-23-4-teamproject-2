import {Message} from "../types/Message";
import KontaktForm from "./kontakt-form";
import MessageList from "./message-list";
import styled from "styled-components";
import {useState} from "react";

type KontaktProps = {
    messages: Message[],
    saveMessage: (messageToSave: Message) => void,
    handleMessageDelete: (id: string) => void,
    handleEdit: (message: Message) => void

}
export default function KontaktPage(props: KontaktProps) {
    const [filter, setFilter] = useState<'all' | 'read' | 'unread'>('all');

    function filterMessages(messages: Message[]): Message[] {
        switch (filter) {
            case 'all':
                return messages;
            case 'read':
                return messages.filter(message => message.read);
            case 'unread':
                return messages.filter(message => !message.read);
            default:
                return messages;
        }
    }

    return (
        <StyledDivKontakt>
            <h2>Kontakt Formular:</h2>
            <KontaktForm onSave={props.saveMessage}/>
            <StyledDiv>
                <StyledButton onClick={() => setFilter('all')}>Alle</StyledButton>
                <StyledButton onClick={() => setFilter('unread')}>Ungelesen</StyledButton>
                <StyledButton onClick={() => setFilter('read')}>Gelesen</StyledButton>

            </StyledDiv>
            <MessageList onDelete={props.handleMessageDelete} messages={filterMessages(props.messages)}
                         onChangeStatus={props.handleEdit}/>
        </StyledDivKontakt>
    )
}
const StyledButton = styled.button`
    margin: 0 1vw 0 1vw;
    padding: 1vw;
    background-color: transparent;
    color: darkmagenta;
    border-radius: 10vw;
    border: transparent solid 1px;
    font-size: 2vw;

    &:hover {
        font-size: 2.3vw;
        margin: 0 0.7vw 0 0.7vw;
        padding: 0.7vw;
    }
`;
const StyledDivKontakt = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;
const StyledDiv = styled.div`
    display: flex;
    justify-content: end;
    align-self: end;
    margin: 15vw 13vw 1vw 0;
`;