import { useState } from 'react';
import { useEffect } from 'react';
import { API_Profile_Data } from '../apis/profile.api';
//import * as data from '../mocks/user.json';
import { IProfile } from '../shared/login.interface';
import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;


function EditProfile() {
  const [cred, setCred] = useState<IProfile>({ name: '' , surname: '' , email: '' , result: '' , pic: '' , username: ''});
    async function getStatisticData() {
        const response = await API_Profile_Data();
        if (response) {
            console.log(response.name);
            setCred((prevState) => ({ ...prevState , name: response.name , surname: response.surname , email: response.email , result: response.result , pic: response.pic , username: response.username}))
        } else {
            console.log('error');
        }
    }
    useEffect(() => {
      getStatisticData();
    }, [])

    const MoveCenter = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
    `

    return (
      <div className="App">
            <Layout>
                <Content>
                  <MoveCenter>
                  <h1>แก้ไขข้อมูลส่วนตัว</h1>
                  <img src={cred.pic} width={80}></img>
                  </MoveCenter>
                  <h2>ชื่อผู้ใช้</h2>
                  <input></input><h2>{cred.username}</h2>
                  <h2>อีเมล</h2>
                  <input></input><h2>{cred.email}</h2>
                  <h2>ชื่อจริง</h2>
                  <input></input><h2>{cred.name}</h2>
                  <h2>นามสกุล</h2>
                  <input></input><h2>{cred.surname}</h2>
                  
                  <h2>ผลลัพธ์จากแบบทดสอบ : {cred.result}</h2>
                </Content>
            </Layout>
        </div>
    );
  }

export default EditProfile;