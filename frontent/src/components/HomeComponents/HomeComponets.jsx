"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputBase,
  Paper,
  TextField,
  Typography,
  Backdrop,
} from "@mui/material";
import AvialableCab from "./AvialableCab";
import { useDispatch, useSelector } from "react-redux";
import { store } from "@/Redux/Store";
import { findRideById, requestRide, searchLocation } from "@/Redux/Ride/Action";
import SearchResult from "./SearchResult";
import { useRouter, useSearchParams } from "next/navigation";

const HomeComponets = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("");
  const { auth, ride } = useSelector((store) => store);
  const [pickupLocationResult, setPickupLocationResult] = useState(false);
  const [destinationLocationResult, setDestinationLocationResult] =
    useState(false);
  const searchParams = useSearchParams();
  const [activeField, setActiveField] = useState(null);
  const router = useRouter();

  const dispatch = useDispatch();

  const [location, setLocation] = useState({
    pickupLocation: "p",
    destinationLocation: "d",
  });

  const handlePickupLocationChange = (event) => {
    setPickupLocation(event.target.value);
    dispatch(searchLocation(event.target.value));
  };

  const handleDestinationLocationChange = (event) => {
    setDestinationLocation(event.target.value);
    dispatch(searchLocation(event.target.value));
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    console.log("handle on submit ---- ");

    const pickupLatitude = searchParams.get("pickup_lattitude");
    const pickupLongitude = searchParams.get("pickup_longitude");
    const destinationLatitude = searchParams.get("destination_lattitude");
    const destinationLongitude = searchParams.get("destination_longitude");
    const pickupArea = searchParams.get("pickup_area");
    const destinationArea = searchParams.get("destination_area");

    const location = {
      pickupLatitude,
      pickupLongitude,
      destinationLatitude,
      destinationLongitude,
      pickupArea,
      destinationArea,
    };

    dispatch(requestRide({ location, router }));

    console.log("handle submit location - ", location);
  };

  useEffect(() => {
    if (ride.ride?.id) {
      const intervalId = setInterval(() => {
        // dispatch(yourActionCreator());

        dispatch(findRideById(ride.ride.id));
      }, 2000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [ride.ride]);

  useEffect(() => {
    if (ride.rideDetails?.status == "ACCEPTED") {
      router.push(`/ride-detail/${ride.rideDetails.id}`);
    }
  }, [ride.rideDetails]);

  const onFocused = (e) => {
    setActiveField(e.target.name);
  };

  console.log(pickupLocation, destinationLocation);
  return (
    <div className="w-full">
      <div>
        <Navbar />
      </div>

      <div className="px-3 lg:px-5 mt-10">
        <form onSubmit={handleOnSubmit} className=" space-y-5 -z-10">
          <div className="border p-2 flex items-center relative">
            <p className="pr-3">From</p>

            <input
              name="pickupLocation"
              placeholder="Enter Pickup Location"
              value={pickupLocation}
              onChange={handlePickupLocationChange}
              className="border-none outline-none "
              onFocus={onFocused}
              // onBlur={()=>setIsSearchResult(false)}
            />
            {activeField === "pickupLocation" && ride.results?.length > 0 && (
              <div className="">
                <SearchResult
                  setActiveField={setActiveField}
                  latitude_key={"pickup_lattitude"}
                  longitude_key={"pickup_longitude"}
                  area_key={"pickup_area"}
                />
              </div>
            )}
          </div>
          <div className="border p-2 flex items-center relative">
            <p className="pr-3">To</p>

            <input
              name="destinationLocation"
              placeholder="Enter Destination Location"
              value={destinationLocation}
              onChange={handleDestinationLocationChange}
              className="border-none outline-none "
              onFocus={onFocused}
            />
            {activeField === "destinationLocation" &&
              ride.results?.length > 0 && (
                <div className="">
                  <SearchResult
                    setActiveField={setActiveField}
                    latitude_key={"destination_lattitude"}
                    longitude_key={"destination_longitude"}
                    area_key={"destination_area"}
                  />
                </div>
              )}
          </div>

          <Button
            className=""
            sx={{
              width: "100%",
              backgroundColor: "blue",
              padding: ".7rem 0rem",
            }}
            variant="contained"
            type="submit"
            // onClick={handleOnSubmit}
          >
            Find Driver
          </Button>
        </form>
      </div>

      <div className="-z-10 px-2 lg:px-5 mt-5">
        <p className="py-5 text-sm ">Available Cabs</p>
        <div className="space-y-5">
          <AvialableCab />
          <AvialableCab />
          <AvialableCab />
          <AvialableCab />
        </div>
      </div>

     
            <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={ride.rideDetails?.status==="REQUESTED"}
            // onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
      
    </div>
  );
};

export default HomeComponets;
