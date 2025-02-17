import { useDispatch } from "react-redux"

const Button=(props)=>{

    const dispatch = useDispatch();
    const fn = props.name;
    function handleClick(){
            dispatch({type:fn});
    }

    return (<button onClick={handleClick}>{props.name}</button>)
}
export default Button