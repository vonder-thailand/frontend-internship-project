import { Button, Input , Card , Image} from 'antd';
import Layout from 'antd/lib/layout/layout';
import styled from 'styled-components';

export const MoveCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Margin = styled.div`
    margin-left: 60px;
    margin-right: 60px;
    flex-direction: column;
`;
export const Container = styled.div`
    padding: 10px;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
`;

export const AlignRight = styled.div`
    float: right;
`;

export const ButtonSubmit = styled(Button)`
    font-family: 'Kanit', sans-serif;
    font-weight: bolder;
    font-size: 15px;
    border-radius: 10px;
    background-color: #9696f1;
    color: white;
    font-weight: bolder;
    width: 300px;
    margin-top: 0px;
    margin-bottom: 0px;
`;

export const BgColor = styled(Layout)`
    background-color: white;
`;

export const FormInput = styled(Input)`
    font-family: 'Kanit', sans-serif;
    font-size: 15px;
    border-radius: 10px;
    background-color: white;
    width: 300px;
`;

export const TextTopic = styled.h1`
    font-family: 'Kanit', sans-serif;
    font-weight: bolder;
    font-size: 30px;
    padding-bottom: 5px;
`;

export const TextUserInfo = styled.h2`
    font-family: 'Kanit', sans-serif;
    font-weight: bolder;
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 5px;
`;

export const TextUsername = styled.h2`
    font-family: 'Kanit', sans-serif;
    font-weight: bolder;
    font-size: 15px;
    margin-top: 10px;
    padding-bottom: 0px;
`;
export const ResultCard = styled(Card)`
font-family: 'Kanit', sans-serif;
font-weight: bolder;
font-size: 15px;
margin-top: 10px;
padding-bottom: 0px;
width: 300px;
border-radius: 10px;
border-color: #9696f1;
`;

export const UserImage = styled(Image)`
width: 80px;
border-radius: 90px;
`;

