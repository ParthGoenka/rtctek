import { useSelector } from "react-redux"

const Display=()=>{
    const counter = useSelector(store => store.counter);
    return(<h3>Value:{counter}</h3>)
}
export default Display