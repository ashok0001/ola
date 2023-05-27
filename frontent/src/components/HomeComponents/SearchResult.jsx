"use client"
import { store } from '@/Redux/Store';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SearchResultCard from './SearchResultCard';
import { Divider } from '@mui/material';

const SearchResult = ({latitude_key ,longitude_key}) => {
    const dispatch= useDispatch();
    const {ride}=useSelector(store=>store);

  return (
    <div className='bg-white z-50 rounded-md p-2 border max-h-[50vh] overflow-y-scroll shadow-md hide-scrollbar'>
        {ride.results.map((item)=> <> <SearchResultCard item={item} latitude_key={latitude_key} longitude_key={longitude_key} /> <Divider/></>)}
    </div>
  )
}

export default SearchResult