import React from 'react'
import Login from './components/login'
import SignUp from './components/signup'

function Home() {
  return (
    <div className="bg-gray-300 flex gap-10 justify-center items-center mx-auto min-w-screen min-h-screen my-auto">
        <Login/>
        <SignUp/>
    </div>
  )
}

export default Home