import Footer from "./Footer";
import Navbar from "./Navbar";
import notFound from "../image/notFound/not.svg";

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center my-30">
        <img
          src={notFound}
          className="w-[400px] h-[400px] floating-image"
          alt="404"
        />
        <p className=" text-gray-700 font-bold">صفحه مورد نظر پیدا نشد!</p>
      </div>
      <Footer />

      <style>{`
        .floating-image {
          animation: float 2.5s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
        }
      `}</style>
    </div>
  );
}
