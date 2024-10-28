import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full h-[10vh] flex justify-between text-white items-center px-10 border-b-2 border-b-orange-950">
      <div className="navLeft text-orange-500 text-2xl flex gap-5">
        <h1>Naruto universe</h1>
        <img src="./weapon.png" alt="logo" className="w-8 h-8 " />
      </div>
      <div className="navRight">
        <ul className="flex gap-5">
            <li className='cursor-pointer text-orange-500 hover:text-orange-700 transition-colors'>Home</li>
            <li className='cursor-pointer text-orange-500 hover:text-orange-700 transition-colors'>About</li>
            <li className='cursor-pointer text-orange-500 hover:text-orange-700 transition-colors'>Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar