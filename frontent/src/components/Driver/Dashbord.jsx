"use client";
import React, { useEffect, useState } from "react";
import DriversRide from "./DriversRide";
import RideCard from "../RidesCard/RideCard";
import BlockIcon from "@mui/icons-material/Block";
import { Card, CardHeader, useStepContext } from "@mui/material";
import AllocatedRideCard from "./AllocatedRideCard";
import { getUser } from "@/Redux/Auth/Action";
import { useDispatch, useSelector } from "react-redux";

const Dashbord = () => {
  const [isCurrentRide, setIsCurrentRide] = useState(false);
  const [isAllocated,setIsAllocated]=useState(false);
  const {auth,driver}=useSelector(store=>store);
  const dispatch=useDispatch();
  const jwt = localStorage.getItem("jwt");

  useEffect(()=>{
    dispatch(getUser(jwt))
      },[])

      useEffect(() => {
        const intervalId = setInterval(() => {
          // dispatch(yourActionCreator());
        
          dispatch(getAllocatedRides(auth.user?.id))
    
    
        }, 5000); 
    
        return () => {
          clearInterval(intervalId);
        };
      }, [auth.user?.id]);

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
       
        {driver.allocated.map((ride)=> <AllocatedRideCard ride={ride} />)}

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
