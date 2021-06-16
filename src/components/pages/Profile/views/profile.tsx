import { Link } from 'react-router-dom';
//import * as data from '../mocks/user.json';
// import useSWR from 'swr';
// import axios from 'axios';
import { API_Profile_Data } from '../apis/profile.api';
import { Layout, Form, Button } from 'antd';
import { useEffect } from 'react';
import { IProfile } from '../shared/profile.interface';
import { useState } from 'react';
import styled from 'styled-components';

const { Content } = Layout;

function Profile() {
    const [cred, setCred] = useState<IProfile>({ name: '', surname: '', email: '', result: '', pic: '', username: '' });
    async function getStatisticData() {
        const response = await API_Profile_Data();
        if (response) {
            console.log(response.name);
            setCred((prevState) => ({ ...prevState, name: response.name, surname: response.surname, email: response.email, result: response.result, pic: response.pic, username: response.username }));
        } else {
            console.log('error');
        }
    }
    useEffect(() => {
        getStatisticData();
    }, []);

    //const fetcher = (url: string) => axios.get(url).then((res) => res.data);
    // const fetcher = async (url: string) => {
    //     const { data } = await axios.get(url);
    //     if (data) {
    //         return data;
    //     }
    // };
    // const { data, error } = useSWR(`https://jsonplaceholder.typicode.com/todos/1`, fetcher);
    // console.log(data, error);

    // if(error){
    //   return <div>Error....</div>
    // }
    // if(!data){
    //   return <div>Loading...</div>
    // }
    const MoveCenter = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `;

    const AlignRight = styled.div`
        float: right;
    `;
    const Container = styled.div`
        padding: 10px;
        max-width: 300px;
        margin-left: auto;
        margin-right: auto;
    `;

    return (
        <div className="App">
            <Layout>
                <Content>
                    <Container>
                    <MoveCenter>
                        <h1>ข้อมูลส่วนตัว</h1>
                        <img src={cred.pic} width={80}></img>
                        <h1>{cred.username}</h1>
                    </MoveCenter>
                    <h2>
                        ชื่อ-นามสกุล :
                        <AlignRight>
                            {cred.name} {cred.surname}
                        </AlignRight>
                    </h2>
                    <h2>
                        อีเมล : <AlignRight>{cred.email}</AlignRight>
                    </h2>
                    <br/>
                    <Link to="/editProfile">
                        <Form.Item>
                            <MoveCenter>
                                <Button type="primary" htmlType="submit" style={{ background: '#9696f1', borderColor: '#9696f1' }}>
                                    แก้ไขข้อมูลส่วนตัว
                                </Button>
                            </MoveCenter>
                        </Form.Item>
                    </Link>
                    <h2>
                        ผลลัพธ์จากแบบทดสอบ : <AlignRight>{cred.result}</AlignRight>
                    </h2>
                    </Container>
                </Content>
            </Layout>
        </div>
    );
}

export default Profile;
