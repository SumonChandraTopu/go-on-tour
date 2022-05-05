import React, { useState } from "react";
import { useGetRestaurantsQuery } from "../services/travelApi";
import Restaurant from "./Restaurant";

const Restaurants = () => {
  const [locationId, setLocationId] = useState(293919);
  const {
    data: restaurants,
    isFetching,
    isError,
  } = useGetRestaurantsQuery(locationId);
  console.log(restaurants);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocationId(e.target[0].value);
  };
  return (
    <div className="container">
      <h3 className="text-center py-2 fs-1">Restaurants</h3>
      <form onSubmit={handleSubmit} className="input-group w-50 mx-auto">
        <input type="text" placeholder="Location id" className="form-control" />
        <button className="btn btn-outline-info" type="submit">
          Search
        </button>
      </form>
      {isFetching && <h3>Loading ....</h3>}
      {restaurants?.errors && restaurants?.errors[0]?.message}
      <div className="hotels-container row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 row-cols-1  g-3 my-3">
        {restaurants?.data?.map((restaurant) => (
          <Restaurant
            key={restaurant?.website}
            restaurant={restaurant}
            restaurants={restaurants}
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
