import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasksRequest, deleteTask, addTask } from '../redux/slices/taskSlice';

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.tasks);
  const [task,setTask] = useState("");

  useEffect(() => {
    dispatch(fetchTasksRequest());
  }, [dispatch]);

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId)); 
  };
  const handleAdd = (task) => {
    if(task){dispatch(addTask(task)); }
    else{
      alert("Enter task")
    }
    
    setTask("");
  };

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>Error loading tasks: {error}</p>;

  return (
    <div className='bg-gray-300'>
  <h2 className='mx-auto text-3xl font-bold text-center p-10'>Tasks List</h2><hr/>

  <div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-10 justify-center'>
    <div className='bg-white p-6 rounded-lg shadow-lg relative h-[500px] w-[500px]'>
      {/* Task List Section with scrollable area */}
      <ul className='space-y-4 overflow-y-auto h-full'>
        {tasks.map((task) => (
          <li key={task.id} className='flex justify-between items-center'>
            <span className='text-lg'>{task.name}</span>
            <button
              onClick={() => handleDelete(task.id)}
              className='bg-red-400 text-white px-4 py-2 rounded-lg mr-5'
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>

    <div className='bg-white p-6 rounded-lg shadow-lg w-80'>
      {/* Add Task Section */}
      <div className='flex flex-col items-center'>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className='bg-gray-200 text-black text-center mb-4 rounded-md px-4 py-2 w-full'
          placeholder='Enter a new task'
        />
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded-lg w-full'
          onClick={() => handleAdd(task)}
        >
          Add Task
        </button>
      </div>
    </div>
  </div>
</div>


  );
};

export default TaskList;
