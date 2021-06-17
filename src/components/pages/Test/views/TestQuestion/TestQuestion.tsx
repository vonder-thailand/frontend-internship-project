import React, { useContext, useEffect, useState } from 'react';
import TestAnimation from '../TestStartPage/TestAnimation';
import { TextQuestionIndex, ButtonStartOver, TextQuestion, ButtonNextQuestion, ButtonPrevQuestion, ButtonChoiceStlyed, ContainerButton } from '../../shared/styles/testQuestion.styled';
import { useHistory } from 'react-router-dom';
import { API_Test_Data } from '../../apis/test.api';
import { IQuestion, IState } from '../../shared/interface/test.interfaces';
import { SmileFilled, MehFilled, FrownFilled } from '@ant-design/icons';
import { TestProvider, TestContext } from '../TestQuestion/TestContext';

function TestQuestion() {
    //
    // ─── Set variable ───────────────────────────────────────────────────────────────────
    //
    const history = useHistory();
    const [currentQuestionDetail, setCurrentQuestionDetail] = useState<IQuestion>({ categoryID: 0, question: '', questionIndex: 0 });
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [questionList, setQuestionList] = useState<Array<IQuestion> | null>(null);
    const [value, setValue] = useState<IState>({ value: 0 });
    const { addScoreList } = useContext(TestContext);
    const [categoryID, setcategoryID] = useState<number | string>('');
    const [score, setScore] = useState<string>('');
    const buttonList = [
        { value: 3, label: 'ใช่มาก', icon: <SmileFilled style={{ fontSize: '20px', color: '#FFF566' }} /> },
        { value: 2, label: 'ใช่', icon: <SmileFilled style={{ fontSize: '20px', color: '#FFF566' }} /> },
        { value: 2, label: 'น้อย', icon: <SmileFilled style={{ fontSize: '20px', color: '#FFF566' }} /> },
        { value: 1, label: 'น้อยมาก', icon: <SmileFilled style={{ fontSize: '20px', color: '#FFF566' }} /> },
    ];

    const [arr, setArr] = useState([1]);

    useEffect(() => {
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

    function onNextQuestion(value: number) {
        console.log('[Debug]: set value == ' + value);
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
            <TextQuestionIndex>
                คำถามข้อที่ {currentQuestion + 1}/{questionList?.length}
            </TextQuestionIndex>
            <TextQuestion>{currentQuestionDetail.question}</TextQuestion>
            <ButtonStartOver onClick={() => history.push('/test')}>เริ่มใหม่</ButtonStartOver>
            {/* <ButtonPrevQuestion onClick={onPrevQuestion}> Back</ButtonPrevQuestion>
            <ButtonNextQuestion onClick={onNextQuestion}> Next</ButtonNextQuestion> */}
            {/* <div>
                    <span>ID : </span>
                    <input
                        onChange={({ target: { value } }) => {
                            setCategoryID(value);
                        }}
                    />
                </div>
                <div>
                    <input
                        onChange={({ target: { value } }) => {
                            setScore(value);
                        }}
                    />
                </div> */}
            <button
                onClick={() => {
                    addScoreList({ categoryID, score });
                }}
            >
                ADD
            </button>

            <TestAnimation />
            <ContainerButton>
                {buttonList.map((item) => {
                    return (
                        <ButtonChoiceStlyed
                            onClick={() => {
                                onNextQuestion(item.value);
                            }}
                            icon={item.icon}
                        >
                            {item.label}
                        </ButtonChoiceStlyed>
                    );
                })}
            </ContainerButton>
            <h1>Length:{arr.length}</h1>
            <h2>
                Values:
                {arr.map((i) => i + ',')}
            </h2>

            <button
                onClick={() => {
                    setArr((prevArr) => [...prevArr, prevArr.length + 1]);
                    console.log(arr);
                }}
            >
                push
            </button>

            {/* <ButtonChoice /> */}
        </div>
    );
}

export default TestQuestion;
