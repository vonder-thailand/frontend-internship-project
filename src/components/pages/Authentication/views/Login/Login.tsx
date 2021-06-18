import React, { useState, useCallback } from 'react';
import { useEffect } from 'react';
import { API_Login_Data } from '../../apis/user.api';
import { Form, Input } from 'antd';
import styled from 'styled-components';
import { useHistory } from 'react-router';

import { ILogin } from '../../shared/login.interface';
import { ButtonColor, InputEmail, InputPassword, FontText } from 'components/pages/Authentication/shared/style';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 10 },
};

const MoveCeneter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MoveBottom = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    align-self: flex-end;
`;

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onFinish = (values: ILogin) => {
    const mockUser = require("../../mocks/user.json")
    const currentUser = mockUser.find((user: ILogin) => user.email === values.email)

    mockUser.find((user: ILogin) => console.log(user))
    if (values.password === currentUser?.password) {
      history.push("/");
    } else {
      console.log("Failed login");
    }
    console.log('Success:', values);
  };

  function checkdatajson() {
    const mockUser = require("../../mocks/user.json")
    const currentUser = mockUser.find((user: ILogin) => user.email === email)

    mockUser.find((user: ILogin) => console.log(user))
    if (password === currentUser?.password) {
      history.push("/");
    } else {
      console.log("Failed login");
    }
  }

  return (
    <div>
      <MoveCeneter>
        <Form initialValues={{ remember: true }} onFinish={onFinish} >
          <Form.Item
            name="email"
            // validateStatus="error"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <InputEmail placeholder="อีเมล" />
          </Form.Item>
          <Form.Item
            // validateStatus="error"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <InputPassword type="password" placeholder="รหัสผ่าน" />
          </Form.Item>

          <Form.Item>
            <ButtonColor onClick={checkdatajson} htmlType="submit" style={{ width: 324, height: 55 }} >
              เข้าสู่ระบบ
            </ButtonColor>
          </Form.Item>

          <Form.Item>
            <FontText>
              <MoveBottom>
                ยังไม่มีบัญชีใช่ไหม? <a href="Register">สร้างบัญชีกันเถอะ!</a>
              </MoveBottom>
            </FontText>
          </Form.Item>
        </Form>
      </MoveCeneter>
    </div>
  );
}

export default Login;
