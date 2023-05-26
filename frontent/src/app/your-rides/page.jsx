"use client"
import Layout from '@/components/Layout/Layout'
import Rides from '@/components/Ride/Rides'
import React from 'react'

const page = () => {
  return (
    <div>
        <Layout children={<Rides/>}/>
    </div>
  )
}

export default page