import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { HiStar } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Slider = ({ restaurant }) => {
  // ========================  Functionality for declear window width  ==========================
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", setDimension);
    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={screenSize.dynamicWidth <= 1024 ? 1 : 2}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {restaurant?.reviews.map((review) => (
        <SwiperSlide className="bg-info">
          <div className="review-slider p-4 rounded text-center text-white">
            <h6 className="fw-bold fs-4 slider-title">{review?.title}</h6>
            <p>
              {review?.summary} ( <HiStar className="text-warning fs-4" />{" "}
              {review?.rating} )
            </p>
            <div className="slider-bottom">
              <a
                href={review?.url}
                target="_blank"
                className="btn btn-sm bg-white"
                rel="noopener noreferrer"
              >
                Details
              </a>
              <p className="pt-3">Published Day: {review?.published_date}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
