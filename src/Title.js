import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';

const Titel = styled.h1`
    font-size: 5em;
    text-decoration: underline;
    z-index:1;
`
const SubTitel = styled.h2`
    margin-top: -60px;
    font-size: 2em;
`
const Title = () =>{

    const [scrollPosition, setSrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);    

    const TitelStyle = {
        position: scrollPosition > 20 ? "fixed" : "static",
        fontSize: scrollPosition > 20 ? "3em" : "5em"
    }

    const Container = {
        marginLeft: scrollPosition > 20 ? "450px" : "0px",
        marginTop: scrollPosition > 20 ? "20px" : "200px",
    }

    return(
        <>
        <div style={Container}>
        <Titel style={TitelStyle}>Demon Program</Titel>
        </div>
        <SubTitel>by Lucas Goldner</SubTitel>
        </>
    )
}

export default Title;