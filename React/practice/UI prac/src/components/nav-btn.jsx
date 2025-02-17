import React,{useState} from "react"

function Navbtn(props){
    return(
        <div>
            <button className="px-7 py-3 rounded-lg bg-transparent hover:text-gray-500 focus:text-gray-600 font-bold">{props.name}</button>
        </div>
    )
}
export default Navbtn