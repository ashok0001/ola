"use client"
import React from 'react'
import {Grid,TextField,Button} from '@mui/material'
const Login = () => {
  return (
    <div>
         <form className='z-50 h-full p-5'>
     
    
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
     
      <Button variant="contained" className='z-10 bg-blue-700 py-4 w-full' type="submit">
        Submit
      </Button>
    </form>
    </div>
  )
}

export default Login