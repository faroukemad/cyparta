'use client'

import React, { useState } from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import { useLogin } from './LoginSevice';
import './login.scss'

export default function Login() {
    const [credentials, setCredentials] = useState({ email: 'test@task.com', password: '123456' });
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const { handleLogin, error } = useLogin();
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials(prevState => ({ ...prevState, [name]: value }));
    };
    
    return (
        <div className='w-screen h-screen bg-[#F8F8F8] flex justify-center items-center '>

            <div className="w-[600px] mx-auto flex flex-col items-center relative">
                <img src="./cypartal-logo.png" alt="" className='w-[225px] h-[102px] object-contain' />
                <div className="shadow-md shadow-gray-100 border border-[#E9E9E9] flex flex-col w-full p-12 mt-7 rounded-lg">
                    
                    <EmailInput
                        label="Email Address"
                        type="email"
                        value={credentials.email}
                        onChange={handleInputChange}
                        placeholder='nouran@cyparta.com'
                        id="email" />
                    <PasswordInput
                        value={credentials.password}
                        onChange={handleInputChange}
                        isVisible={isVisible}
                        toggleVisibility={toggleVisibility}
                        id="password"
                    />
                    
                    <button className='p-2 gap-2 rounded-lg  bg-[#262626] text-white mt-20 w-[80%] mx-auto text-[16px] font-semibold leading-6 cairo'  onClick={() => handleLogin(credentials)}>Login</button>

                </div>

                {error && (<div className="text-red-500 text-center absolute bottom-0">{error}</div>)}
            </div>


        </div>
    )
}
