import React from 'react'

const navbar = () => {
  return (
    <nav className='flex justify-around bg-slate-600 text-white py-3'>
        <div className="logo">
            <span className='font-bold text-xl mx-8 my-2'>TaskPE</span>
        </div>
        <ul className="flex gap-8 mx-9">
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default navbar
