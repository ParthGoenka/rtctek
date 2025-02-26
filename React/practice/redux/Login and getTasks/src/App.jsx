import React from 'react';
import Login from './components/Login';
import TaskList from './components/TaskList';
import { useSelector } from 'react-redux';

const App = () => {
  
  const { user } = useSelector((state) => state.auth);
  return (
    <div className='flex bg-gray-300 h-screen justify-center p-10'>
      {  user ? <TaskList/> : <Login />} 
    </div>
  );
};

export default App;



