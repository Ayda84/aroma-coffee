import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <div className="flex flex-col items-center justify-center mt-25">
      <div className="flex flex-col items-center justify-center gap-4 mb-3">
        <h2 className="text-primary font-bold md:text-[28px]">
          قهوه‌ای برای هر سلیقه و هر روش دم‌آوری
        </h2>
        <p className="text-accent text-[14px]">
          همه محصولات پس از ثبت سفارش رُست می‌شوند و حداکثر ۴۸ ساعت بعد به
          دستتان می‌رسند.
        </p>
      </div>

      <ProductCard limit={6} />
    </div>
  );
}