import { createStore } from "redux";
import { applyMiddleware } from "redux";
import  {thunk}  from "redux-thunk";
import axios from 'axios';

const InitialState = {
    loading:false,
    users:[],
    error:""
}

const USER_REQUEST="USER_REQUEST";
const USER_SUCCESS="USER_SUCCESS";
const USER_FAIL="USER_FAIL";

export const userRequest = () => {
    return({
        type:USER_REQUEST,
        payload:"Loading : ⏳"
})
}

export const userSuccess = (users) => {
    return({
        type:USER_SUCCESS,
        payload:users
})
}

export const userFail = (error) => {
    return({
        type:USER_FAIL,
        payload:error
})
}

const reducerfn = (state=InitialState,action) => {
    switch(action.type)
    {
        case(USER_REQUEST):{
            return{
                loading:true,
                users:[],
                error:action.payload
            }}
        case(USER_SUCCESS):{
            return{loading:false,
                users:action.payload,
                error:""
            }}
        case(USER_FAIL):{
            return{loading:false,
                users:[],
                error:action.payload
            }
        }
        default:
      return state;
    }
} 

export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: USER_REQUEST, payload: "Loading" }); 

    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users"); 
      dispatch({ type: USER_SUCCESS, payload: response.data }); 
    } catch (error) {
      dispatch({ type: USER_FAIL, payload: error.message }); 
    }
  };
};


export const store = createStore(reducerfn,applyMiddleware(thunk));


