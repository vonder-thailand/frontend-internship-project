import { useEffect, useState } from 'react';
import { BodyCard, Boxpic, DesText, Hname, ResultCard } from '../../shared/styles/ResultPage.styled';

const MockScore = require('../../mocks/result.json')
const chartScore = Object.keys(MockScore).map(key => MockScore[key].score)
const Max = Math.max(...chartScore);

const Namemax = MockScore.filter((data: { score: number; }) => data.score === Max)

const Descrip = () => {
    useEffect(() => {
        console.log('Maxscore: ',Max)
        console.log('Name: ',Namemax)
    }, [])
    return (
        <>
        {Namemax.map((item: any) => {
            return (
                <div>
                    <ResultCard>
                        <BodyCard >
                        <Hname>{item.skill} : {item.score} คะแนน</Hname>
                        <Boxpic> <h1>Character </h1></Boxpic>
                        <DesText>{item.description}</DesText>
                        </BodyCard >
                    </ResultCard>
                </div>

                )
        })}
        
        </>
    );
};

export default Descrip