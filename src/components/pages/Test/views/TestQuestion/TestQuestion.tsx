import React, { useEffect, useState } from 'react';
import TestAnimation from '../TestStartPage/TestAnimation';
import { TextHeader, ButtonStartOver, TextQuestion, ButtonNextQuestion, ButtonPrevQuestion } from '../../shared/styles/testQuestion.styled';
import { useHistory } from 'react-router-dom';
import ButtonChoice from './ButtonChoice';
import { API_Test_Data } from '../../apis/test.api';
import { IQuestion } from '../../shared/interface/test.interfaces';

function TestQuestion() {
    //
    // ─── Set variable ───────────────────────────────────────────────────────────────────
    //
    const history = useHistory();
    const [currentQuestionDetail, setCurrentQuestionDetail] = useState<IQuestion>({ categoryID: 0, question: '', questionIndex: 0 });
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [questionList, setQuestionList] = useState<Array<IQuestion> | null>(null);

    useEffect(() => {
        console.log('here');
        if (!questionList) return;
        setCurrentQuestionDetail(questionList[currentQuestion]);
    }, [currentQuestion, questionList]);

    async function getTestData() {
        const response = await API_Test_Data();
        if (response) {
            setQuestionList(response); // store all question into the hook
            const resp = response;
            setCurrentQuestionDetail(resp[currentQuestion]);
        } else {
            console.log('error');
        }
    }
    useEffect(() => {
        getTestData();
    }, []);

    function onNextQuestion() {
        if (!questionList) return;
        //questionList.length - 1 เพราะว่าของใน Array เริ่มที่ 0
        if (currentQuestion + 1 > questionList.length - 1) return;
        setCurrentQuestion(currentQuestion + 1);
    }

    function onPrevQuestion() {
        if (!questionList) return;
        if (currentQuestion - 1 < 0) return;
        setCurrentQuestion(currentQuestion - 1);
    }

    return (
        <div>
            <TextHeader>
                คำถามข้อที่ {currentQuestion + 1}/{questionList?.length}
            </TextHeader>
            <TextQuestion>{currentQuestionDetail.question}</TextQuestion>
            <ButtonStartOver onClick={() => history.push('/test')}>เริ่มใหม่</ButtonStartOver>
            <ButtonPrevQuestion onClick={onPrevQuestion}> Back</ButtonPrevQuestion>
            <ButtonNextQuestion onClick={onNextQuestion}> Next</ButtonNextQuestion>
            <TestAnimation />
            <ButtonChoice />
        </div>
    );
}

export default TestQuestion;
