"use client";
import React from "react";
import { Grid, TextField, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import WestIcon from "@mui/icons-material/West";

const Login = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <div className="py-10">
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

      <form className="z-50 h-full p-5">
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

        <Button
          variant="contained"
          className="z-10 bg-blue-700 py-4 w-full"
          type="submit"
        >
          Submit
        </Button>
      </form>
<div className="flex w-full justify-center">
  <p className="flex items-center mt-5 text-center">Don't Have Account Register <Button onClick={()=>router.push("register")} className="ml-5">Register</Button></p>
</div>
      
    </div>
  );
};

export default Login;
