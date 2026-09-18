// context/ReviewsContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const ReviewsContext = createContext();

const initialReviews = [
  {
    name: "مهدی سعادت",
    role: "مدیر رستوران آوند",
    text: "سفارش عمده‌مان همیشه سر وقت می‌رسد.پشتیبانی‌شان هم واقعاً حرفه‌ای برخورد می‌کند.",
    rating: 5,
    avatar: "م",
  },
  {
    name: "نگار احمدی",
    role: "طراح گرافیک",
    text: "قهوه دمی کلمبیا صبح‌های کاری‌ام را عوض کرد؛ سبک و خوش‌عطر است. اصلاً سنگین نیست. راهنمای دم‌آوری داخل بسته هم خیلی کمک کرد.",
    rating: 4,
    avatar: "ن",
  },
  {
    name: "امیرحسین رضایی",
    role: "مشتری همیشگی",
    text: "سه ساله قهوه‌ام را از اروما می‌گیرم. تاریخ رُست همیشه تازه است و بسته‌بندی عطر قهوه را کامل حفظ می‌کند.",
    rating: 5,
    avatar: "ا",
  },
  {
    name: "آیدا حدادی",
    role: "فرانت اند",
    text: "قهوه خیلی سریع رسید و کیفیتش عالی بود عطرش هم خیلی خوب بود موقع کدنویسی واقعا لازمم میشه ممنون آروما",
    rating: 5,
    avatar: "ا",
  },
  {
    name: "امیر راشد",
    role: "باریستا",
    text: "برای کارم همشه از دانه قهوه های اروما استفاده میکنم و روز به روز مشتری هامون بیشتر میشن خدا بهتون برکت بده",
    rating: 5,
    avatar: "ا",
  },
  {
    name: "شایان شمسی",
    role: "مهندس عمران",
    text: "از کیفیت قهوه ها راضی بودم ولی دیر به دستم رسید حتی از 48 ساعت هم دیرتر شد",
    rating: 2,
    avatar: "ش",
  },
  {
    name: "بهار نوروزی",
    role: "نویسنده",
    text: "موقع نوشتن نوشیدن قهوه های شما یهم انرژی میده و همیشه هم کیفتش عالیه ممنون",
    rating: 5,
    avatar: "ب",
  },
  {
    name: "ستاره",
    role: "پرستار",
    text: "شبایی که باید بیمارستان بیدار بمونم قهوه های شما کمکم میکنن فقط چند وقته کیفیت سابق رو نداره و تلخ شده کمی",
    rating: 3,
    avatar: "س",
  },
];

function loadReviews() {
  try {
    const saved = localStorage.getItem("aroma-reviews");
    return saved ? JSON.parse(saved) : initialReviews;
  } catch (error) {
    console.error("خطا در خواندن نظرات از localStorage:", error);
    return initialReviews;
  }
}

export function ReviewsProvider({ children }) {
  const [reviews, setReviews] = useState(loadReviews);

  useEffect(() => {
    localStorage.setItem("aroma-reviews", JSON.stringify(reviews));
  }, [reviews]);

  const addReview = (newReview) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  return (
    <ReviewsContext.Provider value={{ reviews, addReview }}>
      {children}
    </ReviewsContext.Provider>
  );
}

export function useReviews() {
  return useContext(ReviewsContext);
}
