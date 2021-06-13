import React from 'react'
import { Form, Input, InputNumber, Button } from 'antd';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

  const onFinish = (values: any) => {
    console.log(values);
  }


function Register() {
  return (
    <div className="App">

      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item name={['user', 'first_name']} rules={[{ required: true }]} wrapperCol={{ ...layout.wrapperCol, offset: 6 }} >
          <Input placeholder="ชื่อจริง" />
        </Form.Item>
        <Form.Item name={['user', 'last_name']} rules={[{ required: true }]} wrapperCol={{ ...layout.wrapperCol, offset: 6 }} >
          <Input placeholder="นามสกุล" />
        </Form.Item>
        <Form.Item name={['user', 'username']} rules={[{ required: true }]} wrapperCol={{ ...layout.wrapperCol, offset: 6 }} >
          <Input placeholder="ชื่อผู้ใช้" />
        </Form.Item>
        <Form.Item name={['user', 'email']} rules={[{ type: 'email' }]} wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
          <Input placeholder="อีเมล"/>
        </Form.Item>
        <Form.Item name={['user', 'password']} rules={[{ required: true }]} wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
          <Input.Password placeholder="รหัสผ่าน"/>
        </Form.Item>
        <Form.Item name={['user', 'repeat_password']} rules={[{ required: true, message: 'Please input your password!' }]} wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
          <Input.Password placeholder="ยืนยันรหัสผ่าน"/>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;