import React from 'react'

const CenterDiv = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center px-[10%]'>
        <img src="https://internshala.com/static/images/tgs/my_applications/stt_desktop.png" alt="" />
        <h1 className='text-[2vw] font-bold my-10'>My applications</h1>
        <img src="https://internshala.com/static/images/student/applications/empty_folder.svg" alt="" />
        <h3 className='text-xl font-semibold mt-5 w-1/3 text-center'>Username, You don't have any applications yet.</h3>
        <p className='my-5 w-1/3 text-center tracking-tighter text-zinc-600'>Start applying to boost your career with top hiring companies on Internshala</p>
        <button className='px-4 py-2 rounded bg-[#00A5EC] tracking-tight font-semibold text-white'>Browser internships</button>
    </div>
  )
}

export default CenterDiv