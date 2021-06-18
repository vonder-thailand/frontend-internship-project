import styled from 'styled-components';
import { Button } from 'antd';

export const ButtonColor = styled(Button)`
    font-family: 'Kanit', sans-serif;
    border-radius: 15px;
    font-weight: bolder;
    color: white;
    background-color: #7879f1;
    /* transform: translateY(28rem) translateX(13rem); */
    width: 12rem;
    height: 6vh;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const InputFirstname = styled.input.attrs(props => ({
    type: "text",
    size: props.size || "1em",
}))`
    font-family: 'Kanit', sans-serif;
    font-size: 18px;
    border-radius: 15px;
    width: 324px;
    height: 55px;
    margin: ${props => props.size};
    padding: ${props => props.size};
`;

export const InputLastname = styled.input.attrs(props => ({
    type: "text",
    size: props.size || "1em",
}))`
    font-family: 'Kanit', sans-serif;
    font-size: 18px;
    border-radius: 15px;
    width: 324px;
    height: 55px;
    margin: ${props => props.size};
    padding: ${props => props.size};
`;

export const InputUsername = styled.input.attrs(props => ({
    type: "text",
    size: props.size || "1em",
}))`
    font-family: 'Kanit', sans-serif;
    font-size: 18px;
    border-radius: 15px;
    width: 324px;
    height: 55px;
    margin: ${props => props.size};
    padding: ${props => props.size};
`;

export const InputEmail = styled.input.attrs(props => ({
    type: "email",
    size: props.size || "1em",
}))`
    font-family: 'Kanit', sans-serif;
    font-size: 18px;
    border-radius: 15px;
    width: 324px;
    height: 55px;
    margin: ${props => props.size};
    padding: ${props => props.size};
`;

export const InputPassword = styled.input.attrs(props => ({
    type: "password",
    size: props.size || "1em",
}))`
    font-family: 'Kanit', sans-serif;
    font-size: 18px;
    border-radius: 15px;
    width: 324px;
    height: 55px;
    margin: ${props => props.size};
    padding: ${props => props.size};
`;

export const FontText = styled.div`
    font-family: 'Kanit', sans-serif;
    font-size: 18px;
`;