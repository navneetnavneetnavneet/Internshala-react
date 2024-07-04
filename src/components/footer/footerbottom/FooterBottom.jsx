import React from 'react'
import BottomLeft from './BottomLeft'
import BottomRight from './BottomRight'

const FooterBottom = () => {
  return (
    <div className='w-full flex items-center justify-between mt-5'>
        <BottomLeft />
        <BottomRight />
    </div>
  )
}

export default FooterBottom