import {Message} from "../types/Message.tsx";
import MessageListItem from "./message-list-item.tsx";

type MessagListProps = {
    messages: Message[],
    onDelete: (id: string) => void,
    onChangeStatus:(message:Message)=>void

}
export default function MessageList(props: MessagListProps) {

function handleDelete(id:string){
    props.onDelete(id)
}

    return (
        <ul>
            {props.messages.map(message =>
                <MessageListItem key={message.id} message={message} handleMessageDelete={handleDelete} handleMessageEdit={props.onChangeStatus}/>
            )}
        </ul>
    )
}