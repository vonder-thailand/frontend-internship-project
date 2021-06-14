import { Link } from 'react-router-dom';
//import * as data from '../mocks/user.json';
import useSWR from 'swr'
import axios from 'axios';


  
function Profile() {
    //const fetcher = (url: string) => axios.get(url).then(res => res.data);
    const fetcher = async (url: string) => {
      const { data } = await axios.get(url);
      if (data) {
        return data;
      }
    };
    const { data , error} = useSWR(`https://jsonplaceholder.typicode.com/todos/1`,fetcher);
    console.log(data , error);

    if(error){
      return <div>Error....</div>
    }
    if(!data){
      return <div>Loading...</div>
    }

    return (
      <div className="App">
        <h1>ข้อมูลส่วนตัว</h1>
        <h2>ชื่อ-นามสกุล : {data.title}</h2>
        <h2>อีเมล : {data.userId}</h2>
        <Link to="/editProfile"><button>แก้ไขข้อมูลส่วนตัว</button></Link>
        <h2>ผลลัพธ์จากแบบทดสอบ : {data.id}</h2>
      </div>
    );
  }

export default Profile;