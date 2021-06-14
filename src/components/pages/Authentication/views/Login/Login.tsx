import React from 'react'
import { useEffect } from 'react'
import { API_Login_Data } from '../../apis/login.api'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Layout, Row, Col, Card } from 'antd';

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

const { Header, Footer, Content } = Layout;

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

      <Layout>
        <Header style={{ textAlign: 'center' }}>
          <h1 style={{ color: '#ffffff' }}>
            เข้าสู่ระบบ
          </h1>
        </Header>
      </Layout>

      <Layout>
        <Content>
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
            <Button type="primary" htmlType="submit" className="login-form-button">
              Contnue as Guest
            </Button>
          </Form.Item>
        </Content>
      </Layout>

      <Layout>
        <Footer>
          <Form.Item>
            ยังไม่มีบัญชีใช่ไหม? <a href="Register">สร้างบัญชีกันเถอะ!</a>
          </Form.Item>
        </Footer>
      </Layout>
    </Form>
  );
}

export default Login;

