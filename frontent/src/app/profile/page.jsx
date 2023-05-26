"use client"
import Layout from '@/components/Layout/Layout'
import Profile from '@/components/Profile/Profile'
import React from 'react'

const page = () => {
  return (
    <div>
        <Layout children={<Profile/>}></Layout>
    </div>
  )
}

export default page