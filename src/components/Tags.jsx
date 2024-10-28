import React from 'react'

const Tags = () => {
  return (
    <div className="tags-container w-full p-4 border-b-2 border-b-orange-950 text-white">
      <ul className="flex gap-5 px-5 text-orange-500">
            <li className='cursor-pointer text-orange-100 hover:text-orange-700 transition-colors'>All Characters</li>
            <li className='cursor-pointer hover:text-orange-700 transition-colors'>Characters by id</li>
            <li className='cursor-pointer hover:text-orange-700 transition-colors'>Clans</li>
            <li className='cursor-pointer hover:text-orange-700 transition-colors'>Techniques</li>
            <li className='cursor-pointer hover:text-orange-700 transition-colors'>Search by team</li>
            <li className='cursor-pointer hover:text-orange-700 transition-colors'>Search by name</li>
        </ul>
    </div>
  )
}

export default Tags