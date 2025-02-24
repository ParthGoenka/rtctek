import React,{ useState } from "react"
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/movieSlice";

const MovieInput = () => {
    const[mov,setMov] = useState("");
    const dispatch = useDispatch();
    const handleAdd = () => {
        if(mov){
        dispatch(addMovie(mov));
        setMov("");
        }
    }
    return(
        <div className="mt-10">
            <input type="text" value={mov} onChange={(e)=>setMov(e.target.value)} className="mb-5 width-[400px] h-[30px] rounded-md border-black"/><br />
            <button className="rounded-lg px-9 py-2.5 bg-blue-500 text-white" onClick={handleAdd}>Add</button>
        </div>
    )
}
export default MovieInput