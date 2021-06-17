import React from 'react'
import { useEffect } from 'react'
import { API_Login_Data } from '../../apis/user.api'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import 'antd/dist/antd.css';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 10, },
};

const onFinish = (values: any) => {
  console.log('Success:', values);
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const MoveCeneter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function Login() {
  async function getStatictisData() {
    const response = API_Login_Data()
    if (response) {
      console.log((await response))
    } else {
      console.log("error")
    }
  }
  useEffect(() => {
    getStatictisData()
  }, [])
  return (

    <div>
      <MoveCeneter>
        <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish} >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="อีเมล"
              style={{ width: 300 }}
            />
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
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="รหัสผ่าน"
              style={{ width: 300 }}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
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

