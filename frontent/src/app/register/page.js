"use client"
import React from 'react'
import {Grid,TextField,Button} from '@mui/material'
import Layout from '@/components/Layout/Layout'
import Register from '@/components/Auth/Register'
const page = () => {
  return (
    <div>
         <Layout children={<Register/>}></Layout>
    </div>
  )
}

export default page