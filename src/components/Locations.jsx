import React, { useState } from "react";
import { useGetLocationsQuery } from "../services/travelApi";
import Location from "./Location";
const Locations = () => {
  const [title, setTitle] = useState("");
  const { data: locationsData, isFetching } = useGetLocationsQuery(title);

  const locations = locationsData?.data;
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle(e.target[0].value);
  };

  return (
    <div className="container">
      <h3 className="text-center py-2 fs-1">Locations</h3>
      <form onSubmit={handleSubmit} className="input-group w-50 mx-auto">
        <input
          type="text"
          placeholder="City, town, area"
          className="form-control"
        />
        <button className="btn btn-outline-info" type="submit">
          Search
        </button>
      </form>
      {isFetching && <h3>Loading ....</h3>}
      <div className="hotels-container row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 row-cols-1  g-3 my-3">
        {locations?.map((location) => (
          <Location
            key={location?.result_object?.name}
            locationsData={locationsData}
            location={location}
          />
        ))}
      </div>
    </div>
  );
};

export default Locations;
