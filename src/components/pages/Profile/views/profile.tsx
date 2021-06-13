import React from 'react'
import * as data from '../mocks/user.json';

function Profile() {
    return (
      <div className="App">
        <h1>ข้อมูลส่วนตัว</h1>
        <img></img>
        <h2>ชื่อ-นามสกุล : {data['name-surname']}</h2>
        <h2>อีเมล : {data.email}</h2>
        <h2>ผลลัพธ์จากแบบทดสอบ : {data.result}</h2>

      </div>
    );
  }

export default Profile;
  