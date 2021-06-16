import { useState } from 'react';
import { useEffect } from 'react';
import { API_Profile_Data } from '../apis/profile.api';
//import * as data from '../mocks/user.json';
import { IProfile } from '../shared/profile.interface';
import styled from 'styled-components';
import { Layout, Form, Input, Button } from 'antd';

const { Content } = Layout;

function EditProfile() {
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

    const MoveCenter = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `;

    const Margin = styled.div`
        margin-left: 60px;
        margin-right: 60px;
        flex-direction: column;
    `;
    const Container = styled.div`
    padding: 10px;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
`;


    // const validateMessages = {
    //     required: '${label} is required!',
    //     types: {
    //         email: '${label} is not a valid email!',
    //         number: '${label} is not a valid number!',
    //     },
    //     number: {
    //         range: '${label} must be between ${min} and ${max}',
    //     },
    // };
    // {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}
    // const Demo = () => {
    //     const onFinish = (values: any) => {
    //         console.log(values);
    //     };

    return (
        <div className="App">
            <Layout>
                <Content>
                  <Container>
                    <MoveCenter>
                        <br />
                        <h1>แก้ไขข้อมูลส่วนตัว</h1>

                        <img src={cred.pic} width={80}></img>
                        <br />
                    </MoveCenter>
                    
                        <Form>
                            <h2>ชื่อผู้ใช้</h2>
                            <Form.Item name={['user', 'userName']} rules={[{ type: 'string' }]}>
                                <Input />
                            </Form.Item>
                            <h2>อีเมล</h2>
                            <Form.Item name={['user', 'email']} rules={[{ type: 'email' }]}>
                                <Input />
                            </Form.Item>
                            <h2>ชื่อจริง</h2>
                            <Form.Item name={['user', 'name']} rules={[{ type: 'string' }]}>
                                <Input />
                            </Form.Item>
                            <h2>นามสกุล</h2>
                            <Form.Item name={['user', 'surname']} rules={[{ type: 'string' }]}>
                                <Input />
                            </Form.Item>
                            <MoveCenter>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" style={{ background: '#9696f1', borderColor: '#9696f1' }}>
                                        ยืนยันการเปลี่ยนแปลง
                                    </Button>
                                </Form.Item>
                            </MoveCenter>
                        </Form>
                    
                    </Container>
                </Content>
            </Layout>
        </div>
    );
}

export default EditProfile;
