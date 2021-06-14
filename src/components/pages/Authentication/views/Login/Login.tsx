import React from 'react'
import { useEffect } from 'react'
import { API_Login_Data } from '../../apis/login.api'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

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

function Login() {
  async function getStatictisData() {
    const response = API_Login_Data()
    if (response) {
      console.log((await response).username)
    } else {
      console.log("error")
    }
  }
  useEffect(() => {
    getStatictisData()
  }, [])
  return (

      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="อีเมล" />
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
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            เข้าสู่ระบบ
          </Button>
          <br />
          <Button type="primary" htmlType="submit" className="login-form-button">
            Contnue as Guest
          </Button>
          <br />
          ยังไม่มีบัญชีใช่ไหม? <a href="Register">สร้างบัญชีกันเถอะ!</a>
        </Form.Item>
      </Form>

  );
}

export default Login;

