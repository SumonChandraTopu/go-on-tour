import React from "react";

const Location = ({ location, locationsData }) => {
  // console.log("====================================");
  // console.log(location);
  // console.log("====================================");
  const { result_object: result } = location;
  return (
    <div className="hotel-container col">
      <div className="card">
        <img
          className="card-img-top card-img"
          src={result?.photo?.images?.medium?.url}
          alt=""
        />
        <div className="card-body">
          <h4 className=" fs-5">
            {result.name} ( {result?.category?.name} )
          </h4>
          <p className="fs-6">{result?.address}</p>
          <p className="location-id">
            Copy the location id ( <span>{result?.location_id}</span> ) to get
            restaurants nearby
          </p>
          <div className="rating d-flex align-items-center justify-content-between p-1">
            <h6 className="text-warning">
              Rating {result?.rating} ( {result?.num_reviews} )
            </h6>
            <p className="bg-success px-2 rounded-pill text-white">
              {result?.open_now_text}
            </p>
          </div>
          <div className="review">{locationsData?.review_snippet?.snippet}</div>
        </div>
      </div>
    </div>
  );
};

export default Location;
