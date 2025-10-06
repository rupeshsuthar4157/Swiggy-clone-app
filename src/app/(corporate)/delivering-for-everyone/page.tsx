import React from 'react'
import Header from '../corporate/components/Header'
import Delevery from './components/Delevery'
import DeleveryCard from './components/DeleveryCard'
import Scan from '../corporate/components/Scan'
import Footer from '@/app/components/Header/Footer'

const page = () => {
  return (
    <div>
        <Header/>
        <Delevery/>
        <DeleveryCard/>
        <Scan/>
        <Footer/>
    </div>
  )
}

export default page