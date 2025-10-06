import React from 'react'
import Header from '../corporate/components/Header'
import BusinessFistText from './components/BusinessFistText'
import Card from './components/Card'
import Scan from '../corporate/components/Scan'
import Footer from '@/app/components/Header/Footer'

const page = () => {
  return (
    <div>
    <Header/>
    <BusinessFistText/>
    <Card/>
    <Scan/>
    <Footer/>
    </div>
  )
}

export default page