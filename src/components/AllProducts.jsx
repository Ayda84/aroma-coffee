import { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import { useSearch } from "./context/SearchContext";


export default function AllProducts() {
  const { setAppliedSearchTerm } = useSearch();

  useEffect(() => {
    return () => {
      setAppliedSearchTerm("");
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-25 pb-20">
        <div className="flex flex-col items-center justify-center gap-4 mb-3">
          <h2 className="text-primary font-bold md:text-[24px]">همه محصولات</h2>
          <p className="text-accent text-[16px]">
            مجموعه کامل قهوه‌های آروما را اینجا ببینید.
          </p>
        </div>

          <ProductCard />
      </div>
      <Footer />
    </>
  );
}
