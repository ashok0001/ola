"use client";
import { Avatar, Button } from "@mui/material";
import React from "react";

const AllocatedRideCard = () => {
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
              Malad, Daftary Road, Malad East, P/N Ward, Zone 4, Mumbai, Mumbai
              Suburban, Maharashtra, 400097, India
            </p>
            <p className="opacity-60 text-xs">
              Gokuldham, P/S Ward, Zone 4, Mumbai, Mumbai Suburban, Maharashtra,
              400063, India
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between pl-5">
         <Button className="bg-green-700" variant="contained" color="success">Accept</Button>
         <Button className="bg-red-600" variant="contained" color="error">Decline</Button>
      </div>
   </div>
  );
};

export default AllocatedRideCard;
