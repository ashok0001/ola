"use client";
import Image from 'next/image'
import {Grid,TextField,Button} from '@mui/material'
import Layout from '@/components/Layout/Layout';
import HomeComponets from '@/components/HomeComponents/HomeComponets';

export default function Home() {
  return (
    <main className="h-screen">

     <Layout children={<HomeComponets/>}></Layout>
     
    </main>
  )
}
