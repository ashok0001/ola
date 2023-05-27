"use client";

import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useRouter } from "next/navigation";

const SearchResultCard = ({ item,latitude_key ,longitude_key }) => {
    const router=useRouter();

    const handleSelect=(latitude_key ,longitude_key, latitude,longitude)=>{
        router.replace({
            pathname: router.pathname,
            query: { [latitude_key]: latitude, [longitude_key]: longitude },
          });
    }
  return (
    <div className="flex items-center py-2 z-10 bg-white">
      <div className="pr-5">
        <LocationOnIcon />
      </div>
      <div>
        <p className="font-semibold">{item?.display_name.split(" ")[0]}</p>
        <p className="font-semibold opacity-60">
          {item?.display_name}
        </p>
      </div>
    </div>
  );
};

export default SearchResultCard;
