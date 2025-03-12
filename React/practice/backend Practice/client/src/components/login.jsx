import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const navigate = useNavigate();
    const handleLogin = async () => {
        if (!email || !pass) {
            console.log("Required fields are missing");
        } else {
            try {
                const res = await axios.post('http://localhost:4040/api/login', { email, pass }); 
                
                if (res.status === 200) {
                    const token = res.data.token;
                    localStorage.setItem(token)
                    if(token){
                        navigate("/Dashboard");
                    }
                    
                }
            } catch (error) {
                console.error("Error during login:", error); 
            }
            
            setEmail(""); 
            setPass("");  
        }
    };
    

  return (
    <div className='flex justify-center items-center'>
        <div className='border-2 bg-white flex flex-col justify-center items-center p-10 w-[300px] h-[500px]'>
        <h1 className='text-3xl font-bold p-6'>Login</h1>
        <label className='text-xl '>Email</label>
        <input className=' bg-gray-200' type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <label className='text-xl '>Password</label>
        <input className=' bg-gray-200' type='password' value={pass} onChange={(e) => {setPass(e.target.value)}}/> 
        <button className='px-5 py-2 mt-3 rounded-xl bg-green-500' onClick={handleLogin}>Submit</button>
        </div>
    </div>
  )
}

export default Login