import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1, text:"Hello"}]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState: initialState,
    reducers:{
        addTodo: (state,action) => {
            const todo = {
                id:nanoid(),
                text:action.payload.text
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            
            state.todos = state.todos.filter((todo) => {
                todo.id !== action.payload.id;
                console.log(todo.id);
            })
            
        },
        // updateTodo: (state,action) => {
        //     const todo = state.todos.filter((todo) => {
        //         todo.id === action.payload;
        //     })
        //     todo.text=action.payload.text
        // }
    }
})

export const {addTodo,removeTodo} = todoSlice.actions
export default todoSlice.reducer