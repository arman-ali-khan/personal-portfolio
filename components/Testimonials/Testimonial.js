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
            {[...Array(10).keys()].map((items, i) => (
              <SwiperSlide key={i} className="h-auto">
                <div className="h-64 sm:h-72 md:h-80 object-cover select-none w-full">
                  <section className="md:p-6">
                    <div className="container max-w-xl mx-auto">
                      <div className="flex flex-col items-center w-full md:p-6 space-y-3 rounded-md lg:h-full lg:p-8 dark:bg-gray-900 dark:text-gray-100">
                        <img
                          src="https://source.unsplash.com/random/100x100?4"
                          alt=""
                          className="w-10 sm:w-20 h-10 sm:h-20 rounded-full dark:bg-gray-500"
                        />
                        <blockquote className="max-w-lg md:text-lg italic font-medium text-center">
                          "Et, dignissimos obcaecati. Recusandae praesentium
                          doloribus vitae? Rem unde atque mollitia!"
                        </blockquote>
                        <div className="text-center dark:text-gray-400">
                          <p>Leroy Jenkins</p>
                          <p className="text-sm">CEO of Company Co.</p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
