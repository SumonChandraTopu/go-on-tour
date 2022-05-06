import React from "react";
import { useParams } from "react-router-dom";
import { useGetRestaurantsDetailsQuery } from "../services/travelApi";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { ImEarth } from "react-icons/im";
import { MdRateReview } from "react-icons/md";
import Slider from "./Slider";
import { HiStar } from "react-icons/hi";
import { MdCheck } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiFoodMenu } from "react-icons/bi";
import Iframe from "react-iframe";

const RestaurantDetails = () => {
  const { locationId } = useParams();
  const { data: restaurant } = useGetRestaurantsDetailsQuery(locationId);
  return (
    <div className="container">
      <div className="restaurant-container">
        {/* ============= Head ============= */}
        <div className="head">
          <div className="restaurant-title">
            <h2>
              {restaurant?.name}
              <span className="fs-6 px-3 text-info">
                ( {restaurant?.open_now_text} )
              </span>
            </h2>
          </div>
          <div className="restaurant-image">
            <img
              className="img-fluid"
              src={restaurant?.photo?.images?.large?.url}
              alt=""
            />
          </div>
        </div>
        {/* =============== Body ============= */}
        <div className="restaurant-body pt-5">
          <p className="py-2">{restaurant?.description}</p>
          <p>Location: {restaurant?.address}</p>
          <p>
            Ranking position:
            <span className="text-info fw-bold"> {restaurant?.ranking}</span>
          </p>
          <p>
            Price:
            <span className="fw-bold text-info"> {restaurant?.price}</span>
          </p>
          <div className="meal-details">
            <div className="meal-type">
              <p>Meal Type: </p>
              <ul className=" meal-detail">
                {restaurant?.meal_types?.map((item) => (
                  <li key={item?.key}>
                    <BiFoodMenu /> {item?.name},
                  </li>
                ))}
              </ul>
            </div>
            <div className="dishes">
              <p>Dishes:</p>
              <ul className=" meal-detail">
                {restaurant?.dishes?.map((item) => (
                  <li key={item?.key}>
                    <BiFoodMenu /> {item?.name},
                  </li>
                ))}
              </ul>
            </div>
            <div className="cuisines">
              <p>Cuisines:</p>
              <ul className="meal-detail">
                {restaurant?.cuisine.map((item) => (
                  <li key={item?.key}>
                    <BiFoodMenu /> {item?.name},
                  </li>
                ))}
              </ul>
            </div>
            <div className="dietary">
              <p>Dietary Restrictions:</p>
              <ul className="meal-detail">
                {restaurant?.dietary_restrictions.map((restriction) => (
                  <li key={restriction?.key}>
                    <BiFoodMenu /> {restriction?.name},
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* ============= Iframe ============= */}
        {restaurant?.storyboard && (
          <div className="story-board">
            <Iframe url={restaurant?.storyboard?.hd_720p} className="i-frame" />
          </div>
        )}
        {/* ============ Top Reasons =========== */}
        {restaurant?.owners_top_reasons && (
          <div className="top-reasons">
            <h6>{restaurant?.owners_top_reasons?.section_header}</h6>
            <p>
              <i>{restaurant?.owners_top_reasons?.sponsored_by}</i>
            </p>
            {restaurant?.owners_top_reasons?.top_reasons.map((reason) => (
              <div className="reason" key={reason?.review?.review_id}>
                <ul className="reason-ul">
                  <li>
                    <span className="py-3">
                      <MdCheck /> {reason?.header}
                    </span>
                    <span className="fs-6 ms-5 review-id">
                      <CgProfile /> {reason?.review?.screen_name}
                    </span>
                    <p className="fs-6 review-text">{reason?.text}</p>
                  </li>
                </ul>
                <img src={reason?.image_url} className="reason-image" alt="" />
              </div>
            ))}
          </div>
        )}

        {/* ============ Awards ============ */}
        <div>
          <p className="my-3">Awards: </p>
          <p className=" awards row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 row-cols-1  g-3  ">
            {restaurant?.awards.map((award) => (
              <div className="col" key={award?.name}>
                <div className="card">
                  <img
                    src={award?.images?.large}
                    className="card-img-top card-img "
                    alt=""
                  />
                  <div className="card-body">
                    <p className="card-title">
                      {award?.display_name} in {award?.year}
                    </p>
                    <p className="fw-bold">Type: {award?.award_type}</p>
                  </div>
                </div>
              </div>
            ))}
          </p>
        </div>
        {/* =========== Reviews ( Slider ) ============ */}
        <div className="reviews">
          <p>Reviews: </p>
          <Slider restaurant={restaurant} />
        </div>
        {/* ============ Ratings ============== */}
        <div className="rating py-3">
          <p>Ratings: </p>
          <div className="ratings-container">
            <div className="stars">
              <p>
                <HiStar />
              </p>
              <p>
                <HiStar /> <HiStar />
              </p>
              <p>
                <HiStar /> <HiStar /> <HiStar />
              </p>
              <p>
                <HiStar /> <HiStar /> <HiStar /> <HiStar />
              </p>
              <p>
                <HiStar /> <HiStar /> <HiStar /> <HiStar /> <HiStar />
              </p>
            </div>
            <div className="star-count">
              <p>{restaurant?.rating_histogram?.count_1}</p>
              <p>{restaurant?.rating_histogram?.count_2}</p>
              <p>{restaurant?.rating_histogram?.count_3}</p>
              <p>{restaurant?.rating_histogram?.count_4}</p>
              <p>{restaurant?.rating_histogram?.count_5}</p>
            </div>
          </div>
        </div>
        {/* ========== Contact Info ============ */}
        <div className="contact-info">
          <p className="phone">
            <FiPhone /> <span>{restaurant?.phone}</span>
          </p>
          <p className="email">
            <HiOutlineMail /> <span>{restaurant?.email}</span>
          </p>

          <p className="website">
            <ImEarth /> <span>{restaurant?.website}</span>
          </p>
          <p className="write-review">
            <MdRateReview />
            <a
              href={restaurant?.write_review}
              target="_blank"
              className="text-info fw-bold"
            >
              Write a review.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
