import React from "react";
import { useParams } from "react-router-dom";
import { useGetRestaurantsDetailsQuery } from "../services/travelApi";

const RestaurantDetails = () => {
  const { locationId } = useParams();
  const { data } = useGetRestaurantsDetailsQuery(locationId);
  console.log(data);
  return <div className="container">RestaurantDetails {locationId}</div>;
};

export default RestaurantDetails;
