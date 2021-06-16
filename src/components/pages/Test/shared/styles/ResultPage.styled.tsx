import styled from 'styled-components';
import { Button, Col, Typography} from 'antd';

const { Title } = Typography;

export const ButtonHome = styled(Button)`
    font-family: 'Kanit', sans-serif;
    border-radius: 0 25px 25px 0;
    color: #ffffff;
    background-color: #7879f1;
    width: 5rem;
    height: 7vh;
    left: 0;
`;

export const ButtonStart = styled(Button)`
    font-family: 'Kanit', sans-serif;
    border-radius: 15px;
    font-weight: bolder;
    color: #7879f1;
    background-color: #ffffff;
    width: 5rem;
    height: 6vh;
    left: calc( 100vh - 45vh);
`;

export const TextTitle = styled(Title )`
    justify-items: center;
    display: contents;

`