import styled from 'styled-components';
import { Space, Button, Col, List } from 'antd';

export const SearchField = styled(Space)`
    margin-top: 20px;
    font-family: 'Kanit', sans-serif;
    margin-left: 150px;
`;

export const TagFilter = styled.div`
    font-family: 'Kanit', sans-serif;
    border-color: black;
    font-weight: bolder;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 200px;
`;

export const ButtonTagFilter = styled(Button)`
    font-family: 'Kanit', sans-serif;
    font-weight: bolder;
    color: black;
    opacity: 0.8;
    letter-spacing: 0.1rem;

    &:hover {
        background-color: black;
        color: black;
        cursor: pointer;
        transition: transform 0.2s;
        transition: 100ms ease-in-out;
        letter-spacing: 0.2rem;
    }
`;

export const ImageTestPage = styled.img`
    height: 30vh;
    width: 800px;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-left: 300px;
    transition: 0.5s ease;
    display: inline-block;

    &:hover {
        background-color: blue;
        color: black;
        cursor: pointer;
        transition: transform 5s;
        transition: 500ms ease-in-out;
    }
`;

export const TextBoard = styled(Col)`
    font-family: 'Kanit', sans-serif;
    font-weight: bolder;
    font-size: 25px;
    margin-top: 20px;
    margin-bottom: 10px;
`;

export const ButtonSeeAllBoard = styled(Button)`
    background-color: #7879f1;
    color: white;
    height: 5vh;
    width: 100px;
    font-weight: 600;
    margin-left: 400px;
    font-size: 15px;
`;

export const ListItemBoard = styled(List.Item)`
    margin-left: 50px;
    font-family: 'Kanit', sans-serif;
    font-weight: bolder;
`;
