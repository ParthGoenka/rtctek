import React from 'react';
import Navbtn from './nav-btn';

function Navbar(){
    return(
        <div className='flex flex-wrap justify-center text-lg p-5'>
            <Navbtn name="Home" />
            <Navbtn name="Features" />
            <Navbtn name="Pricing" />
            
        </div>
    )
}
export default Navbar