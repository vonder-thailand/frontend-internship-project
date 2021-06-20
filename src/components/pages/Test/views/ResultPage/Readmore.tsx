import { useEffect, useState } from 'react';
import { BodyCard, Boxpic, DesBox, DesText, Hname, Readmore, ResultCard } from '../../shared/styles/ResultPage.styled';
import { useHistory } from 'react-router-dom';

const MockScore = require('../../mocks/result.json');

const ReadMore = () => {

    const history = useHistory();
    const idResult = window.location.search;
    const params = new URLSearchParams(idResult);
    const key = params.get('categoryID');
    const keyID =  key ?  parseInt(key): "Null";
    const resultDes = MockScore.find((data: { categoryID: number | any }) => data.categoryID === keyID);
    console.log('Result :',resultDes)

    
    useEffect(() => {
        console.log(window.location.href)
        console.log(window.location.search)
        console.log('ID :',key)
        console.log('Result :',resultDes)
    }, []);

    return (
        <>
            <div>
              <h1> {resultDes.skill}</h1>
              <h1> {resultDes.description}</h1>
            </div>
        </>
    );
};

export default ReadMore;
