import styled from 'styled-components';
import { ButtonStartOver } from '../../shared/styles/testQuestion.styled';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { ButtonHome, ButtonStart, TextTitle } from '../../shared/styles/ResultPage.styled';
import { HomeFilled }  from '@ant-design/icons';


const Result = () => {

    const history = useHistory();
    return (
        <>
        <ButtonHome onClick={() => history.push('/')}><HomeFilled style={{ fontSize: '30px' }} /></ButtonHome>
        {/* <TextTitle level={2}>ผลลัพธ์</TextTitle> */}
        <ButtonStart onClick={() => history.push('/test')}>เริ่มใหม่</ButtonStart>
        </>
    );
};

export default Result