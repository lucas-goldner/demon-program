import React from 'react';
import styled from 'styled-components';

const DemonPic = styled.img`
    transform: scale(0.2);
    margin-top: -470px;
    margin-left: 180px;
    position: absolute;
`

const Demon = ({isVisible}) =>{
    return(
        <>
        <DemonPic src="./Demon-Designs/Jack-Frost.png" style={{visibility: isVisible ? "visible" : "hidden"}}></DemonPic>
        </>
    )
}

export default Demon;