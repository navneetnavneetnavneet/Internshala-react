import React from 'react'

const StudentDetails = (props) => {
  const fullName = Array.of(props.firstName, props.lastName).join(" ");

  return (
    <div className='w-full px-[10%] py-10'>
        <h1 className='text-3xl font-semibold'>Hi, {fullName}!🤚</h1>
        <h3 className='text-xl font-normal mt-3'>Let’s help you land your dream career</h3>
    </div>
  )
}

export default StudentDetails