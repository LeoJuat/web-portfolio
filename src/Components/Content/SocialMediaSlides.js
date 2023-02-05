import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper";

const SocialMediaSlides = () => {
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
          className="object-cover w-full h-full rounded-lg"
          src={require("../../imgs/STHome.webp")}
          alt="home page"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="object-cover w-full h-full rounded-lg gradient"
          src={require("../../imgs/STPostBox.webp")}
          alt="postbox"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="object-cover w-full h-full rounded-lg gradient"
          src={require("../../imgs/STPostExample.webp")}
          alt="post"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="object-cover w-full h-full rounded-lg gradient"
          src={require("../../imgs/STExplorePage.webp")}
          alt="explore page"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="object-cover w-full h-full rounded-lg gradient"
          src={require("../../imgs/STNotificationsPage.webp")}
          alt="notifications page"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="object-cover w-full h-full rounded-lg gradient"
          src={require("../../imgs/STMessagePage.webp")}
          alt="messages page"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="object-cover w-full h-full rounded-lg gradient"
          src={require("../../imgs/STProfilePage.webp")}
          alt="profile page"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SocialMediaSlides;
