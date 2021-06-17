import { Button, Input } from "antd";
import Layout from "antd/lib/layout/layout";
import styled from "styled-components";

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
    background-color: #9696f1;
    color: white;
    font-weight: bolder;
    width: 300px;
`;

export const BgColor = styled(Layout)`
    background-color: white;
`;

export const FormInput = styled(Input)`
background-color: white;
width: 300px;
`;