import React,{ useState } from 'react';
import Navbar from "./components/navbar";
import Botbtn from './components/botbtn';
import Maindiv from './components/maindiv';
import Sbtn from './components/Sbtn';
function App() {

  return (
    <>
      <div className='bg-lime-200'>
        <Navbar />
        <div className='flex justify-center items-around'>
          <Maindiv heading="Start up 3" title="Forget about code" para="Startup Frameup gives you a complete freedom over our creative process, so you dont have to think about technical aspects. Startup Frameup gives you a complete freedom over our creative process."/>
        </div>
        <div className='flex justify-center items-around mb-10'><Sbtn /><Sbtn /><Sbtn/><Sbtn /><Sbtn /><Sbtn/></div>
        <Botbtn />
      </div>
    </>
  )
}

export default App
