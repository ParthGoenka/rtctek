import React,{ useState } from 'react'
import './App.css'
import Header from './components/header'
import Button from './components/button'
import Display from './components/Display'
function App() {

  return (
    <>
      <div>
        <Header />
        <Display />
        <Button name={"Increment"} />
        <Button name={"Decrement"} />
      </div>
    </>
  )
}

export default App
