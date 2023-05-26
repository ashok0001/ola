"Client"
import Dashbord from '@/components/Driver/Dashbord'
import Layout from '@/components/Driver/Layout'
import React from 'react'

const page = () => {
  return (
    <div>
      <Layout Children={<Dashbord/>} ></Layout>
    </div>
  )
}

export default page