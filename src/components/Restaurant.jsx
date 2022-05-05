import React from "react";
import { Link } from "react-router-dom";

const Restaurant = ({ restaurant, restaurants }) => {
  const cardImage = restaurant?.photo?.images?.medium?.url;
  return (
    <Link
      to={`/restaurant/location/${restaurant?.location_id}`}
      className="col  text-dark text-decoration-none"
    >
      <div className="card restaurant-card">
        <img src={cardImage} alt="" className="card-img-top card-img" />
        <div className="card-body">
          <div className="fs-5">{restaurant?.name}</div>
          <p className="fw-bold">
            Address: <span className="fw-normal">{restaurant?.address}</span>
          </p>
          <div className="rating-price d-flex justify-content-between align-items-center">
            <h6 className="text-warning"> Rating {restaurant?.rating}</h6>
            <h6>Price {restaurant?.price}</h6>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Restaurant;
