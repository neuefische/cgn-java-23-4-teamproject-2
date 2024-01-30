import {ChangeEvent, FormEvent, useState} from "react"
import {Message} from "../types/Message"
import styled from "styled-components";

type FormProps = {
    onSave: (messageToSave: Message) => void
}
export default function KontaktForm(props: FormProps) {

    const [name, setName] = useState<string>("")
    const [mail, setMail] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    function onNameChange(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function onMailChange(event: ChangeEvent<HTMLInputElement>) {
        setMail(event.target.value);
    }

    function onMessageChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setMessage(event.target.value);
    }

    function onMessageSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const messageNew: Message = {
            id: "1",
            name: name,
            mail: mail,
            message: message,
            read: false
        }
        props.onSave(messageNew)
        setName("")
        setMail("")
        setMessage("")
    }

    return (
        <StyledForm onSubmit={onMessageSubmit}>
            <StyledDiv>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" value={name} onChange={onNameChange} placeholder="please enter your name"/>
            </StyledDiv>
            <StyledDiv>
                <label htmlFor="mail">E-Mail:</label>
                <input id="mail" type="email" value={mail} onChange={onMailChange}
                       placeholder="damit wir Ihnen antworten können"/>
            </StyledDiv>
            <StyledDiv>
                <label htmlFor="message">Your Message:</label>
                <StyledTextarea id="mesage" value={message} onChange={onMessageChange}
                       placeholder="Hier können Sie z.B. angeben welches Buch und für wie lange Sie gerne ausleihen würden"/>
            </StyledDiv>
            <StyledButton type="submit">Send</StyledButton>
        </StyledForm>
    )
}
const StyledTextarea =styled.textarea`
height: 20vw;
`;
const StyledButton =styled.button`
    width: 30%;
    margin: 2vw 0 0 1vw;
    color: #ffffff;
    background-color: darkmagenta;
    border-radius: 0.975rem;
    padding: 0.55rem 1rem;
    font-size: 0.875rem;
    font-weight: 500;`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 60vw;
`;
const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1vw;
    width: 100%`;