import React from 'react'
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  }
};

const onFinish = (values: any) => {
  console.log(values);
}

const MoveCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

const Register = () => {
  return (
    <div>
      <MoveCenter>
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item name={['user', 'first_name']} rules={[{ required: true }]} >
            <Input placeholder="ชื่อจริง" style={{ width: 300 }} />
          </Form.Item>
          <Form.Item name={['user', 'last_name']} rules={[{ required: true }]} >
            <Input placeholder="นามสกุล" style={{ width: 300 }} />
          </Form.Item>
          <Form.Item name={['user', 'username']} rules={[{ required: true }]} >
            <Input placeholder="ชื่อผู้ใช้" style={{ width: 300 }} />
          </Form.Item>
          <Form.Item name={['user', 'email']} rules={[{ type: 'email' }]} >
            <Input placeholder="อีเมล" style={{ width: 300 }} />
          </Form.Item>
          <Form.Item name={['user', 'password']} rules={[{ required: true }]} >
            <Input.Password placeholder="รหัสผ่าน" style={{ width: 300 }} />
          </Form.Item>
          <Form.Item name={['user', 'repeat_password']} rules={[{ required: true, message: 'Please input your password!' }]} >
            <Input.Password placeholder="ยืนยันรหัสผ่าน" style={{ width: 300 }} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: 300 }}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </MoveCenter>
    </div>

  );
}

export default Register;