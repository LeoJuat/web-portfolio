import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper";

const Slides = () => {
  return (
    <Swiper
      className="w-full"
      modules={[Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={true}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img
          className="h-fit w-full object-cover rounded-lg"
          src={require("../../imgs/landing.webp")}
          alt="landing page"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-full w-full object-cover rounded-lg gradient"
          src={require("../../imgs/signup.webp")}
          alt="signup page"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-full w-full object-cover rounded-lg gradient"
          src={require("../../imgs/home.webp")}
          alt="signup page"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-full w-full object-cover rounded-lg gradient"
          src={require("../../imgs/workout.webp")}
          alt="signup page"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slides;
