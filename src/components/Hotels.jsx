import React, { useState } from "react";
import { useGetHotelsQuery } from "../services/hotelsApi";
import SingleHotel from "./SingleHotel";
const Hotels = () => {
  const [title, setTitle] = useState("");
  const { data: hotelsData } = useGetHotelsQuery(title);
  console.log("====================================");
  console.log(hotelsData);
  console.log("====================================");
  const hotels = hotelsData?.data;
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle(e.target[0].value);
  };
  return (
    <div>
      <h3>Hotels</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="" />
        <button type="submit">Submit</button>
      </form>
      {hotels?.map((hotel) => (
        <SingleHotel
          key={hotel?.result_object?.name}
          hotelsData={hotelsData}
          hotel={hotel}
        />
      ))}
    </div>
  );
};

export default Hotels;
