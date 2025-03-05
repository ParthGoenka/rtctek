import React from 'react'

function Card() {
  return (
    <div className="max-w-lg mx-auto bg-[#f0f0f0] rounded-lg shadow-lg rounded-lg overflow-hidden h-110" role='contentinfo'>
    <img src="./capture2.png" alt="visual description of the blog" className="w-full h-64 object-cover" />
    <div className="p-6">
        <h2 className="text-2xl font-semibold text-black mb-2">My Blog</h2>
        <p className="text-black mb-4">This is my first Blog</p>
        <button className="px-6 py-2 bg-[#0000ff] text-white font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Read More</button>
    </div>
</div>
  )
}

export default Card