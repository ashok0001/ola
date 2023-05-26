"use client"
import ConformRide from '@/components/ConformRide/ConformRide'
import Layout from '@/components/Layout/Layout'
// import { useRouter } from 'next/router'
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
  // const router = useRouter();

  // const goBack=()=>{
  //     router.back()
  // }

  return (
    <div>
        <Layout children={<ConformRide />}></Layout>
    </div>
  )
}

export default page