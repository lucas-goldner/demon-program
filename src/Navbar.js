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
    @media (max-width: 740px) {
        margin-left: -40px;
      }
`
const ListItem = styled.button`
    margin-right: 10px;
    border-radius: 0px;
    border-style: none;
    background-color: #2F2FA2;
    color: whitesmoke;
    font-size: 1em;
    @media (max-width: 740px) {
        text-algin: center;
        margin-right: 0px;
      }
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
    border-color: #553D67;
    border-style: solid;
    position: absolute;
    background: #F64C72;
    color: #553D67;
    top: 55px;
    left: 320px;
    z-index: 2;
    font-size: 1em;
    display: flex;
    flex-direction: column;
    @media (max-width: 740px) {
        left: 180px;
      }
`

const InputFields = styled.input`
    size = 10;
`

const LoginError = styled.p`
    font-size: 0.5em;
    color: #2F2FA2;
`

const LoginButton = styled.button`
    color: white;
    background-color: #553D67; 
    border-radius: 10px;
    border-style: none;
`

const LoginHint = styled.p`
    font-size: 0.8em;
`

const LoginSpan = styled.span`
    color: #2F2FA2;
    text-decoration: underline;
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
                    <label>Email</label> <InputFields type="text" autoFocus required value={email} onChange={e => setEmail(e.target.value)}></InputFields>
                    <LoginError>{emailError}</LoginError>
                    <label>Password</label> <InputFields type="text" required value={password} onChange={e => setPassword(e.target.value)}></InputFields>
                    <LoginError>{passwordError}</LoginError>
                    <div>
                    {hasAccount ? (
                        <>
                            <LoginButton onClick={handleLogin}>Sign In</LoginButton>
                            <LoginHint>Don´t have an account ? <LoginSpan onClick={()=>setHasAccount(!hasAccount)}>Sign Up</LoginSpan></LoginHint>
                        </>
                    ) : (
                        <>
                            <LoginButton onClick={handleSignUp}>Sign Up</LoginButton>
                            <LoginHint>Have an account ? <LoginSpan onClick={()=>setHasAccount(!hasAccount)}>Sign In</LoginSpan></LoginHint>
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