'use client'
import React from 'react'
import CarSection from './CarSection'
import HomeNavbar from './HomeNavbar'
import Banner from './Banner'
import CarVideoSection from './CarVideoSection'
import Footer from './Footer'

const page = () => {
  return (
    <div>
        <HomeNavbar/>
        <Banner/>
        <CarVideoSection/>
        <Footer/>
        {/* <CarSection/> */}
    </div>
  )
}

export default page