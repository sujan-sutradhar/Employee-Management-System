import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex mt-10  justify-between gap-5'>
        <div className=' w-[45%] py-6 px-10 bg-blue-600 rounded-xl'>
            <h2 className='font-semibold text-2xl'>0</h2>
            <h3 className='text-3xl font-semibold'>New Task</h3>


        </div>
        <div className=' w-[45%] py-6 px-10 bg-green-600 rounded-xl'>
            <h2 className='font-semibold text-2xl'>0</h2>
            <h3 className='text-3xl font-semibold'>New Task</h3>


        </div>
        <div className=' w-[45%] py-6 px-10 bg-yellow-600 rounded-xl'>
            <h2 className='font-semibold text-2xl'>0</h2>
            <h3 className='text-3xl font-semibold'>New Task</h3>


        </div>
        <div className=' w-[45%] py-6 px-10 bg-pink-600 rounded-xl'>
            <h2 className='font-semibold text-2xl'>0</h2>
            <h3 className='text-3xl font-semibold'>New Task</h3>


        </div>
    </div>
  )
}

export default TaskListNumber