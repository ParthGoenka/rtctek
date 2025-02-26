import { loginRequest } from '../redux/slices/authSlice';
import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
     if(email == "a@a" && password == "a")
    {
    dispatch(loginRequest(email,password));
    setEmail("");
    setPassword("");
    }
    else
    {
      alert("Incorrect or Empty credentials");
       
    }
};

  return (
    <div>
      <h2 className='mx-auto text-3xl font-bold text-center p-10 '>Login</h2>
      {error && <p>{error}</p>}
      <form>
        <input className='bg-gray-200 text-black text-center mb-5 rounded-md px-30 py-2' type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
        <input className='bg-gray-200 text-black text-center mb-5 rounded-md px-30 py-2' type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br/>
        <button className='bg-blue-500 rounded-lg text-white text-xl font-bold text-center p-5 px-9 py-3' type="submit" onClick={handleLogin} >
          Login
        </button>
        
      </form>
      
    </div>
  );
};

export default Login;
