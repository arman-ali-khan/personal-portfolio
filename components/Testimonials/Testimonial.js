// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.module.css";

// import required modules
import { Keyboard, Navigation, Pagination } from "swiper";

export default function Testimonial() {
  return (
    <>
    <div className="bg-base-100 border rounded-md">
    <div className="p-3 flex justify-between rounded-t-md">
      <h2 className="text-xl font-bold font-gumela">Testimonials</h2>
       
      </div>
   
    <div className="px-4 py-2">
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper rounded-md"
      >
        <SwiperSlide className="h-auto">
          <div className="h-64 sm:h-72 md:h-80 object-cover select-none w-full">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-auto">
          <div className="h-64 sm:h-72 md:h-80 object-cover select-none w-full">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
    </>
  );
}
