import React from 'react'
import Login from "./login"
import Home from "./Home"
import SignUp from "./SignUp"
import BlogForm from "./BlogForm"
import { createStackNavigator } from '@react-navigation/stack';
function index() {
  
  const Stack = createStackNavigator();
  return (
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Form" component={BlogForm} />
          </Stack.Navigator>
  )
}

export default index
