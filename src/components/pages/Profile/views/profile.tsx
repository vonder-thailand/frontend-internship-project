import React from 'react'
import { Link } from 'react-router-dom';
//import { API_Profile_Data } from '../apis/profile.api'
import * as data from '../mocks/user.json';

function Profile() {
    return (
      <div className="App">
        <h1>ข้อมูลส่วนตัว</h1>
        <img></img>
        <h2>ชื่อ-นามสกุล : {data['name-surname']}</h2>
        <h2>อีเมล : {data.email}</h2>
        <Link to="/editProfile"><button>แก้ไขข้อมูลส่วนตัว</button></Link>
        <h2>ผลลัพธ์จากแบบทดสอบ : {data.result}</h2>
      </div>
    );
  }

export default Profile;
  