import React,{useState} from "react";
import {useDispatch} from "react-redux"
import {addTodo} from "../features/todo/todoSlice.js"
function AddTodo() {

    const[inp,setInput] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo({text:inp}));
        setInput("");
    }

    function inputtodo(e){
        setInput(e.target.value);
    }

    return(<div>
<form>
    <input type="text" value={inp} onChange={(e)=> inputtodo(e)}></input>
    <button type="submit" onClick={(e)=>addTodoHandler(e)}>Submit</button>
</form>
    </div>)
}

export default AddTodo