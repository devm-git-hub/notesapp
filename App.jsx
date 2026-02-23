import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <form className='flex items-start flex-col gap-4 p-4'>
        <input
         type="text" 
         placeholder="Enter a Note Heading" 
         className="px-5 w-1/2 py-2 border-2 rounded"/>
        <input 
        type="text" 
        placeholder="Write Details" 
        className="px-5 w-1/2 h-20 py-2 border-2 rounded"/>
        <button className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add Note</button>
      </form>
    </div>
  )
}

export default App
