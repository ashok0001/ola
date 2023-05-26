"use client";
import { Avatar } from "@mui/material";
import React from "react";

const RideCard = () => {
  return (
  
      
      <div className="flex justify-between shadow-md rounded-s-sm p-3">
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
          <p className="text-green-500">Scedule..</p>
          <Avatar
            alt="Remy Sharp"
            src="https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721_640.jpg"
          />
        </div>
      </div>
   
  );
};

export default RideCard;
