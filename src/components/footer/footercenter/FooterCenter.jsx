import React from 'react'
import About from './About'
import Team from './Team'
import Condition from './Condition'
import Sitemap from './Sitemap'

const FooterCenter = () => {
  return (
    <div className='w-full flex justify-start gap-28 pt-5'>
      <About />
      <Team />
      <Condition />
      <Sitemap />
    </div>
  )
}

export default FooterCenter