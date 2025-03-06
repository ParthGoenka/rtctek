import React, { useState } from 'react';

function Task() {
  const [task, setTask] = useState(''); 
  const [allTasks, setAllTasks] = useState([]); 

  const handleAdd = () => {
    if(!task)
    {
      alert("enter a task");
    }
    if (task.trim()) {
      setAllTasks([...allTasks, task]); 
      setTask(''); 
    }
  };
  const handleDelete = (index) => {
    const updatedTasks = allTasks.filter((_, i) => i !== index);
    alert("task deleted");
    setAllTasks(updatedTasks); 
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <main className=" p-10" id='main'>
  <div className="rounded-lg max-w-3xl mx-auto p-5 bg-[#f0f0f0]">
    <h2 className="text-5xl font-bold text-center text-black mb-8">Tasks</h2>

    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center space-x-4 mb-6">
        <input
          type="text"
          onChange={(e) => setTask(e.target.value)}
          value={task}
          placeholder="Enter a new task"
          onKeyPress={handleKeyPress}
          aria-label="Task input"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleAdd}
          aria-label="Add task"
          className="px-4 py-2 bg-[#387531] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Add
        </button>
      </div>
    </div>

    <div className="mt-8">
      <ul className="space-y-4">
        {allTasks.map((t, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md hover:bg-gray-50"
          >
            <span className="text-lg text-gray-900">{t}</span>
            <button
              onClick={() => handleDelete(index)}
              aria-label={`Delete task ${t}`}
              aria-live="assertive"
              className="text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  </div>
</main>

   
  );
}

export default Task;
