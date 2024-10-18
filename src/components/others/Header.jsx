import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-semibold'>Hello,<br /> <span className='text-3xl font-semibold'>Sujan👋</span> </h1>
        <button className='px-5 py-2 bg-red-600 rounded-sm text-lg font-medium' >Log Out</button>
    </div>
  )
}

export default Header