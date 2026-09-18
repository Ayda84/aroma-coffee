import { Link, useParams } from "react-router-dom";
import { blogData } from "./blogData";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MdAccessTime } from "react-icons/md";

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-accent">مقاله‌ای پیدا نشد.</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="pt-28 pb-25 px-4 md:px-32">
        <Link to="/">
          <FaArrowRight className="text-2xl bg-accent text-white rounded-2xl p-2 cursor-pointer mb-6" />
        </Link>

        <h1 className="font-bold text-primary md:text-2xl mb-6">{blog.name}</h1>
        <div className="flex flex-row items-start justify-start gap-7">
          <div className="flex flex-row items-center justify-center gap-2">
            <MdAccessTime className="text-secondary" />
            <p className="text-secondary text-[14px]">{blog.time}</p>
          </div>
        </div>

        <img
          src={blog.img}
          alt={blog.name}
          className="md:w-[80%] md:h-120 block mx-auto rounded-2xl mt-4"
        />

        <p className="text-primary mt-12 border-r-4 border-amber-600 pr-4">
          {blog.des}
        </p>

        <div className="flex flex-col gap-10 mt-15">
          {blog.sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-primary text-lg mb-3">
                {section.heading}
              </h3>
              <p className="text-amber-600 leading-8">{section.text}</p>
            </div>
          ))}
        </div>

        {blog.notes && blog.notes.length > 0 && (
          <div className="bg-accent rounded-2xl p-6 mt-15 flex flex-col gap-3">
            <h3 className="font-bold text-white text-lg mb-2">نکته‌های سریع</h3>
            {blog.notes.map((note, index) => (
              <div key={index} className="flex flex-row items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <p className="text-white/90">{note}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
