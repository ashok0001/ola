"use client"
import Register from '@/components/Auth/Register'
import Layout from '@/components/Layout/Layout'
import React from 'react'

const page = () => {
  return (
    <Layout children={<Register/>}>

    </Layout>
  )
}

export default page