"use client"
import Layout from '@/components/Layout/Layout'
import RideDetails from '@/components/RideDetails/RideDetails'
import React from 'react'

const page = () => {
  return (
    <div>
        <Layout children={<RideDetails/>}></Layout>
    </div>
  )
}

export default page