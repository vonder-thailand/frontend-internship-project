import React from 'react'
import { useEffect } from 'react'
import { API_Login_Data } from '../../apis/login.api'

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
        <h1>Login</h1>
      </div>
    );
  }

export default Login;
  
