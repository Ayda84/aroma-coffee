import { useState } from "react";
import { productsArray } from "./ProData";
import { useSearch } from "./context/SearchContext";
import { useCart } from "./context/CartContext";
import coffe from "../image/notFound/coffe.svg";

export default function ProductCard({ limit }) {
  const [quantities, setQuantities] = useState({});
  const { appliedSearchTerm } = useSearch();
  const { addToCart } = useCart();

  const shouldFilter = !limit && appliedSearchTerm.trim();

  const filteredProducts = shouldFilter
    ? productsArray.filter(
        (p) =>
          p.name.includes(appliedSearchTerm.trim()) ||
          p.description.includes(appliedSearchTerm.trim())
      )
    : productsArray;

  const products = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  const increase = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 0;
    if (quantity === 0) return;
    addToCart(product, quantity);
    setQuantities((prev) => ({ ...prev, [product.id]: 0 }));
  };

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-6 my-8 items-center justify-center">
      {products.length === 0 && (
        <div className="col-span-full flex flex-col items-center justify-center">
          <p className="text-center text-amber-600 py-5">
            محصولی با این عبارت پیدا نشد.
          </p>
          <img
            src={coffe}
            alt="coffe"
            className="w-[400px] h-[400px] block mx-auto"
          />
        </div>
      )}
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-secondary/60 flex flex-col items-start justify-start rounded-xl p-2 hover:scale-105 transition-transform duration-300 md:w-[370px] w-[300px]"
        >
          <img
            src={p.img}
            alt={p.name}
            className="w-full h-74 object-cover rounded-t-xl"
          />
          <div className="flex flex-col items-start justify-start p-5">
            <div className="flex flex-row items-center justify-center gap-4">
              <h3 className="text-primary font-bold">{p.name}</h3>
              <p className="text-[12px] text-white/70">{p.scale}</p>
            </div>
            <p className="text-[10px] mt-4">{p.description}</p>
          </div>
          <div className="border-t border-t-secondary w-full flex md:flex-row flex-col items-center justify-center md:gap-4">
            <div className="flex flex-row items-center justify-center gap-1 p-5">
              <p className="font-bold text-black/70">{p.price}</p>
              <p className="text-[10px]">{p.toman}</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 py-3">
              <div className="flex flex-row items-center justify-center gap-3 border border-four px-2 rounded-2xl text-[18px] text-primary">
                <p className="cursor-pointer" onClick={() => increase(p.id)}>
                  +
                </p>
                <p>{quantities[p.id] || 0}</p>
                <p className="cursor-pointer" onClick={() => decrease(p.id)}>
                  -
                </p>
              </div>
              <button
                onClick={() => handleAddToCart(p)}
                className="flex flex-row items-center justify-center gap-1 bg-primary text-[12px] px-3 py-2 rounded-2xl text-white hover:bg-primary/60 transition-colors duration-300 cursor-pointer"
              >
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
