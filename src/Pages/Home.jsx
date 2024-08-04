import React from 'react'

function Home() {
  return (
    <div className='grid grid-cols-4 p-3'>
      <div className='bg-red-300 h-screen hidden md:block'>Genre</div>
      <div className='col-span-4 md:col-span-3 bg-slate-300 h-screen'>Game List</div>
    </div>
  )
}

export default Home
