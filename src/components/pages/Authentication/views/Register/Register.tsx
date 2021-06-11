import React from 'react'

function Register() {
    return (
      <div className="App">
        <h1>Register</h1>
        <div>
          <h1>สร้างบัญชี</h1>
        
        <form>
          <div>
            <input type="text" placeholder="ชื่อจริง"/>
            <br></br>
            <input type="text" placeholder="นามสกุล"/>
            <br></br>
            <input type="text" placeholder="ชื่อผู้ใช้" />
            <br></br>
            <input type="email" placeholder="อีเมล" />
            <br></br>
            <input type="password" placeholder="รหัสผ่าน" />
            <br></br>
            <input type="password" placeholder="ยืนยันรหัสผ่าน" />
            <br></br>
            <button>สร้างบัญชี</button>
          </div>
        </form>
        
        </div>
      </div>
    );
  }

export default Register;