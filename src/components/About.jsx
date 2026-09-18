import Footer from "./Footer";
import Navbar from "./Navbar";
import aboutImg from "../image/about/about.jpg";
import { GiMoneyStack } from "react-icons/gi";
import { FaFireFlameCurved } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";

export default function About() {
  const Features = [
    {
      icon: GiMoneyStack,
      titr: "خرید منصفانه",
      des: "همکاری مستقیم با کشاورزان و پرداخت بالاتر از نرخ بازار.",
    },
    {
      icon: FaFireFlameCurved,
      titr: "رُست روزانه",
      des: "هر پروفایل رُست بر اساس خاستگاه و روش دم‌آوری تنظیم می‌شود.",
    },
    {
      icon: FaTruck,
      titr: "ارسال تازه",
      des: "سفارش‌ها حداکثر ۲۴ ساعت پس از رُست از انبار خارج می‌شوند.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="flex md:flex-row flex-col items-center justify-center md:mt-40 md:gap-14 mt-25 gap-8">
        <img
          src={aboutImg}
          alt="about"
          className="object-cover md:h-180 h-80 rounded-xl"
        />
        <div className="flex flex-col items-start justify-start md:w-[40%] w-[85%]">
          <h2 className="text-primary font-bold md:text-2xl leading-10">
            «ما باور داریم یک فنجان قهوه فقط یک نوشیدنی نیست؛ شروع یک لحظه خوب
            است.»
          </h2>
          <p className="text-black/70 leading-8 mt-7 md:text-[16px] text-[13px]">
            آروما از یک کارگاه کوچک در خیابان فرشته شروع شد؛ با یک رُستر دست‌دوم
            و چند کیسه دانه عربیکا. امروز بعد از دوازده سال، هنوز همان وسواس اول
            را داریم: دانه‌ها را خودمان انتخاب می‌کنیم، پروفایل رُست هر خاستگاه
            را جداگانه می‌نویسیم و هیچ بچی بدون کاپینگ از کارگاه بیرون نمی‌رود.
            برای ما قهوه بهانه‌ای است برای آرام‌تر زندگی کردن؛ برای آن چند
            دقیقه‌ای که فقط مال خودتان است.
          </p>

          <div className="flex flex-row items-center justify-center md:gap-4 gap-2 mt-8">
            {Features.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.titr}
                  className="flex flex-col items-start justify-start bg-white md:w-[180px] md:h-35 py-3 px-2 gap-2 rounded-2xl"
                >
                  <Icon className="md:text-2xl text-xl mb-2 text-amber-600 rounded-3xl" />
                  <h3 className="font-bold text-[13px]">{card.titr}</h3>
                  <p className="md:text-[12px] text-[10px] text-secondary">{card.des}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
