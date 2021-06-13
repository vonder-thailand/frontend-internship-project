import React from 'react'
import { useEffect } from 'react'
import { API_Login_Data } from '../../apis/login.api'
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 10 },
};

const Demo = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  }};

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

function Login() {
  async function getStatictisData() {
    const response =  API_Login_Data()
    if(response){
      console.log((await response).username)
    }else{
      console.log("error")
    }
  }
  useEffect(() => {
    getStatictisData()
  },[])
    return (
      <div className="App">
        <div>
          <h1>Hi, user</h1>
        </div>
        <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      // onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
      </div>

    );
  }

export default Login;
  
