import { Message } from "../types/Message";
import KontaktForm from "./kontakt-form";
import MessageList from "./message-list";
import styled from "styled-components";
import {useState} from "react";

type KontaktProps = {
    messages: Message[],
    saveMessage: (messageToSave: Message) => void,
    handleMessageDelete: (id: string) => void,
    handleEdit:(message:Message) =>void

}
export default function KontaktPage(props:KontaktProps){
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
    return(
        <>
        <KontaktForm onSave={props.saveMessage}/>
        <StyledDiv>
            <button onClick={() => setFilter('all')}>Alle</button>
            <button onClick={() => setFilter('read')}>Gelesen</button>
            <button onClick={() => setFilter('unread')}>Ungelesen</button>
        </StyledDiv>
    <MessageList onDelete={props.handleMessageDelete} messages={filterMessages(props.messages)} onChangeStatus={props.handleEdit}/>
</>
)
}
const StyledDiv =styled.div`
    display: flex;
    justify-content: space-around;
    margin: 1vw 0 1vw 0;
`;