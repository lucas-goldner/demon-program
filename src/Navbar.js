import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #2F2FA2;
`

const List = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    list-style: none;
`
const ListItem = styled.button`
    margin-right: 10px;
    border-radius: 0px;
    border-style: none;
    background-color: #2F2FA2;
    color: whitesmoke;
    font-size: 1em;
`

const ListLogin = styled.button`
    border-radius: 5px;
    border-style: solid;
    background-color: #2F2FA2;
    border-color: #F64C72;
    color: #F64C72;
    font-size: 1em;
    :hover {
        background-color: #553D76;
    }
`


const Navbar = () => {
    return(
        <>
        <Nav>
            <List>
                <ListItem>Summon</ListItem>
                <ListItem>Manage</ListItem>
                <ListItem>Battle</ListItem>
                <ListItem>Contact</ListItem>
                <ListLogin>Login</ListLogin>
            </List>
        </Nav>
        </>
    )
}

export default Navbar;