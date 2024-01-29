import { Message } from "../types/Message";
import KontaktForm from "./kontakt-form";
import MessageList from "./message-list";

type KontaktProps = {
    messages: Message[],
    saveMessage: (messageToSave: Message) => void,
    handleMessageDelete: (id: string) => void

}
export default function KontaktPage(props:KontaktProps){
    return(
        <>
            <KontaktForm onSave={props.saveMessage}/>
            <MessageList/>
        </>
    )
}