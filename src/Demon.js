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
    null: ["Ice"],
    skills: ["Bufu", "Mabufu", "Bufula", "Mabufula", "Ice Boost", "Freeze Boost", "Marakunda", "Dodge Fire", "Me Patra", "Ice Break"]
  },
  {
    name: "Pyro-Jack", level: 5, Hp: 214, Sp: 129, Str: 12, Ma: 22, End: 11, Ag: 13, Luck:10, Exp: 28,
    img: "./Demon-Designs/Pyro-Jack.png",
    weakness: ["Fire"],
    resist: [],
    null: ["Ice"],
    skills: ["Bufu", "Mabufu", "Bufula", "Mabufula", "Ice Boost", "Freeze Boost", "Marakunda", "Dodge Fire", "Me Patra", "Ice Break"]
  },
  {
    name: "Pyro-Jack", level: 5, Hp: 214, Sp: 129, Str: 12, Ma: 22, End: 11, Ag: 13, Luck:10, Exp: 28,
    img: "./Demon-Designs/Pyro-Jack.png",
    weakness: ["Fire"],
    resist: [],
    null: ["Ice"],
    skills: ["Bufu", "Mabufu", "Bufula", "Mabufula", "Ice Boost", "Freeze Boost", "Marakunda", "Dodge Fire", "Me Patra", "Ice Break"]
  },
  {
    name: "Pyro-Jack", level: 5, Hp: 214, Sp: 129, Str: 12, Ma: 22, End: 11, Ag: 13, Luck:10, Exp: 28,
    img: "./Demon-Designs/Pyro-Jack.png",
    weakness: ["Fire"],
    resist: [],
    null: ["Ice"],
    skills: ["Bufu", "Mabufu", "Bufula", "Mabufula", "Ice Boost", "Freeze Boost", "Marakunda", "Dodge Fire", "Me Patra", "Ice Break"]
  },
  {
    name: "Pyro-Jack", level: 5, Hp: 214, Sp: 129, Str: 12, Ma: 22, End: 11, Ag: 13, Luck:10, Exp: 28,
    img: "./Demon-Designs/Pyro-Jack.png",
    weakness: ["Fire"],
    resist: [],
    null: ["Ice"],
    skills: ["Bufu", "Mabufu", "Bufula", "Mabufula", "Ice Boost", "Freeze Boost", "Marakunda", "Dodge Fire", "Me Patra", "Ice Break"]
  },
  {
    name: "Pyro-Jack", level: 5, Hp: 214, Sp: 129, Str: 12, Ma: 22, End: 11, Ag: 13, Luck:10, Exp: 28,
    img: "./Demon-Designs/Pyro-Jack.png",
    weakness: ["Fire"],
    resist: [],
    null: ["Ice"],
    skills: ["Bufu", "Mabufu", "Bufula", "Mabufula", "Ice Boost", "Freeze Boost", "Marakunda", "Dodge Fire", "Me Patra", "Ice Break"]
  },
  {
    name: "Pyro-Jack", level: 5, Hp: 214, Sp: 129, Str: 12, Ma: 22, End: 11, Ag: 13, Luck:10, Exp: 28,
    img: "./Demon-Designs/Pyro-Jack.png",
    weakness: ["Fire"],
    resist: [],
    null: ["Ice"],
    skills: ["Bufu", "Mabufu", "Bufula", "Mabufula", "Ice Boost", "Freeze Boost", "Marakunda", "Dodge Fire", "Me Patra", "Ice Break"]
  },
  {
    name: "Pyro-Jack", level: 5, Hp: 214, Sp: 129, Str: 12, Ma: 22, End: 11, Ag: 13, Luck:10, Exp: 28,
    img: "./Demon-Designs/Pyro-Jack.png",
    weakness: ["Fire"],
    resist: [],
    null: ["Ice"],
    skills: ["Bufu", "Mabufu", "Bufula", "Mabufula", "Ice Boost", "Freeze Boost", "Marakunda", "Dodge Fire", "Me Patra", "Ice Break"]
  },
  {
    name: "Pyro-Jack", level: 5, Hp: 214, Sp: 129, Str: 12, Ma: 22, End: 11, Ag: 13, Luck:10, Exp: 28,
    img: "./Demon-Designs/Pyro-Jack.png",
    weakness: ["Fire"],
    resist: [],
    null: ["Ice"],
    skills: ["Bufu", "Mabufu", "Bufula", "Mabufula", "Ice Boost", "Freeze Boost", "Marakunda", "Dodge Fire", "Me Patra", "Ice Break"]
  },
  {
    name: "Pyro-Jack", level: 5, Hp: 214, Sp: 129, Str: 12, Ma: 22, End: 11, Ag: 13, Luck:10, Exp: 28,
    img: "./Demon-Designs/Pyro-Jack.png",
    weakness: ["Fire"],
    resist: [],
    null: ["Ice"],
    skills: ["Bufu", "Mabufu", "Bufula", "Mabufula", "Ice Boost", "Freeze Boost", "Marakunda", "Dodge Fire", "Me Patra", "Ice Break"]
  },
  {
    name: "Black-Frost", level: 5, Hp: 214, Sp: 129, Str: 12, Ma: 22, End: 11, Ag: 13, Luck:10, Exp: 28,
    img: "./Demon-Designs/Black-Frost.png",
    weakness: ["Fire"],
    resist: [],
    null: ["Ice"],
    skills: ["Bufu", "Mabufu", "Bufula", "Mabufula", "Ice Boost", "Freeze Boost", "Marakunda", "Dodge Fire", "Me Patra", "Ice Break"]
  }
]

const data = [
    {
      name: 'HP', Points: 214,
    },
    {
      name: 'SP', Points: 129,
    },
    {
      name: 'Str', Points: 12,
    },
    {
      name: 'Ma', Points: 22,
    },
    {
      name: 'End', Points: 11,
    },
    {
      name: 'Ag', Points: 13,
    },
    {
      name: 'Luck', Points: 10,
    },
  ];
  
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

const Demon = ({isVisible}) =>{
    const RandomDemon = (DemonData, prop) =>{
      let randomIndex = Math.floor(Math.random()*10);
      if(prop==="img"){
        return DemonData[randomIndex].img;
      } else if(prop==="name") {
        return DemonData[randomIndex].name;
      } else if(prop==="stats") {
        let curHP = DemonData[randomIndex].Hp;
        let curSP = DemonData[randomIndex].Sp;
        let curStr = DemonData[randomIndex].Str;
        let curMa = DemonData[randomIndex].Ma;
        let curEnd = DemonData[randomIndex].End;
        let curAg = DemonData[randomIndex].Ag;
        let curLuck = DemonData[randomIndex].Luck;
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