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
import { useDispatch, useSelector } from "react-redux";
import { store } from "@/Redux/Store";
import { searchLocation } from "@/Redux/Ride/Action";
import SearchResult from "./SearchResult";

const HomeComponets = () => {

  const [pickupLocation, setPickupLocation] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("");
  const {auth,ride}=useSelector(store=>store);
  const [pickupLocationResult,setPickupLocationResult]=useState(false);
  const [destinationLocationResult,setDestinationLocationResult]=useState(false);

  const dispatch=useDispatch();

  // console.log("store ----- ",auth," -------- ride -------- ",ride)

  const [location, setLocation] = useState({
    pickupLocation: "p",
    destinationLocation: "d",
  });

  const handlePickupLocationChange = (event) => {
    setPickupLocation(event.target.value);
    dispatch(searchLocation(event.target.value));
    setPickupLocationResult(true);
  };

  const handleDestinationLocationChange = (event) => {
    setDestinationLocation(event.target.value);
    dispatch(searchLocation(event.target.value));
    setDestinationLocationResult(true);
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;    
  };

  const handleSearchLocation=(query)=>{
    
  }
  
  console.log(pickupLocation,destinationLocation)
  return (
    <div className="w-full">
      <div>
        <Navbar />
      </div>

      <div className="px-3 lg:px-5 mt-10">
        <from className=" space-y-5 -z-10">
          <div className="border p-2 flex items-center relative">
            <p className="pr-3">From</p>

            <input
              name="pickupLocation"
              placeholder="Enter Pickup Location"
              value={pickupLocation}
              onChange={handlePickupLocationChange}
              className="border-none outline-none "
            />
            {(pickupLocation && ride.results.length>0) && <div className="absolute top-10 left-0">
              <SearchResult latitude_key={"pickup_lattitude"} longitude_key={"pickup_longitude"}/>
            </div>}
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
            className="-z-10 bg-blue-700 w-full py-2"
            type="submit"
          >
            Submit
          </Button>
        </from>
      </div>

      <div className="-z-10 px-2 lg:px-5 mt-5">
        <p className="py-5 text-sm ">Available Cabs</p>
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
