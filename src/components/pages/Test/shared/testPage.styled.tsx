import styled from 'styled-components';
import { Button } from 'antd';

export const TextHeader = styled.h1`
    font-family: 'Kanit', sans-serif;
    text-align: center;
    font-size: 2rem;
    font-weight: bolder;
    transform: translateY(50%);
`;

export const BoxAnimation = styled.div`
    background-color: #dfdfff;
    border-radius: 10px;
    width: 500px;
    height: 50vh;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const TextInBoxAnimation = styled.div`
    font-family: 'Kanit', sans-serif;
    font-size: 2rem;
    color: #7879f1;
    text-align: center;
    transform: translateY(10rem);
`;

export const TextDescription = styled.div`
    font-family: 'Kanit', sans-serif;
    text-align: center;
    font-size: 1rem;
    font-weight: bolder;
    transform: translateY(30rem);
`;

export const ButtonLoading = styled(Button)`
    font-family: 'Kanit', sans-serif;
    border-radius: 15px;
    font-weight: bolder;
    color: white;
    background-color: #7879f1;
    left: 44%;
    transform: translateY(32rem);
    width: 12rem;
    height: 6vh;
`;

export const IsLoadingSpinner = styled.div`
    transform: translateY(31rem) translateX(47rem);
    width: 12rem;
    height: 6vh;
`;

export const TextIsLoading = styled.h4`
    font-family: 'Kanit', sans-serif;
    font-weight: bolder;
`;
