import React from 'react';
import styled from 'styled-components';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
  } from 'recharts';

const DemonName = styled.h1`
  font-size: 1.5em;
  margin-left: -100px;
  margin-top: -50px;
`

const DemonData = [
  {
    name: "Jack Frost", level: 5, Hp: 214, Sp: 129, Str: 12, Ma: 22, End: 11, Ag: 13, Luck:10, Exp: 28,
    img: "./Demon-Designs/Jack-Frost.png",
    weakness: ["Fire"],
    resist: [],
    drain: [],
    repel: [],
    null: ["Ice"],
    skills: ["Bufu", "Mabufu", "Bufula", "Mabufula", "Ice Boost", "Freeze Boost", "Marakunda", "Dodge Fire", "Me Patra", "Ice Break"]
  },
  {
    name: "Pyro-Jack", level: 5, Hp: 165, Sp: 153, Str: 9, Ma: 27, End: 9, Ag: 14, Luck:13, Exp: 30,
    img: "./Demon-Designs/Pyro-Jack.png",
    weakness: ["Gun", "Ice", "Wind"],
    resist: [],
    repel: [],
    drain: ["Fire"],
    null: [],
    skills: ["Agi", "Rakunda", "Sharp Student", "Dazzler", "Recist Sleep", "Maragi", "Fire Wall", "Fire Boost", "Agilao", "Ressist Ice"]
  },
  {
    name: "Pixie", level: 3, Hp: 86, Sp: 124, Str: 4, Ma: 22, End: 15, Ag: 15, Luck:14, Exp: 42,
    img: "./Demon-Designs/Pixie.png",
    weakness: ["Gun", "Ice", "Curse"],
    resist: ["Elec", "Bless"],
    drain: [],
    repel: [],
    null: [],
    skills: ["Dia", "Dormina", "Magic Knack", "Patra", "Zio", "Null Sleep", "Mazio"]
  },
  {
    name: "Obariyon", level: 8, Hp: 206, Sp: 78, Str: 14, Ma: 8, End: 11, Ag: 12, Luck:7, Exp: 65,
    img: "./Demon-Designs/Obariyon.png",
    weakness: ["Elec"],
    resist: ["Phys"],
    drain: [],
    repel: [],
    null: [],
    skills: ["Sukunda", "Lucky Punch", "Sonic Punch", "Tarakuja", "Dekaja", "Silence Boost", "Muzzle Shoot"]
  },
  {
    name: "Mokoi", level: 6, Hp: 230, Sp: 78, Str: 13, Ma: 7, End: 10, Ag: 11, Luck:5, Exp: 37,
    img: "./Demon-Designs/Mokoi.png",
    weakness: ["Wind"],
    resist: ["Elec"],
    drain: [],
    repel: [],
    null: [],
    skills: ["Tarakuja", "Single Shot", "Mudo", "Resist Curse", "Guillotine", "Power Knack", "Armor Splitter"]
  },
  {
    name: "Phantom", level: 6, Hp: 83, Sp: 129, Str: 12, Ma: 22, End: 11, Ag: 13, Luck:10, Exp: 22,
    img: "./Demon-Designs/Phantom.png",
    weakness: ["Bless"],
    resist: [],
    drain: [],
    repel: [],
    null: ["Phys", "Gun", "Curse"],
    skills: ["Zio", "Mafui", "Zan", "Tentarafoo"]
  },
  {
    name: "Shadow", level: 3, Hp: 144, Sp: 66, Str: 13, Ma: 10, End: 10, Ag: 9, Luck:11, Exp: 77,
    img: "./Demon-Designs/Shadow.png",
    weakness: ["Fire"],
    resist: [],
    drain: [],
    repel: [],
    null: ["Ice"],
    skills: ["Zan", "Makafuji", "Patra", "Rakukaja", "Agilao", "Dormina", "Rakunda"]
  },
  {
    name: "Gaki", level: 4, Hp: 134, Sp: 55, Str: 10, Ma: 7, End: 9, Ag: 11, Luck:7, Exp: 19,
    img: "./Demon-Designs/Gaki.png",
    weakness: ["Fire", "Elec", "Force"],
    resist: [],
    drain: [],
    repel: [],
    null: ["Ice", "Death"],
    skills: ["Zio", "Zan", "Body Rush", "Posion Claw"]
  },
  {
    name: "Cu-Sith", level: 10, Hp: 190, Sp: 108, Str: 40, Ma: 32, End: 21, Ag: 13, Luck:5, Exp: 79,
    img: "./Demon-Designs/Cu-Sith.png",
    weakness: ["Fire"],
    resist: ["Wind"],
    drain: [],
    repel: [],
    null: [],
    skills: ["Zan", "Pulinpa", "Rakukaja", "Mazan", "Ice Wall", "Zanma", "Resist Wind", "Skull Cracker"]
  },
  {
    name: "Angel", level: 12, Hp: 212, Sp: 117, Str: 7, Ma: 17, End: 9, Ag: 12, Luck:13, Exp: 63,
    img: "./Demon-Designs/Angel.png",
    weakness: ["Curse"],
    resist: ["Elec"],
    drain: [],
    repel: [],
    null: ["Bless"],
    skills: ["Hama", "Self-Destruct", "Dia", "Zan", "Media", "Wind Boost", "Hama Boost", "Sukukaja", "Regenerate", "Patra"]
  },
  {
    name: "Black-Frost", level: 15, Hp: 300, Sp: 200, Str: 15, Ma: 35, End: 16, Ag: 18, Luck:5, Exp: 101,
    img: "./Demon-Designs/Black-Frost.png",
    weakness: ["Bless"],
    resist: ["Fire", "Curse"],
    drain: [],
    repel: [],
    null: ["Ice"],
    skills: ["Mamudo", "Mabufu", "Ice Break", "Ice Amp", "Fire Amp", "Absorb Fire", "Agidyne", "Absorb Ice", "Ice Amp", "Bufula", "Maragion", "Ice Boost"]
  }
]
  
  const getIntroOfPage = (label) => {
    if (label === 'HP') {
      return "Hit Points determine how much damage a demon can receive before fainting";
    } if (label === 'SP') {
      return "SP is a value necessary for demons to use skills";
    } if (label === 'Str') {
      return "Strength partly determines the damage the demon´s physical skills deal";
    } if (label === 'Ma') {
      return 'Magic partly determines the power of magic skills, and the power of recovery skills';
    }if (label === 'End') {
      return "Endurance partly determines how much damage the party member can reduce when they are hit by another entity's attack, whether its Physical or Magic.";
    } if (label === 'Ag') {
      return 'Agility mainly determines the turn order between entities, with faster characters acting earlier';
    } if (label === 'Luck') {
      return 'Luck affects the chances of dealing Critical hits, inflicting status ailments and inflicting instant-death skills (such as Hama and Mudo), in addition to evading those conditions when inflicted from an enemy';
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
          <p className="intro">{getIntroOfPage(label)}</p>
        </div>
      );
    }
  
    return null;
  };

  const DemonList = [];
  let DemonsCollected = false;

const DemonPic = styled.img`
    transform: scale(0.2);
    margin-top: -470px;
    margin-left: 180px;
    position: absolute;
`

const Stats = styled.div`
    margin-top: 340px;
    margin-left: 1000px;
    position: absolute;
`

const Demon = ({isVisible, randomIndex, summonAble}) =>{
    const RandomDemon = (DemonData, prop) =>{
      if(summonAble===10){
        summonAble = 10;
      }
      if(prop==="img"){
        return DemonData[randomIndex].img;
      } else if(prop==="name") {
        if(DemonList.length<10 && DemonsCollected === false){
          DemonList.push(" "+DemonData[randomIndex].name);
        } else if(DemonList.length===10 && DemonsCollected === false){
          for(let i = 0; i < DemonList.length; i++) {
            DemonList.splice(i, 1);
            DemonsCollected = true;
          }
        }
        return DemonData[randomIndex].name;
      } else if(prop==="stats") {
        let randomBuff = Math.floor(Math.random()*10);
        let randomDebuff = -1*(Math.floor(Math.random()*10));
        let curHP = DemonData[randomIndex].Hp + randomBuff + randomDebuff;
        let curSP = DemonData[randomIndex].Sp + randomBuff + randomDebuff;
        let curStr = DemonData[randomIndex].Str + randomBuff + randomDebuff;
        let curMa = DemonData[randomIndex].Ma + randomBuff + randomDebuff;
        let curEnd = DemonData[randomIndex].End + randomBuff + randomDebuff;
        let curAg = DemonData[randomIndex].Ag + randomBuff + randomDebuff;
        let curLuck = DemonData[randomIndex].Luck + randomBuff + randomDebuff;
        if(curStr<0){
          curStr = 1
        }
        if(curMa<0){
          curMa = 1
        }
        if(curEnd<0){
          curEnd = 1
        }
        if(curAg<0){
          curAg = 1
        }
        if(curLuck<0){
          curLuck = 1
        }
        let newData = [];
        return newData = [
          {
            name: 'HP', Points: curHP,
          },
          {
            name: 'SP', Points: curSP,
          },
          {
            name: 'Str', Points: curStr,
          },
          {
            name: 'Ma', Points: curMa,
          },
          {
            name: 'End', Points: curEnd,
          },
          {
            name: 'Ag', Points: curAg,
          },
          {
            name: 'Luck', Points: curLuck,
          },
        ];

      }
    }
    return(
        <>
        <DemonPic src={RandomDemon(DemonData, "img")} style={{visibility: isVisible ? "visible" : "hidden"}}></DemonPic>
        <Stats>
        <DemonName style={{visibility: isVisible ? "visible" : "hidden"}}>{RandomDemon(DemonData, "name")}</DemonName>
        <BarChart style={{visibility: isVisible ? "visible" : "hidden"}} width={350} height={200} data={RandomDemon(DemonData, "stats")}
        margin={{top: 5, right: 30, left: 20, bottom: 5,}}>
        <XAxis dataKey="name" stroke="white"/>
        <YAxis stroke="white"/>
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="Points" barSize={20} fill="#F64C72" />
      </BarChart>

      </Stats>
        </>
    )
}

export default Demon;