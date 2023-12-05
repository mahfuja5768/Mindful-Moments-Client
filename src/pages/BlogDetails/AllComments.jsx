import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import useComments from "../../components/hooks/useComments";

const AllComments = ({ comments }) => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="w-1/2 text-center mx-auto">
          {!comments.length ? (
            <p>No Review available</p>
          ) : (
            comments.map((item) => (
              <SwiperSlide className="text-center mx-auto" key={item._id}>
                <div className=" p-12 rounded-2xl">
                  <p className="md:text-2xl text-xl font-medium text-primary">
                    Blog Title: {item.title}
                  </p>
                  <p className="md:text-2xl text-xl font-fold text-primary">
                    Review: {item.review}
                  </p>
                  <img
                    src={item.photo}
                    className="w-12 h-12 rounded-full mx-auto my-2"
                    alt=""
                  />
                  <p className="text-xl font-medium text-primary">
                    Reviewer Name: {item.name}
                  </p>
                  <p className="text-xl font-medium text-primary">
                    Reviewer Email: {item.email}
                  </p>
                </div>
              </SwiperSlide>
            ))
          )}
        </div>
      </Swiper>
    </div>
  );
};

export default AllComments;
