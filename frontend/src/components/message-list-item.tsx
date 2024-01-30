import {Message} from "../types/Message.tsx";


export default function MessageListItem({ message, handleMessageDelete, handleMessageEdit }: { message: Message, handleMessageDelete: (id: string) => void, handleMessageEdit: (message:Message)=>void }) {

function handleReadChange(){
    handleMessageEdit(message)
}
    return (
        <li>
            <h2>{message.name}</h2>
            <p>{message.mail}</p>
            <p>{message.message}</p>
            <p>Status:</p>
            <label htmlFor={`read-${message.id}`}>gelesen</label>
            <input id={`read-${message.id}`} type="radio" onChange={handleReadChange} checked={message.read} />
            <label htmlFor={`notRead-${message.id}`}>ungelesen</label>
            <input id={`notRead-${message.id}`} type="radio" onChange={handleReadChange} checked={!message.read} />
            <button onClick={() => {handleMessageDelete(message.id)}}>Delete</button>
        </li>
    );
}