import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    fetchTasksRequest: (state) => {
      state.loading = true;
    },
    fetchTasksSuccess: (state, action) => {
      state.loading = false;
      state.flag = 1;
      state.tasks = action.payload;
    },
    fetchTasksFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addTask: (state, action) => {
      const newTask = {id:state.tasks[state.tasks.length-1].id+1, name:action.payload}
      state.tasks.push(newTask);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { fetchTasksRequest, fetchTasksSuccess, fetchTasksFailure, addTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
