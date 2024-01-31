import { NavLink } from "react-router-dom";

export default function Thanks(){
    return(
        <>
            <p>Danke für Ihre Nachricht!</p>
            <NavLink to={"/"}>Home</NavLink>
        </>
    )
}