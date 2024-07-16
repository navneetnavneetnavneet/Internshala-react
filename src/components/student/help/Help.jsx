import React from 'react'
import Heading from './Heading'
import Card from './Card'
import { useSelector } from 'react-redux';

const Help = () => {
  const {student} = useSelector((state) => state.studentReducer);
  return (
    <div className='w-full h-screen px-[10%] py-10'>
      <Heading firstName={student.firstName} />
      <Card />
    </div>
  )
}

export default Help