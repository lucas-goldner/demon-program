import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import fire from "./fire";
require('firebase/auth')


const Nav = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #2F2FA2;
    z-index:1;
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

const Login = styled.div`
    background: #111;
    position: absolute;
    top: 50px;
    z-index: 2;
    font-size: 3em;
`

const Navbar = () => {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () =>{
        setEmail("");
        setPassword("");
    }

    const clearErrors = () =>{
        setEmailError("");
        setPasswordError("");
    }

    const handleLogin = () => {
        clearErrors();
        fire.auth().signInWithEmailAndPassword(email, password).catch(err =>{
            switch(err.code){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                setEmailError(err.message);
                break;
                case "auth/wrong-password":
                    setPasswordError(err.message);
                    break;
            }
        });
    }

    const handleSignUp = () =>{
        clearErrors();
        fire.auth().createUserWithEmailAndPassword(email, password).catch(err =>{
            switch(err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                setEmailError(err.message);
                break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;
            }
        });
    }

    const handleLogout = () =>{
        fire.auth().signOut();
    }

    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if(user){
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }
        });
    }

    useEffect(() => {
        authListener();
    }, []);

    const [isLoginVisible, setIsLoginVisible] = useState(false);
    const toggleLoginVisbility = () => {setIsLoginVisible(!isLoginVisible)}
    return(
        <>
        <Nav>
            <List>
                <ListItem>Summon</ListItem>
                <ListItem>Manage</ListItem>
                <ListItem>Battle</ListItem>
                <ListItem>Contact</ListItem>
                <ListLogin onClick={toggleLoginVisbility}>Login</ListLogin>
                <Login style={{visibility: isLoginVisible ? "visible" : "hidden"}}>
                {user ? (
                    <>
                    <button onClick={handleLogout}>LogOut</button>
                    </>
                ) : (
                    <>
                    <label>Email</label> <input type="text" autoFocus required value={email} onChange={e => setEmail(e.target.value)}></input>
                    <p>{emailError}</p>
                    <label>Password</label> <input type="text" required value={password} onChange={e => setPassword(e.target.value)}></input>
                    <p>{passwordError}</p>
                    <div>
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Sign In</button>
                            <p>Don´t have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </>
                    ) : (
                        <>
                            <button onClick={handleSignUp}>Sign Up</button>
                            <p>Have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>Sign In</span></p>
                        </>
                    )}
                    </div>
                    </>
                )}
                </Login>
            </List>
        </Nav>
        </>
    )
}

export default Navbar;