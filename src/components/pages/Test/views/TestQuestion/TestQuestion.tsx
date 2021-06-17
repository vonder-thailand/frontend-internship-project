import { useEffect, useState } from 'react';
import TestAnimation from '../TestStartPage/TestAnimation';
import { TextQuestionIndex, ButtonStartOver, TextQuestion, ButtonChoiceStlyed, ContainerButton } from '../../shared/styles/testQuestion.styled';
import { useHistory } from 'react-router-dom';
import { API_GetTestData, API_PostTestResult } from '../../apis/test.api';
import { IQuestion, IUserAns } from '../../shared/interface/test.interfaces';
import { SmileFilled } from '@ant-design/icons';

function TestQuestion() {
    //
    // ─── Set variable ───────────────────────────────────────────────────────────────────
    //
    const history = useHistory();
    const [currentQuestionDetail, setCurrentQuestionDetail] = useState<IQuestion>({ categoryID: 0, question: '', questionIndex: 0 });
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [questionList, setQuestionList] = useState<Array<IQuestion> | null>(null);
    const buttonList = [
        { value: 3, label: 'ใช่มาก', icon: <SmileFilled style={{ fontSize: '20px', color: '#FFF566' }} /> },
        { value: 2, label: 'ใช่', icon: <SmileFilled style={{ fontSize: '20px', color: '#FFF566' }} /> },
        { value: 1, label: 'น้อย', icon: <SmileFilled style={{ fontSize: '20px', color: '#FFF566' }} /> },
        { value: 0, label: 'น้อยมาก', icon: <SmileFilled style={{ fontSize: '20px', color: '#FFF566' }} /> },
    ];
    const [testScore, setTestScore] = useState<Array<IUserAns>>([]);

    useEffect(() => {
        if (!questionList) return;
        setCurrentQuestionDetail(questionList[currentQuestion]);
    }, [currentQuestion, questionList]);

    async function getTestData() {
        const response = await API_GetTestData();
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
        console.log('[Debug]: score == ' + value);
        let newTestScore = testScore;
        newTestScore.push({ categoryID: currentQuestionDetail.categoryID, score: value });
        setTestScore(newTestScore);

        if (!questionList) return;
        // ถ้ามากกว่า 23 ก็คือ 24 ให้ Post Test Result
        if (currentQuestion + 1 > questionList.length - 1) {
            API_PostTestResult(testScore);
            history.push('/testresult');
            return;
        }
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
        </div>
    );
}

export default TestQuestion;
