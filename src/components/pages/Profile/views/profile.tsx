import { Link } from 'react-router-dom';
//import * as data from '../mocks/user.json';
//import axios from 'axios'
import useSWR from 'SWR'
import axios from 'axios';


  
function Profile() {
    const fetcher = async (url: string) => {
      const { data } = await axios.get(url);
      if (data) {
        return data;
      }
    };
    const { data } = useSWR(
      `http://api.randomuser.me/?inc=name,email`,
      { fetcher: (url) => fetcher(url) },
    );

    return (
      <div className="App">
        <h1>ข้อมูลส่วนตัว</h1>
        <h2>ชื่อ-นามสกุล : {data.name}</h2>
        <h2>อีเมล : {data.email}</h2>
        <Link to="/editProfile"><button>แก้ไขข้อมูลส่วนตัว</button></Link>
        <h2>ผลลัพธ์จากแบบทดสอบ : </h2>
      </div>
    );
  }

export default Profile;