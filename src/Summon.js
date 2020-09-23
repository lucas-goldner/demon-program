import React from 'react';
import styled from 'styled-components';

const SummonContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 200px;
    margin-left: -500px;
    background-color: darkblue;
`

const Circle = styled.img`
    transform: scale(0.3);
    margin-top: -500px;

`

const ActionContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 200px;
    margin-right: 300px;
`

const Summon = () => {
    return(
        <>
        <SummonContainer>
        <Circle src="./smt_logo.png"></Circle>
        <ActionContainer>
        <h1>Summon this boy</h1>
        </ActionContainer>
        </SummonContainer>
        </>
    )
}

export default Summon