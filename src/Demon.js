import React from 'react';
import styled from 'styled-components';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

const data = [
    {
      name: 'HP', points: 214,
    },
    {
      name: 'SP', points: 129,
    },
    {
      name: 'Str', points: 12,
    },
    {
      name: 'Ma', points: 22,
    },
    {
      name: 'End', points: 11,
    },
    {
      name: 'Ag', points: 13,
    },
    {
      name: 'Luck', points: 10,
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
    return(
        <>
        <DemonPic src="./Demon-Designs/Jack-Frost.png" style={{visibility: isVisible ? "visible" : "hidden"}}></DemonPic>
        <Stats>
        <BarChart style={{visibility: isVisible ? "visible" : "hidden"}} width={350} height={200} data={data}
        margin={{top: 5, right: 30, left: 20, bottom: 5,}}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="points" barSize={20} fill="#F64C72" />
      </BarChart>
      </Stats>
        </>
    )
}

export default Demon;