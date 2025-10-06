import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Carddeneout'
import Scan from '../components/Header/Scan'
import Heading from './Heading'
import Footer from '../components/Header/Footer'
import Category from './Category'

const page = () => {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Category/>
      <Card/>
      <Scan/>
      <Heading/>
      <Footer/>
      
    </div>
  )
}

export default page