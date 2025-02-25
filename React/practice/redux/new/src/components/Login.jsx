import { loginRequest } from '../redux/slices/authSlice';
import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskList from './TaskList';
import watchFetchTasks from '../redux/sagas/taskSaga';

const Login = () => {
  const dispatch = useDispatch();
  const { error,user } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if(email.length === 0 || password.length === 0)
    {
      alert("Enter Details");
       
    }
    else
    {
    dispatch(loginRequest(email,password));
    setEmail("");
    setPassword("");
    }
};

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form>
        <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
        
      </form>
      {user && <TaskList />}
    </div>
  );
};

export default Login;
