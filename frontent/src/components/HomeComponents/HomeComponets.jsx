"use client";

import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import {
  Box,
  Button,
  FormControl,
  InputBase,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import AvialableCab from "./AvialableCab";
import { useSelector } from "react-redux";
import { store } from "@/Redux/Store";

const HomeComponets = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("");
  const {auth}=useSelector(store=>store);

  console.log("store ----- ",auth)

  const [location, setLocation] = useState({
    pickupLocation: "p",
    destinationLocation: "d",
  });

  const handlePickupLocationChange = (event) => {
    setPickupLocation(event.target.value);
  };

  const handleDestinationLocationChange = (event) => {
    setDestinationLocation(event.target.value);
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;    
  };
  
  console.log(pickupLocation,destinationLocation)
  return (
    <div className="w-full">
      <div>
        <Navbar />
      </div>

      <div className="px-3 lg:px-5 mt-10">
        <from className=" space-y-5">
          <div className="border p-2 flex items-center">
            <p className="pr-3">From</p>

            <input
              name="pickupLocation"
              placeholder="Enter Pickup Location"
              value={pickupLocation}
              onChange={handlePickupLocationChange}
              className="border-none outline-none "
            />
          </div>
          <div className="border p-2 flex items-center">
            <p className="pr-3">To</p>

            <input
              name="destinationLocation"
              placeholder="Enter Destination Location"
              value={destinationLocation}
              onChange={handleDestinationLocationChange}
              className="border-none outline-none "
            />
          </div>

          <Button
            variant="contained"
            className="z-10 bg-blue-700 w-full py-2"
            type="submit"
          >
            Submit
          </Button>
        </from>
      </div>

      <div className="px-2 lg:px-5 mt-5">
        <p className="py-5 text-sm opacity-80">Available Cabs</p>
        <div className="space-y-5">
          <AvialableCab/>
          <AvialableCab/>
          <AvialableCab/>
          <AvialableCab/>
        </div>
        
      </div>
    </div>
  );
};

export default HomeComponets;
