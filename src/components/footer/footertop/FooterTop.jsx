import React from 'react'
import InternshipPlaces from './InternshipPlaces'
import InternshipStreams from "./InternshipStreams"
import JobsPlaces from './JobsPlaces'
import JobsStreams from './JobsStreams'
import PlacementCourses from './PlacementCourses'


const FooterTop = () => {
  return (
    <div className='flex justify-between border-b border-zinc-600'>
        <InternshipPlaces />
        <InternshipStreams />
        <JobsPlaces />
        <JobsStreams />
        <PlacementCourses />
    </div>
  )
}

export default FooterTop