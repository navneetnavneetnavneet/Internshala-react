import React from 'react'

const BottomLeft = () => {
  return (
    <div className='flex items-center gap-5 text-white/90'>
      <button className='flex items-center justify-center gap-2 px-4 py-2 border rounded text-white/90'>
      <i className="text-[1.4rem] ri-google-play-line"></i>
        Get Android App
      </button>
      <i className="text-[1.4rem] ri-instagram-line"></i>
      <i className="text-[1.4rem] ri-twitter-line"></i>
      <i className="text-[1.4rem] ri-youtube-fill"></i>
      <i className="text-[1.4rem] ri-linkedin-line"></i>
    </div>
  )
}

export default BottomLeft