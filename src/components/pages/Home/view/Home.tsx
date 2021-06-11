import React, { useEffect } from 'react'
import { API_getStatistics } from '../apis/home.api'

function Home() {
  async function getStatictisData() {
    const response = await API_getStatistics()
    if(response.success){
      console.log(response.data)
    }else{
      console.log("error")
    }
  }
  useEffect(() => {
    getStatictisData()
  },[])
  
    return (
      <div className="App">
        <h1>Home Page</h1>
      </div>
    );
  }

export default Home;
  