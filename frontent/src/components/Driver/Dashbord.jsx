"use client";
import React, { useState } from "react";
import DriversRide from "./DriversRide";
import RideCard from "../RidesCard/RideCard";
import BlockIcon from "@mui/icons-material/Block";
import { Card, CardHeader, useStepContext } from "@mui/material";
import AllocatedRideCard from "./AllocatedRideCard";

const Dashbord = () => {
  const [isCurrentRide, setIsCurrentRide] = useState(false);
  const [isAllocated,setIsAllocated]=useState(false);
  return (
    <div className="">
      <DriversRide />

      <Card className="mt-5  p-5">
        <CardHeader
          title="Current Ride"
          titleTypographyProps={{
            sx: {
              mb: 2.5,
              lineHeight: "2rem !important",
              letterSpacing: "0.15px !important",
            },
          }}
        />
       
        {isCurrentRide && <RideCard />}

        <div className="w-full flex flex-col items-center justify-center py-5">
          
            <BlockIcon className="w-20 h-20" />
            <p className="text-xl font-semibold">
              Currently You Don't Have Any Ride
            </p>
         
        </div>
      </Card>

      <Card className="mt-5 p-5">
        <CardHeader
          title="Allocated To You"
          titleTypographyProps={{
            sx: {
              mb: 2.5,
              lineHeight: "2rem !important",
              letterSpacing: "0.15px !important",
            },
          }}
        />
       
        {!isAllocated && <AllocatedRideCard />}

     {isAllocated &&   <div className="w-full flex flex-col items-center justify-center py-5">
          
            <BlockIcon className="w-20 h-20" />
            <p className="text-xl font-semibold">
            Currently, no ride has been allocated.
            </p>
         
        </div>}
      </Card>
    </div>
  );
};

export default Dashbord;
