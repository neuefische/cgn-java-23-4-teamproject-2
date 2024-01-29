import {ChangeEvent, FormEvent, useState } from "react"
import { Message } from "../types/Message"
type FormProps={
    onSave:(messageToSave: Message) => void
}
export default function KontaktForm(props:FormProps){

    const [name, setName] = useState<string>("")
    const [mail, setMail] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    function onNameChange(event:ChangeEvent<HTMLInputElement>){
        setName(event.target.value);
    }
    function onMailChange(event:ChangeEvent<HTMLInputElement>){
        setMail(event.target.value);
    }
    function onMessageChange(event:ChangeEvent<HTMLInputElement>){
        setMessage(event.target.value);
    }

        function onMessageSubmit(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        const messageNew: Message ={
            id: "1",
            name: name,
            mail:mail,
            message:message,
            read: false
        }
        props.onSave(messageNew)
            setName("")
            setMail("")
            setMessage("")
    }

    return(
        <form onSubmit={onMessageSubmit}>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" value={name} onChange={onNameChange} placeholder="please enter your name"/>
            <label htmlFor="mail">E-Mail:</label>
            <input id="mail" type="email" value={mail} onChange={onMailChange} placeholder="damit wir Ihnen antworten können"/>
            <label htmlFor="message">Your Message:</label>
            <input id="mesage" type="text" value={message} onChange={onMessageChange} placeholder="Hier können Sie z.B. angeben welches Buch und für wie lange Sie gerne ausleihen würden"/>
            <button type="submit">Send</button>
        </form>
    )
}