import React from "react";
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
         }
        
          return (
            <div>
              <h1>Users</h1>
              {errormsg && <p>{errormsg}</p>}
              <ol>
                {users.map((user) => (
                  <li key={user.id}><h3>{user.username}&nbsp;-&nbsp;{user.name}</h3></li> 
                ))}
              </ol>
              <button onClick={handle}>Get Users</button>
              
            </div>
          );}
        
        

export default User;