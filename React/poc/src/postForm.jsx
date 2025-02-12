import React,{useState} from "react";
import {cardData} from "./data";

function Postform(){
    const size = cardData.length;
    const[ttext,setTtext] = useState("");
    const[dtext,setTdext] = useState("");
    const[num,setNum] = useState(size);
    function postbutt(){
        const titlepost = ttext;
        const descpost = dtext;
        const newCard = { id:num+1, title:titlepost, description:descpost };
        console.log(newCard);
        setNum(num => num+1);
        setTdext("");
        setTtext("");
    }
    function ttextshow(e){
        setTtext(e.target.value);
    }

    function dtextshow(e){
        setTdext(e.target.value);
    }

   

    return(<div>
        <input type="text" className="postform-title" id="title" placeholder="Title" onChange={(e) => ttextshow(e)} value={ttext}></input><br></br>
        <input type="text" className="postform-desc" id="desc" placeholder="Description" onChange={(e) => dtextshow(e)} value={dtext}></input><br></br>
        <button onClick={ postbutt} className="postbutton">Post</button><br></br>
        <p className="posttext"> Number of posts = {num}</p>
    </div>)
}

export default Postform