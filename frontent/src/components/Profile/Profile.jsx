"use client";

import React from 'react'
import WestIcon from "@mui/icons-material/West";
import RideCard from '../RidesCard/RideCard';
import { Avatar, Button } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import WifiIcon from '@mui/icons-material/Wifi';
import { useRouter } from 'next/navigation';
const Profile = () => {
  const router=useRouter()

    const goBack=()=>{
        router.back()
    }
  return (
    <div className='px-2 lg:px-5'>
      <div className=" px-2 lg:px-5 py-2">
        <WestIcon className='cursor-pointer' onClick={goBack}/>
      </div>
      <div className='flex flex-col items-center space-y-2'>
      <Avatar
            alt="Remy Sharp"
            src="https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721_640.jpg"
          />
          <p>Code With Zosh</p>
          <p>+91-9023379725</p>
      </div>
      <div className='border rounded-sm mt-5'>
        <RideCard/>
        <div className='flex flex-col items-center p-3'>
          <Button variant="text" >See all rides</Button>
        </div>
        
      </div>

      <div className="border mt-5">
        <div className='flex items-center p-3 border-b'>
          <AccountBalanceWalletIcon className='text-green-600'/>
          <p className='ml-4'>ola money</p>
        </div>
        <div className='flex items-center p-3 border-b'>
          <ContactPhoneIcon/>
          <p className='ml-4'>Emergency Contact</p>
        </div>
        <div className='flex items-center p-3'>
          <WifiIcon/>
          <p className='ml-4'>Ola Wi-Fi Credentials</p>
        </div>
      </div>

      <div className='mt-5'>
        <Button className="w-full bg-red-500 text-white" color='error' variant='contained'>Logout</Button>
      </div>
    </div>
  )
}

export default Profile