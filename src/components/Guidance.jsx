import { Link } from "react-router-dom";
import { blogData } from "./blogData";

export default function Guidance() {
  return (
    <div
      id="guidance"
      className="flex flex-col items-center justify-center mt-22 mb-5"
    >
      <h3 className="font-bold text-primary md:text-xl text-[13px]">
        راهنماها و تجربه‌های تیم باریستای ما برای اینکه قهوه بهتری در خانه دم
        کنید.
      </h3>

      <div className="flex flex-col items-center justify-center gap-5 mt-10 w-full max-w-6xl px-4 md:px-20">
        {blogData.map((card) => (
          <Link key={card.slug} to={`/blog/${card.slug}`} className="w-full">
            <div className="flex md:flex-row flex-col items-center w-full md:h-[180px] bg-accent md:gap-12 gap-3 md:pl-8 cursor-pointer hover:bg-secondary transition-colors duration-300 p-4 md:p-0">
              <img
                src={card.img}
                alt={card.name}
                className="w-[300px] h-[180px] object-cover flex-shrink-0"
              />
              <div className="flex flex-col items-start justify-start flex-1 gap-5">
                <h3 className="font-bold text-primary">{card.name}</h3>
                <p className="text-white/70 text-[14px] leading-6">{card.des}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}