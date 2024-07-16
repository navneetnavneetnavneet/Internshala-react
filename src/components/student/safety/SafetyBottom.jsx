import React from 'react'

const SafetyBottom = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold text-zinc-600'>We are here to help</h1>
      <p className='text-zinc-600 my-5 text-lg'>If you have encountered any such suspicious activity, please let us know.</p>
      <button className="px-4 py-2 rounded bg-[#00A5EC] hover:bg-[#0d95cf] tracking-tight font-semibold text-white">
        Report a comlaint
      </button>
    </div>
  )
}

export default SafetyBottom