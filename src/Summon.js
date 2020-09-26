import React, {useState} from 'react';
import styled from 'styled-components';
import Demon from './Demon';

const SummonContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 200px;
    margin-left: -500px;
    background-color: darkblue;
`

const Circle = styled.img`
    transform: scale(0.4);
    margin-top: -300px;
    margin-left: 200px;

`

const ActionContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 200px;
    margin-right: 300px;
`

const SummonTitel = styled.h1`
    font-size: 2em;
    white-space: nowrap;
    margin-top: -150px;
`

const SummonDescr = styled.h2`
    font-size: 1.1em;
`
const SummonButton = styled.button`
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    font-size: 1.5em;

    :before {
        content: '';
        background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
        position: absolute;
        top: -2px;
        left:-2px;
        background-size: 400%;
        z-index: -1;
        filter: blur(5px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        animation: glowing 20s linear infinite;
        opacity: 0;
        transition: opacity .3s ease-in-out;
        border-radius: 10px;
    }

    :active {
        color: #000
    }

    :active:after {
        background: transparent;
    }

    :hover:before {
        opacity: 1;
    }

    :after {
        z-index: -1;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: #111;
        left: 0;
        top: 0;
        border-radius: 10px;
    }

    @keyframes glowing {
        0% { background-position: 0 0; }
        50% { background-position: 400% 0; }
        100% { background-position: 0 0; }
    }
`

const Summon = () => {
    const [isVisible, setIsVisble] = useState(false);
    const [summonAble, setSummonAble] = useState(0);
    const toggleVisbility = () =>{setIsVisble(!isVisible)}
    const addOneSummon = () =>{setSummonAble(summonAble+1)}
    const SummonAction = () => {toggleVisbility();summonAble<10 ? addOneSummon() : setSummonAble(10)}
    return(
        <>
        <SummonContainer>
        <Circle src="./smt_logo.png"></Circle>
        <Demon isVisible={isVisible}randomIndex={Math.floor(Math.random()*10)}summonAble={summonAble}/>
        <ActionContainer>
        <SummonTitel>Summon Your Demons</SummonTitel>
        <SummonDescr>Click on the button below to summon 5 random demons per day</SummonDescr>
        <SummonButton onClick={summonAble < 10 ? SummonAction : ""}>Summon</SummonButton>
        </ActionContainer>
        </SummonContainer>
        </>
    )
}

export default Summon