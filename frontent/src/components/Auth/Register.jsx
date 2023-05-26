"use client";
import React from "react";
import { Grid, TextField, Button } from "@mui/material";
const Register = () => {
  return (
    <div>
      <div className="flex items-center px-2 lg:px-5 py-2">
        <WestIcon onClick={goBack} className="cursor-pointer" />
        {/* <img className="text-center w-full font-bold text-xl">Login</img> */}
        <div className="w-full  flex justify-center">
          <img
            className="h-10"
            src="https://accounts.olacabs.com/en-in/images/ola-logo.png"
            alt=""
          />
        </div>
      </div>
      <form className="h-full p-5">
        <TextField
          label="User Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Mobile Number"
          type="tel"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" className="z-10" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Register;
