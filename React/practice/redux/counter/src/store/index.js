import {createStore} from "redux";

const InitialValue = {counter:0};

const counterstore= createStore((store=InitialValue,action)=>{
    if(action.type == "Increment")
    {
        return {counter:store.counter+1};
    }
    else if(action.type == "Decrement")
    {
        return {counter:store.counter-1};
    }
    return store;
})

export default counterstore