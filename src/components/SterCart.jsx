import { FaHotjar, FaMugHot } from "react-icons/fa";
import { GiWaterMill } from "react-icons/gi";
import { TbGrowth, TbSeedling } from "react-icons/tb";

export default function StepCart() {
  const Steps = [
    {
      icon: TbSeedling,
      step: "مرحله ۱",
      name: "دانه قهوه",
      des: "برداشت دستی از مزارع مرتفع و تفکیک دانه‌های درجه‌یک.",
    },
    {
      icon: TbGrowth,
      step: "مرحله ۲",
      name: "رُست",
      des: "پروفایل اختصاصی برای هر خاستگاه برای شما.",
    },
    {
      icon: GiWaterMill,
      step: "مرحله ۳",
      name: "آسیاب",
      des: "تنظیم دقیق درجه آسیاب بر اساس روش دم‌آوری شما.",
    },
    {
      icon: FaHotjar,
      step: "مرحله ۴",
      name: "دم‌آوری",
      des: "نسبت آب و قهوه و دمای درست؛ رمز طعم متعادل.",
    },
    {
      icon: FaMugHot,
      step: "مرحله ۵",
      name: "فنجان قهوه",
      des: "و در پایان، همان چند دقیقه آرامش که منتظرش بودید.",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {Steps.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.name}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center mt-14 gap-2 w-[230px] h-[240px] hover:border-2 border-four hover:scale-110 hover:bg-secondary/20 transition duration-300"
            >
              <Icon className="bg-secondary/30 text-5xl p-3 rounded-3xl border border-accent" />
              <p className="text-accent text-[12px] mb-2">{card.step}</p>
              <h3 className="font-bold">{card.name}</h3>
              <p className="text-[11px] text-four mt-2">{card.des}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
