// import Header from "./components/Header"
import Header from "./components/Header"
import React from 'react'
// import HeroSection from "./components/HeroSection"
import HeroSection from "./components/HeroSection"
// import Ipo from "./components/Ipo"
import Ipo from "./components/Ipo"
// import Get from "../components/Get"
import Get from "./components/Get"
// import Industry from "./components/Industry"
import Industry from "./components/IndustryPioneer"
// import SwiggyJourney from "./components/SwiggyJourney"
import SwiggyJourney from "./components/SwiggyJourney"
// import SwiggyblogHD from "../components/SwiggyblogHD"
import SwiggyblogHD from "./components/SwiggyblogHD"
// import Scan from "./components/Scan"
import Scan from "./components/Scan"
// import GetInTouch from "../components/GetInTouch"
import GetInTouch from "./components/GetInTouch"
import Footer from "@/app/components/Header/Footer"
// import TeamSection from "./components/Team"
import Team from "./components/Team"
// import Careers from "./components/Careers"
import Careers from "./components/Careers"

const page = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <Ipo />
            <Get />
            <Industry />
            <SwiggyJourney/>
            <Team/>
            <Careers/>
            <SwiggyblogHD />
            <Scan />
            <GetInTouch />
            <Footer />
        </div>
    )
}

export default page
