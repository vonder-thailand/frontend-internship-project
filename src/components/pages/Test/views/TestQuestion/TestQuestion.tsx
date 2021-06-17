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
    // const { addScoreList } = useContext(TestContext);
    const [id, setId] = useState<number | string>('');
    const [name, setName] = useState<string>('');

    // const { setValueTest } = useTest();

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
            <TestProvider>
                <TextQuestionIndex>
                    คำถามข้อที่ {currentQuestion + 1}/{questionList?.length}
                </TextQuestionIndex>
                <TextQuestion>{currentQuestionDetail.question}</TextQuestion>
                <ButtonStartOver onClick={() => history.push('/test')}>เริ่มใหม่</ButtonStartOver>
                {/* <ButtonPrevQuestion onClick={onPrevQuestion}> Back</ButtonPrevQuestion>
            <ButtonNextQuestion onClick={onNextQuestion}> Next</ButtonNextQuestion> */}

                <TestAnimation />
                <ContainerButton>
                    <ButtonChoiceStlyed onClick={onNextQuestion.bind(null, 0)} icon={<SmileFilled style={{ fontSize: '20px', color: '#FFF566' }} />}>
                        ใช่มาก
                    </ButtonChoiceStlyed>
                    <ButtonChoiceStlyed onClick={onNextQuestion.bind(null, 2)} icon={<MehFilled style={{ fontSize: '20px', paddingRight: '25px', color: '#FFF566' }} />}>
                        ใช่
                    </ButtonChoiceStlyed>
                    <ButtonChoiceStlyed onClick={onNextQuestion.bind(null, 1)} icon={<MehFilled style={{ fontSize: '20px', paddingRight: '10px', color: '#FFF566' }} />}>
                        น้อย
                    </ButtonChoiceStlyed>
                    <ButtonChoiceStlyed onClick={onNextQuestion.bind(null, 0)} icon={<FrownFilled style={{ fontSize: '20px', color: '#FFF566' }} />}>
                        ไม่เลย
                    </ButtonChoiceStlyed>
                </ContainerButton>
                {/* <ButtonChoice /> */}
            </TestProvider>
        </div>
    );
}

export default TestQuestion;
