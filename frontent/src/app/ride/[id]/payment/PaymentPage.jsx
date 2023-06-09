import { findRideById } from '@/Redux/Ride/Action';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PaymentPage = ({rideId}) => {

    const dispatch=useDispatch();
    const router=useRouter()
    const {ride}=useSelector(store=>store);
  
    useEffect(()=>{
      dispatch(findRideById(rideId))
    },[rideId])

    
    
  return (
    <div className='px-20 flex flex-col justify-center h-[99vh] border '>
        <div className='border border-slate-600 rounded-md p-5'>
            <p className='text-center text-xl font-semibold py-2'>Payment Details</p>
            
            <div className='flex justify-between py-2 items-center'>
            <p className='font-semibold opacity-60'>Total Faire</p>
            <p className='text-blue-700 font-semibold'>Rs.{ride.ride?.fare}</p>
            </div>
            <div className='flex justify-between py-2 items-center'>
            <p className='font-semibold opacity-60'>Distance</p>
            <p className='text-blue-700 font-semibold'>{ride.ride?.distance}</p>
            </div>
            <div className='flex justify-between py-2 items-center'>
            <p className='font-semibold opacity-60'>Duration</p>
            <p className='text-blue-700 font-semibold'>{ride.ride?.duration}</p>
            </div>
            <div className='flex justify-between py-2 items-center'>
            <p className='font-semibold opacity-60'>Total Faire</p>
            <p className='text-blue-700 font-semibold'>Rs.20</p>
            </div>
            <div className='flex justify-between py-2 items-center'>
            <p className='font-semibold opacity-60'>Total Faire</p>
            <p className='text-blue-700 font-semibold'>Rs.20</p>
            </div>
            <div className='mt-5'>
                <Button variant='contained' className='w-full'>Pay Now</Button>
            </div>
        </div>
    </div>
  )
}

export default PaymentPage