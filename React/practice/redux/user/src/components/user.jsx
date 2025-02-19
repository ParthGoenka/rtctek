import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchData} from "../index"

function User() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users || []);
  const errormsg = useSelector((state) => state.error || "");
          const handle= () => {
            dispatch(fetchData());
          }
          if (!Array.isArray(users)) {
            return( "No users found or invalid data format")
         }else{
        
          return (
            <div>
              <h1>Users</h1>
              {errormsg && <p>{errormsg}</p>}
              {console.log(users)}
              <ul>
                {users.map((user, index) => (
                  <li key={index}><h3>{user.username}&nbsp;-&nbsp;{user.name}</h3></li> 
                ))}
              </ul>
              <button onClick={handle}>Get Users</button>
              
            </div>
          );}
        }
        

export default User;