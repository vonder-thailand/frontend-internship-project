import React, { useState } from 'react';
import { useEffect } from 'react';
import { API_Login_Data } from '../../apis/login.api';
import { ILogin } from '../../shared/login.interface';

function Login() {
    async function getStatictisData() {
        const response = await API_Login_Data();
        if (response) {
            console.log(response.name);
            setCred((prevState) => ({ ...prevState, name: response.name, email: response.email }));
        } else {
            console.log('error');
        }
    }
    useEffect(() => {
        getStatictisData();
    }, []);

    const [cred, setCred] = useState<ILogin>({ name: '', email: '', username: '', password: '' });

    return (
        <div className="App">
            <h1>Login</h1>
            <h2>name:{cred.name}</h2>
            <h2>Email:{cred.email}</h2>
        </div>
    );
}

export default Login;
