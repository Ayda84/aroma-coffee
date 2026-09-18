// Hero.jsx
import { FaCarOn } from "react-icons/fa6";
import heroimg from "../image/hero-coffee.jpg";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen">
      <img
        src={heroimg}
        alt="coffee"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />

      <Navbar />

      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4">
        <div className="flex flex-row items-center justify-center text-white/90 gap-2 mb-4 border border-accent p-2 rounded-[20px] bg-secondary/60">
          <FaCarOn />
          <p className="text-[10px]">رُست روزانه، ارسال در همان روز</p>
        </div>
        <h2 className="text-white md:text-5xl text-2xl font-bold mb-6">
          طعم قهوه، شروع یک لحظه خوب
        </h2>
        <p className="text-white/80 max-w-xl mb-8 leading-8">
          ما دانه‌های قهوه را از مزارع مرتفع برزیل، اتیوپی و کلمبیا انتخاب
          می‌کنیم و در رُستری خودمان در تهران، تازه و با دقت رُست می‌کنیم؛ تا هر
          فنجان، دقیقاً همان چیزی باشد که انتظارش را دارید.
        </p>
        <div className="flex gap-4">
          <Link to="/AllProducts">
            <button className="md:px-6 py-3 bg-amber-600 rounded-full text-white cursor-pointer hover:bg-transparent hover:border border-amber-600 transition-colors duration-300 md:text-[16px] text-[12px] px-2">
              مشاهده محصولات
            </button>
          </Link>

          <a href="#travell">
            <button className="md:px-6 py-3 border border-white rounded-full text-white cursor-pointer hover:bg-white hover:text-amber-600 hover:border-amber-600 transition-colors duration-300 md:text-[16px] text-[12px] px-2">
              سفر یک دانه قهوه
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
