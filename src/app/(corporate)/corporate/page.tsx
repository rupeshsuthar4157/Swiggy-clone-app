import Header from "@/app/(corporate)/components/Header"
import React from 'react'
import HeroSection from "../components/HeroSection"
import Ipo from "../components/Ipo"
import Get from "../components/Get"
import Industry from "../components/Industry"
import SwiggyJourney from "../components/SwiggyJourney"
import Teame from "../components/Team"
import Careers from "../components/Careers"
import SwiggyblogHD from "../components/SwiggyblogHD"
import Scan from "../components/Scan"
import GetInTouch from "../components/GetInTouch"
import Footer from "@/app/components/Header/Footer"

const page = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <Ipo />
            <Get />
            <Industry />
            <SwiggyJourney />
            <Teame />
            <Careers />
            <SwiggyblogHD />
            <Scan />
            <GetInTouch />
            <Footer />
        </div>
    )
}

export default page
