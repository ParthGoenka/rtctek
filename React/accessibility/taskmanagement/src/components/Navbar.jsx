import React from 'react'

function Navbar() {
  return (
    <div className="bg-[#303030] text-white p-4" role='navigation'>
    <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
            <img src='./capture2.png' alt="Accessibility App Logo" className="h-10 w-10 object-cover" />
            <h1 className="text-2xl font-semibold">Accessibility App</h1>
        </div>
        
        <div className="hidden md:flex space-x-6">
            <button className="px-4 py-2 bg-[#5050ff] text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Login</button>
            <button className="px-4 py-2 bg-[#005000] text-white rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">Signup</button>
        </div>

        <div className="md:hidden">
            <button className="text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </div>
</div>

  )
}

export default Navbar