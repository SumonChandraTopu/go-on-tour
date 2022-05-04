import React from "react";
import { useGetRestaurantsQuery } from "../services/hotelsApi";

const Restaurants = () => {
  const locationId = "293919";
  const { data } = useGetRestaurantsQuery(locationId);
  console.log(data);
  return <div>Restaurants</div>;
};

export default Restaurants;
