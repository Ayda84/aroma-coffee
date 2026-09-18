import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaTrash } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useCart } from "./context/CartContext";
import { toNumber, toPersianPrice } from "./utils/priceUtils";
import add from "../image/cartt/Add.svg";

const DELIVERY_FEE = 100000;

const iranProvinces = [
  "آذربایجان شرقی",
  "آذربایجان غربی",
  "اردبیل",
  "اصفهان",
  "البرز",
  "ایلام",
  "بوشهر",
  "تهران",
  "چهارمحال و بختیاری",
  "خراسان جنوبی",
  "خراسان رضوی",
  "خراسان شمالی",
  "خوزستان",
  "زنجان",
  "سمنان",
  "سیستان و بلوچستان",
  "فارس",
  "قزوین",
  "قم",
  "کردستان",
  "کرمان",
  "کرمانشاه",
  "کهگیلویه و بویراحمد",
  "گلستان",
  "گیلان",
  "لرستان",
  "مازندران",
  "مرکزی",
  "هرمزگان",
  "همدان",
  "یزد",
];

export default function Cart() {
  const { cartItems, removeFromCart, updateCartQuantity, subtotal } = useCart();
  const total = subtotal + (cartItems.length > 0 ? DELIVERY_FEE : 0);

  const [address, setAddress] = useState({
    province: "",
    city: "",
    fullAddress: "",
    postalCode: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setAddress((prev) => ({ ...prev, [field]: value }));
  };

  const validateAddress = () => {
    const newErrors = {};

    if (!address.province) newErrors.province = "استان را انتخاب کنید.";
    if (!address.city.trim()) newErrors.city = "شهر را وارد کنید.";
    if (!address.fullAddress.trim())
      newErrors.fullAddress = "آدرس کامل را وارد کنید.";

    if (!/^\d{10}$/.test(address.postalCode))
      newErrors.postalCode = "کد پستی باید دقیقاً ۱۰ رقم باشد.";

    if (!/^09\d{9}$/.test(address.phone))
      newErrors.phone = "شماره موبایل باید با ۰۹ شروع شود و ۱۱ رقم باشد.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitOrder = () => {
    if (!validateAddress()) return;
    console.log("سفارش ثبت شد:", { cartItems, address, total });
    alert("سفارش شما با موفقیت ثبت شد!");
  };

  return (
    <>
      <Navbar />
      <div className="pt-28 px-4 md:px-20 min-h-screen">
        <div className="flex flex-row items-center gap-4 mb-8">
          <Link to="/">
            <FaArrowRight className="text-2xl bg-accent text-white rounded-2xl p-2 cursor-pointer" />
          </Link>
          <h2 className="font-bold text-primary text-xl">سبد خرید شما</h2>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <p className="text-center text-secondary">
              سبد خرید شما خالی است.
            </p>
            <img src={add} alt="Add" className="w-[400px] h-[400px]"/>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 flex flex-col gap-8">
              {/* address  */}
              <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4">
                <h3 className="font-bold text-primary text-lg border-b pb-3">
                  آدرس تحویل سفارش
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>کشور:</span>
                  <span className="font-bold text-primary">ایران</span>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <select
                      value={address.province}
                      onChange={(e) => handleChange("province", e.target.value)}
                      className="border border-amber-500 rounded-lg p-3 outline-none focus:border-accent"
                    >
                      <option value="">انتخاب استان</option>
                      {iranProvinces.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                    {errors.province && (
                      <span className="text-red-500 text-xs">
                        {errors.province}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1">
                    <input
                      type="text"
                      placeholder="شهر"
                      value={address.city}
                      onChange={(e) => handleChange("city", e.target.value)}
                      className="border border-amber-500 rounded-lg p-3 outline-none focus:border-accent"
                    />
                    {errors.city && (
                      <span className="text-red-500 text-xs">
                        {errors.city}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <textarea
                    placeholder="آدرس کامل (خیابان، کوچه، پلاک، واحد)"
                    value={address.fullAddress}
                    onChange={(e) =>
                      handleChange("fullAddress", e.target.value)
                    }
                    rows={3}
                    className="border border-amber-500 rounded-lg p-3 outline-none focus:border-accent resize-none"
                  />
                  {errors.fullAddress && (
                    <span className="text-red-500 text-xs">
                      {errors.fullAddress}
                    </span>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="کد پستی (۱۰ رقم)"
                      value={address.postalCode}
                      onChange={(e) =>
                        handleChange(
                          "postalCode",
                          e.target.value.replace(/\D/g, "").slice(0, 10)
                        )
                      }
                      className="border border-amber-500 rounded-lg p-3 outline-none focus:border-accent"
                    />
                    {errors.postalCode && (
                      <span className="text-red-500 text-xs">
                        {errors.postalCode}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1">
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="شماره موبایل (۰۹...)"
                      value={address.phone}
                      onChange={(e) =>
                        handleChange(
                          "phone",
                          e.target.value.replace(/\D/g, "").slice(0, 11)
                        )
                      }
                      className="border border-amber-500 rounded-lg p-3 outline-none focus:border-accent"
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-xs">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-primary font-bold">لیست سفارش:</h3>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-secondary/60 rounded-xl p-4 flex flex-row items-center gap-4"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 flex flex-col gap-1">
                      <h3 className="font-bold text-primary">{item.name}</h3>
                      <p className="text-[11px] text-white/70">{item.scale}</p>
                      <p className="text-[12px] font-bold text-black/70">
                        {item.price} {item.toman}
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-3 border border-four px-2 rounded-2xl text-[18px] text-primary">
                      <p
                        className="cursor-pointer"
                        onClick={() =>
                          updateCartQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </p>
                      <p>{item.quantity}</p>
                      <p
                        className="cursor-pointer"
                        onClick={() =>
                          updateCartQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </p>
                    </div>
                    <p className="font-bold text-primary text-sm w-24 text-left">
                      {toPersianPrice(toNumber(item.price) * item.quantity)}{" "}
                      تومان
                    </p>
                    <FaTrash
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 cursor-pointer hover:text-red-700 transition-colors"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-80 bg-white rounded-2xl shadow-md p-6 h-fit flex flex-col gap-4">
              <h3 className="font-bold text-primary text-lg border-b pb-3">
                خلاصه سفارش
              </h3>
              <div className="flex justify-between text-sm text-gray-600">
                <span>جمع محصولات</span>
                <span>{toPersianPrice(subtotal)} تومان</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>هزینه پیک</span>
                <span>{toPersianPrice(DELIVERY_FEE)} تومان</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-bold text-primary">
                <span>مبلغ قابل پرداخت</span>
                <span>{toPersianPrice(total)} تومان</span>
              </div>
              <button
                onClick={handleSubmitOrder}
                className="bg-primary text-white rounded-lg py-3 mt-2 hover:bg-secondary transition-colors duration-300"
              >
                ثبت سفارش
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
