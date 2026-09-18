import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useReviews } from "./context/ReviewsContext";
import { FaArrowRight } from "react-icons/fa";

export default function AddReview() {
  const navigate = useNavigate();
  const { addReview } = useReviews();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      name: `${firstName} ${lastName}`,
      role,
      text,
      rating: Number(rating),
      avatar: firstName.charAt(0),
    };

    addReview(newReview);
    alert("نظر شما با موفقیت ثبت شد");
    navigate("/");
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-four px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md flex flex-col gap-4"
        >
          <div className="relative flex items-center justify-center mb-2">
            <Link to="/" className="absolute right-0">
              <FaArrowRight className="text-4xl text-accent rounded-2xl p-2 cursor-pointer" />
            </Link>
            <h2 className="font-bold text-xl text-primary text-center">
              ثبت نظر شما
            </h2>
          </div>

          <input
            type="text"
            placeholder="نام"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="border border-gray-300 rounded-lg p-3 outline-none focus:border-accent"
          />

          <input
            type="text"
            placeholder="نام خانوادگی"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="border border-gray-300 rounded-lg p-3 outline-none focus:border-accent"
          />

          <input
            type="text"
            placeholder="شغل شما"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            className="border border-gray-300 rounded-lg p-3 outline-none focus:border-accent"
          />

          <textarea
            placeholder="متن نظر شما"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            rows={4}
            className="border border-gray-300 rounded-lg p-3 outline-none focus:border-accent resize-none"
          />

          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 outline-none focus:border-accent"
          >
            <option value={5}>۵ ستاره</option>
            <option value={4}>۴ ستاره</option>
            <option value={3}>۳ ستاره</option>
            <option value={2}>۲ ستاره</option>
            <option value={1}>۱ ستاره</option>
          </select>

          <button
            type="submit"
            className="bg-primary text-white rounded-lg py-3 mt-2 hover:bg-secondary transition-colors duration-300"
          >
            ثبت نظر
          </button>
        </form>
      </div>
    </>
  );
}
