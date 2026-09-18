import travelImg from "../image/travel/journey-bg.jpg";
import StepCart from "./SterCart";

export default function Travel() {
  return (
    <div id="travell" className="relative w-full mt-22 mb-5">
      <img
        src={travelImg}
        alt="travel"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative flex flex-col items-center justify-center text-white py-20 px-4">
        <h3 className="font-bold text-2xl">سفر یک دانه تا فنجان شما</h3>
        <p className="text-accent text-sm mt-3">
          پنج مرحله‌ای که هر دانه قهوه پیش از رسیدن به دست شما طی می‌کند.
        </p>

        <StepCart />
      </div>
    </div>
  );
}