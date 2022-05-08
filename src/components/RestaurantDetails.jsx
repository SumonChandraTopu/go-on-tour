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
import bookingImg from "../images/booking.png";
import Iframe from "react-iframe";

const RestaurantDetails = () => {
  const { locationId } = useParams();
  const { data: restaurant } = useGetRestaurantsDetailsQuery(locationId);
  return (
    <div className="container pt-3">
      <div className="restaurant-container">
        {/* ============= Head ============= */}
        <div className="head">
          <div className="restaurant-title">
            <h2 className="fs-1">
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
          <p className="py-2 fs-5">{restaurant?.description}</p>
          <p className="fs-5 fw-bold">
            Location: <span className="fw-normal"> {restaurant?.address}</span>
          </p>
          <p className="fs-5 fw-bold">
            Ranking position:
            <span className="text-info"> {restaurant?.ranking}</span>
          </p>
          <p className="fs-5 fw-bold">
            Price:
            <span className=" text-info"> {restaurant?.price}</span>
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
        <div className="iframe-reasons">
          {/* ============ Top Reasons =========== */}
          {restaurant?.owners_top_reasons && (
            <div className="top-reasons">
              <h6 className="fs-5 fw-bold">
                {restaurant?.owners_top_reasons?.section_header}
              </h6>
              <p>
                <i>{restaurant?.owners_top_reasons?.sponsored_by}</i>
              </p>
              {restaurant?.owners_top_reasons?.top_reasons.map((reason) => (
                <div className="reason" key={reason?.review?.review_id}>
                  <ul className="reason-ul">
                    <li>
                      <div className="top-reason-container px-2 my-1">
                        <span className=" fs-4">
                          <MdCheck /> {reason?.header}
                        </span>
                        <span className="fs-6 review-id">
                          <CgProfile /> {reason?.review?.screen_name}
                        </span>
                      </div>
                      <p className="fs-5 review-text">{reason?.text}</p>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          )}
          {/* ============= Iframe ============= */}
          {restaurant?.storyboard && (
            <div className="story-board">
              <Iframe
                url={restaurant?.storyboard?.hd_720p}
                className="i-frame"
              />
            </div>
          )}
        </div>
        {/* ============ Awards ============ */}
        <div>
          <p className="my-3 fs-5 fw-bold">Awards: </p>
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
          <p className="fs-5 fw-bold">Reviews: </p>
          <Slider restaurant={restaurant} />
        </div>
        <div className="rating-contact py-2">
          {/* ============ Ratings ============== */}
          <div className="rating py-3">
            <p className="fs-5 fw-bold">Ratings: </p>
            <div className="ratings-container">
              <div className="stars">
                <p className="fs-5">
                  <HiStar />
                </p>
                <p className="fs-5">
                  <HiStar /> <HiStar />
                </p>
                <p className="fs-5">
                  <HiStar /> <HiStar /> <HiStar />
                </p>
                <p className="fs-5">
                  <HiStar /> <HiStar /> <HiStar /> <HiStar />
                </p>
                <p className="fs-5">
                  <HiStar /> <HiStar /> <HiStar /> <HiStar /> <HiStar />
                </p>
              </div>
              <div className="star-count">
                <p className="fs-5">{restaurant?.rating_histogram?.count_1}</p>
                <p className="fs-5">{restaurant?.rating_histogram?.count_2}</p>
                <p className="fs-5">{restaurant?.rating_histogram?.count_3}</p>
                <p className="fs-5">{restaurant?.rating_histogram?.count_4}</p>
                <p className="fs-5">{restaurant?.rating_histogram?.count_5}</p>
              </div>
            </div>
          </div>
          {/* ========== Contact Info ============ */}
          <div className="contact-info">
            <p className="fs-5 fw-bold">Contact information: </p>
            <p className="phone fs-5">
              <span>
                <FiPhone /> {restaurant?.phone}
              </span>
            </p>
            <p className="email fs-5">
              <span>
                <HiOutlineMail /> {restaurant?.email}
              </span>
            </p>

            <p className="website fs-5">
              <span>
                <ImEarth />{" "}
                <a
                  href={restaurant?.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  {restaurant?.website}
                </a>
              </span>
            </p>
            <p className="write-review fs-5">
              <MdRateReview />
              <a
                href={restaurant?.write_review}
                target="_blank"
                className="text-info fw-bold"
              >
                {" "}
                Write a review.
              </a>
            </p>
          </div>
        </div>
        {/* ====================  Booking  ===================== */}
        {restaurant?.booking && (
          <a
            href={restaurant?.booking?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="booking-container"
          >
            <div className="booking">
              <img src={bookingImg} className="img-fluid" alt="" />
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default RestaurantDetails;
