import React from 'react'
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import { ButtonColor, InputEmail, InputPassword, InputFirstname, InputLastname, InputUsername } from 'components/pages/Authentication/shared/style';

const validateMessages = {
  required: 'required!',
  types: {
    email: 'not a valid email!',
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

const MoveBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: flex-end;
`;

const Register = () => {
  return (
    <div>
      <MoveCenter>
        เข้าสู่ระบบ
        <Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item name={['user', 'first_name']} rules={[{ required: true }]} >
            <InputFirstname placeholder="ชื่อจริง" />
          </Form.Item>
          <Form.Item name={['user', 'last_name']} rules={[{ required: true }]} >
            <InputLastname placeholder="นามสกุล" />
          </Form.Item>
          <Form.Item name={['user', 'username']} rules={[{ required: true }]} >
            <InputUsername placeholder="ชื่อผู้ใช้"  />
          </Form.Item>
          <Form.Item name={['user', 'email']} rules={[{ type: 'email' }]} >
            <InputEmail placeholder="อีเมล" />
          </Form.Item>
          <Form.Item name={['user', 'password']} rules={[{ required: true }]} >
            <InputPassword placeholder="รหัสผ่าน" />
          </Form.Item>
          <Form.Item name={['user', 'repeat_password']} rules={[{ required: true, message: 'Please input your password!' }]} >
            <InputPassword placeholder="ยืนยันรหัสผ่าน" />
          </Form.Item>
          <Form.Item>
              <ButtonColor htmlType="submit" style={{ width: 324, height: 55 }}>
                Submit
              </ButtonColor>
          </Form.Item>
        </Form>
      </MoveCenter>
    </div>

  );
}

export default Register;