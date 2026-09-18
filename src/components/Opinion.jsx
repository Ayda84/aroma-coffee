import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaQuoteRight, FaStar, FaRegStar } from "react-icons/fa";
import { useReviews } from "./context/ReviewsContext";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Opinion() {
  const { reviews } = useReviews();

  return (
    <div className="py-14 px-4 bg-accent/70 mt-22 text-center mb-5">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        dir="rtl"
        className="pb-12 opinion-swiper"
      >
        {reviews.map((r) => (
          <SwiperSlide key={r.name}>
            <div className="bg-white rounded-2xl shadow-md p-6 h-full flex flex-col justify-between border border-black/5">
              <FaQuoteRight className="text-accent/40 text-2xl mb-4" />

              <p className="text-sm text-gray-600 leading-7 flex-1">
                {r.text}
              </p>

              <div className="flex gap-1 my-4">
                {Array.from({ length: 5 }).map((_, i) =>
                  i < r.rating ? (
                    <FaStar key={i} className="text-accent text-sm" />
                  ) : (
                    <FaRegStar key={i} className="text-accent/40 text-sm" />
                  )
                )}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {r.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{r.name}</h4>
                  <p className="text-xs text-gray-400 mt-1">{r.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Link to="/add-review">
        <button className="border-2 border-secondary px-2 py-1 rounded-[8px] text-sm mt-8 cursor-pointer bg-four hover:bg-amber-600 transition-colors duration-300">
          برای ثبت نظر کلیک کنید
        </button>
      </Link>
    </div>
  );
}