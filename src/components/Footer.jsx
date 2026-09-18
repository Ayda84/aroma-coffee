import { FaInstagram, FaLinkedinIn, FaPhone } from "react-icons/fa";
import { IoIosCafe, IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";
import { RiTelegram2Fill } from "react-icons/ri";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-amber-950 mt-22 md:py-7 py-4 pt-15">
        <div className="flex md:flex-row flex-col items-center justify-center bg-amber-950 gap-30 border-b-2 border-accent/50 pb-8">
          <div className="flex flex-col items-start justify-start gap-2 md:w-[30%] w-[80%]">
            <div className="flex flex-row items-center justify-center gap-2">
              <div className="bg-secondary p-1 rounded-3xl">
                <IoIosCafe className="text-3xl" />
              </div>
              <h1 className="text-accent font-bold text-lg">قهوه آروما</h1>
            </div>
            <p className="text-sm text-four leading-8">
              رُستری تخصصی قهوه در تهران؛ از سال ۱۳۹۳ در حال رُست کردن دانه‌های
              تازه برای کافه‌ها و خانه‌های شما.
            </p>
          </div>

          <div className="flex flex-row items-center justify-center md:gap-25 gap-6">
            <div className="flex flex-col items-start justify-start gap-2 text-four md:text-[13px] text-[10px]">
              <p className="font-bold">دسترسی سریع</p>
              <p className="cursor-pointer hover:text-amber-600 transition-colors duration-300">
                خانه
              </p>
              <p className="cursor-pointer hover:text-amber-600 transition-colors duration-300">
                وبلاگ
              </p>
              <p className="cursor-pointer hover:text-amber-600 transition-colors duration-300">
                درباره ما
              </p>
              <p className="cursor-pointer hover:text-amber-600 transition-colors duration-300">
                تماس با ما
              </p>
            </div>

            <div className="flex flex-col items-start justify-start gap-2 text-four md:text-[13px] text-[11px]">
              <p className="font-bold">تماس با ما</p>
              <div className="flex flex-row items-center justify-center gap-1">
                <LuMapPin />
                <p>تهران، خیابان فرشته، کوچه آرام، پلاک ۱۴</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-1">
                <FaPhone />
                <p>۰۲۱-۲۲۳۳۴۴۵۵</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-1">
                <IoIosMail />
                <p>aromacaffee@gmail.com</p>
              </div>
              <p className="text-[12px]">
                ساعات کاری: شنبه تا پنجشنبه، 9 صبح تا 11 شب
              </p>
            </div>
          </div>

          <div className="flex md:flex-col flex-row items-center justify-center gap-3">
            <div className="text-xl text-accent border-2 border-white/30 rounded-3xl p-[6px] cursor-pointer hover:border-four/60 hover:bg-amber-600/20 transition duration-300">
              <FaInstagram />
            </div>
            <div className="text-xl text-accent border-2 border-white/30 rounded-3xl p-[6px] cursor-pointer hover:border-four/60 hover:bg-amber-600/20 transition duration-300">
              <RiTelegram2Fill />
            </div>
            <div className="text-xl text-accent border-2 border-white/30 rounded-3xl p-[6px] cursor-pointer hover:border-four/60 hover:bg-amber-600/20 transition duration-300">
              <IoLogoWhatsapp />
            </div>
            <div className="text-xl text-accent border-2 border-white/30 rounded-3xl p-[6px] cursor-pointer hover:border-four/60 hover:bg-amber-600/20 transition duration-300">
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between md:gap-140 pt-5 md:text-[13px] text-[10px] text-accent gap-10">
          <p>© ۱۴۰۵ قهوه آروما — تمامی حقوق محفوظ است.</p>
          <p>ساخته‌شده با عشق به قهوه در تهران</p>
        </div>
      </div>
    </>
  );
}
