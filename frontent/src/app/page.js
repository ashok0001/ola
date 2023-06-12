"use client";
import Image from 'next/image'
import {Grid,TextField,Button} from '@mui/material'
import Layout from '@/components/Layout/Layout';
import HomeComponets from '@/components/HomeComponents/HomeComponets';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from '@/Redux/Auth/Action';
import { getAllocatedRides, getDriversCurrentRide } from '@/Redux/Driver/Action';

export default function Home() {



  return (
    <main className="h-screen">

     <Layout children={<HomeComponets/>}></Layout>
     
    </main>
  )
}
