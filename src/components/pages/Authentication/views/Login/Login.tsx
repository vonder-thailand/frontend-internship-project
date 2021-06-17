import React, { useState } from 'react';
import { useEffect } from 'react';
import { API_Login_Data } from '../../apis/user.api';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useHistory } from 'react-router';

import 'antd/dist/antd.css';
import { ILogin } from '../../shared/login.interface';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 10 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 10 },
};

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

const MoveCeneter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function Login() {
    const [currentUserDetail, setCurrentUserDetail] = useState<ILogin>({ firstname: '', lastname: '', username: '', email: '', password: '' });
    const [currentUser, setCurrentUser] = useState<number>(0);
    const [userList, setUserList] = useState<Array<ILogin> | null>(null);
    const history = useHistory();

    useEffect(() => {
        console.log('here');
        if (!userList) return;
        setCurrentUserDetail(userList[currentUser]);
    }, [currentUser, userList]);

    async function getLoginData() {
        const response = await API_Login_Data();
        if (response) {
            setUserList(response);
            const resp = response;
            setCurrentUserDetail(resp[currentUser]);
        } else {
            console.log('error');
        }
    }
    useEffect(() => {
        getLoginData();
    }, []);

    return (
        <div>
            <MoveCeneter>
                <div>firstname: {currentUserDetail.firstname}</div>
                <div>lastname: {currentUserDetail.lastname}</div>
                <div>username: {currentUserDetail.username}</div>
                <div>email: {currentUserDetail.email}</div>
                <div>password: {currentUserDetail.password}</div>
                <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="อีเมล" style={{ width: 300 }} />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="รหัสผ่าน" style={{ width: 300 }} />
                    </Form.Item>

                    <Form.Item>
                        <Button onClick={() => history.push('/')} type="primary" htmlType="submit" className="login-form-button">
                            เข้าสู่ระบบ
                        </Button>
                    </Form.Item>

                    <Form.Item>
                        ยังไม่มีบัญชีใช่ไหม? <a href="Register">สร้างบัญชีกันเถอะ!</a>
                    </Form.Item>
                </Form>
            </MoveCeneter>
        </div>
    );
}

export default Login;
