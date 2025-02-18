import React,{useState} from "react";
import { useSelector, useDispatch} from "react-redux";


function Cakecontainer (){
    const numberOfCakes = useSelector( state => state.numberOfCakes);
    const numberOfIce = useSelector( state => state.numberOfIce);
    const numberOfDrinks = useSelector( state => state.numberOfDrinks);
    const dispatch = useDispatch();
    const[cnum,setcNum] = useState("");
    const[dnum,setdNum] = useState("");
    const[inum,setiNum] = useState("");



    function handle(){
        if(numberOfCakes>cnum){
        dispatch({type:"BUY_CAKE", payload: cnum})}
        else{
            setcNum("required quantity is not available")
        }
        if(numberOfIce>inum){
            dispatch({type:"BUY_ICE", payload: inum})}
            else{
                setiNum("required quantity is not available")
            }
        if(numberOfDrinks>dnum){dispatch({type:"BUY_DRINK", payload: dnum})}
        else{
            setdNum("required quantity is not available")
        }
        setTimeout(()=>{setcNum("");setdNum("");setiNum("")},2000)
        
    }



    return(<div>
        <h1>Number Of Items Available</h1>
    <h2>Cakes: {numberOfCakes}</h2><input type="text"  value={cnum} onChange={(e) => setcNum(e.target.value)} />
    <h2>Icecreams: {numberOfIce}</h2><input type="text" value={inum} onChange={(e) => setiNum(e.target.value)} />
    <h2>Drinks: {numberOfDrinks}</h2><input type="text" value={dnum} onChange={(e) => setdNum(e.target.value)} /><br></br><br></br><br></br>
    <button onClick={handle}>Buy Items</button>
    </div>)
}

export default Cakecontainer