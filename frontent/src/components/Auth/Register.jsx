"use client";
import React from "react";
import { Grid, TextField, Button } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

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
        <Button
          className="w-full py-4 bg-blue-700"
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </form>

      <div className="flex flex-col w-full items-center justify-center space-y-2">
        <p className="flex items-center mt-5 text-center">
          If you have already account ?
          <Button onClick={() => router.push("login")} className="ml-5">
            Login
          </Button>
        </p>
        <p className="flex items-center mt-5 text-center">
          Register as driver
          <Button onClick={() => router.push("/driver/register")} className="ml-5">
            Register
          </Button>
        </p>
      </div>
    </div>
  );
};

export default Register;
