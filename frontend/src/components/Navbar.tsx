import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

export default function NavBar() {
const [user, setUser] = useState("")
    const login = () =>{
        const host = window.location.host === 'localhost:5173' ? 'http://localhost:8080' : window.location.origin
        window.open(host + '/oauth2/authorization/github', '_self')

}
    useEffect(() => {
        loadUser()
    }, []);
    function loadUser () {
        axios.get("/api/users/me")
            .then((response) => {
                console.log(response)
                setUser(response.data)
            })
    }



    return (

        <div>
            <StyledNav>
                {user !== "anonymousUser" && user !== undefined ? <button onClick={login} title={"LOGOUT"}>{user}</button>:
                <button onClick={login}>Login</button>}
                <NavContainer>

                    <FlexContainer>
                        <NavLinksContainer>
                            <NavLinkAdd to="/books/add"> + New Book</NavLinkAdd>
                            <NavLinks to="/">Home</NavLinks>
                            <NavLinks to="/list">List of Books</NavLinks>
                            <NavLinks to="/favorites">Favorites</NavLinks>
                            <NavLinks to="/kontakt">Kontakt</NavLinks>
                        </NavLinksContainer>
                    </FlexContainer>
                </NavContainer>
            </StyledNav>
            <StyledHeader>
                <HeaderContainer>
                    <Heading>Home Library</Heading>
                </HeaderContainer>
            </StyledHeader>
        </div>
    )
}


const StyledNav = styled.nav`
    background-color: #4b5563;
`;

const NavContainer = styled.div`
    max-width: 75rem;
    padding-left: 1rem;
    padding-right: 2rem;
    margin: 0 auto;
    display: flex;
    justify-content: end;
`;

const FlexContainer = styled.div`
    display: flex;
    height: 4rem;
    align-items: center;
    justify-content: space-between;
`;

const NavLinksContainer = styled.div`
    
`;

const NavLinks = styled(NavLink)`
    color: #ffffff;
    background-color: #4b5563;
    width: 10vw;
    border-radius: 0.375rem;
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    margin-right: 1rem;
`;

const StyledHeader = styled.header`
    background-color: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
`;

const HeaderContainer = styled.div`
    max-width: 75rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: 0 auto;
`;

const Heading = styled.h1`
    font-size: 3vw;
    font-weight: 700;
    line-height: 2.25rem;
    color: #1a202c;
`;
const NavLinkAdd = styled(NavLinks)`
    color: #ffffff;
    background-color: darkmagenta;
    border-radius: 0.975rem;
    padding: 0.55rem 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    margin-right: 1rem;
`;
