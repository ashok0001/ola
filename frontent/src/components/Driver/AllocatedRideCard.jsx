"use client";
import { getAllocatedRides, getDriversCurrentRide } from "@/Redux/Driver/Action";
import { acceptRideAction, declineRideAction } from "@/Redux/Ride/Action";
import { declineRide } from "@/Redux/Ride/ActionCreator";
import { Avatar, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const AllocatedRideCard = ({ride}) => {
  
const {auth}=useSelector(store=>store);
  const dispatch=useDispatch();


  const handleDeclineRide=()=>{
    console.log("decline")
    dispatch(declineRideAction(ride.id))
  }

  const handleAcceptRide=()=>{
    console.log("accept")
    dispatch(acceptRideAction(ride.id))
  }



  
  return (
  
      
      <div className="flex justify-between  p-3">
        <div className="flex items-center">
          <img
            className="w-20 h-20"
            src="https://cdn.pixabay.com/photo/2017/04/06/22/11/car-2209439_640.png"
            alt=""
          />
          <div className="ml-5 space-y-1">
            <p className="text-sm font-semibold">Today 10:08 PM</p>
            <p className="text-xs font-semibold opacity-60">cab KSLW9983</p>
            <p className="opacity-60 text-xs">
             {ride.pikcupArea}
            </p>
            <p className="opacity-60 text-xs">
            {ride.destinationArea}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between pl-5">
         <Button onClick={handleAcceptRide} className="bg-green-700" variant="contained" color="success">Accept</Button>
         <Button onClick={handleDeclineRide} className="bg-red-600" variant="contained" color="error">Decline</Button>
      </div>
   </div>
  );
};

export default AllocatedRideCard;
