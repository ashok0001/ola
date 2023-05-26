"use client"
import React from 'react'
import {Grid,TextField,Button} from '@mui/material'
const Register = () => {
  return (
    <div>
         <form className='h-full p-5'>
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
      <Button variant="contained" className='z-10' type="submit">
        Submit
      </Button>
    </form>
    </div>
  )
}

export default Register