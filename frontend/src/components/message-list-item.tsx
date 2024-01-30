import {useState} from "react";
import {Message} from "../types/Message.tsx";

export default function MessageListItem({ message, handleMessageDelete }: { message: Message, handleMessageDelete: (id: string) => void }) {
    const [read, setRead] = useState<boolean>(!message.read);

    function handleReadChange() {
        setRead(!read);
        console.log(read)
        // Hier kannst du die Nachricht auf dem Server als gelesen/ungelesen markieren, z.B. mit einer entsprechenden API-Anfrage.
    }

    return (
        <li>
            <h2>{message.name}</h2>
            <p>{message.mail}</p>
            <p>{message.message}</p>
            <p>Status:</p>
            <label htmlFor={`read-${message.id}`}>gelesen</label>
            <input id={`read-${message.id}`} type="radio" onChange={handleReadChange} checked={!read} />
            <label htmlFor={`notRead-${message.id}`}>ungelesen</label>
            <input id={`notRead-${message.id}`} type="radio" onChange={handleReadChange} checked={read} />
            <button onClick={() => {handleMessageDelete(message.id)}}>Delete</button>
        </li>
    );
}