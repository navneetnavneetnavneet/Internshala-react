import React from 'react'
import Navbar from '../navbar/Navbar'
import PersonalDetails from './personal-details/PersonalDetails'
import Footer from '../footer/Footer'

const Profile = () => {
  return (
    <div>
      <Navbar />
      <PersonalDetails />
      <Footer />
    </div>
  )
}

export default Profile