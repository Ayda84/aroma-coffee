// // Navbar.jsx
// import { IoIosCafe, IoIosSearch } from "react-icons/io";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { Link, useNavigate } from "react-router-dom";
// import { useSearch } from "./context/SearchContext";
// import { useCart } from "./context/CartContext";

// export default function Navbar() {
//   const { searchTerm, setSearchTerm, setAppliedSearchTerm } = useSearch();
//   const { totalCount } = useCart();
//   const navigate = useNavigate();

//   const goToSearchResults = () => {
//     if (searchTerm.trim() !== "") {
//       setAppliedSearchTerm(searchTerm.trim());
//       setSearchTerm("");
//       navigate("/AllProducts");
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       goToSearchResults();
//     }
//   };

//   return (
//     <nav
//       className="
//         fixed top-0 left-0 w-full z-50
//         flex items-center justify-center md:gap-90 gap-7
//         md:px-6 px-2 py-4
//         bg-secondary/30
//         backdrop-blur-md
//         border-b border-white/10
//       "
//     >
//       <Link to="/">
//         <div className="flex flex-row items-center justify-center gap-2">
//           <div className="bg-secondary p-1 rounded-3xl md:flex hidden">
//             <IoIosCafe className="md:text-3xl" />
//           </div>
//           <h1 className="text-accent font-bold md:text-lg text-[12px]">
//             قهوه آروما
//           </h1>
//         </div>
//       </Link>

//       <ul className="flex md:gap-7 text-white/90 md:text-sm text-[10px] cursor-pointer gap-4">
//         <Link to="/">
//           <li className="hover:text-amber-600 transition-colors duration-300">
//             خانه
//           </li>
//         </Link>

//         <a href="#guidance">
//           <li className="hover:text-amber-600 transition-colors duration-300">
//             وبلاگ
//           </li>
//         </a>

//         <Link to="/about">
//           <li className="hover:text-amber-600 transition-colors duration-300">
//             درباره ما
//           </li>
//         </Link>

//         <Link to="/contact">
//           <li className="hover:text-amber-600 transition-colors duration-300">
//             تماس با ما
//           </li>
//         </Link>
//       </ul>

//       <div className="flex flex-row items-center justify-center md:gap-4 gap-3">
//         <Link to="/Cart" className="relative">
//           <AiOutlineShoppingCart className="text-amber-600 md:text-2xl cursor-pointer" />
//           {totalCount > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
//               {totalCount}
//             </span>
//           )}
//         </Link>

//         <div className="flex flex-row items-center justify-center gap-1 border-2 border-amber-800/60 p-0.5 rounded-2xl">
//           <IoIosSearch
//             className="md:text-2xl cursor-pointer text-amber-600"
//             onClick={goToSearchResults}
//           />
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             onKeyDown={handleKeyDown}
//             placeholder="جستجو..."
//             className="outline-none border-none bg-transparent text-white md:w-[200px] w-[100px] flex"
//           />
//         </div>
//       </div>
//     </nav>
//   );
// }

import { useState } from "react";
import { IoIosCafe, IoIosSearch } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSearch } from "./context/SearchContext";
import { useCart } from "./context/CartContext";

export default function Navbar() {
  const { searchTerm, setSearchTerm, setAppliedSearchTerm } = useSearch();
  const { totalCount } = useCart();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goToSearchResults = () => {
    if (searchTerm.trim() !== "") {
      setAppliedSearchTerm(searchTerm.trim());
      setSearchTerm("");
      navigate("/AllProducts");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      goToSearchResults();
    }
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-secondary/30
        backdrop-blur-md
        border-b border-white/10
      "
    >
      <div className="flex items-center justify-between md:justify-center md:gap-90 gap-7 md:px-6 px-4 py-4">
        <Link to="/" onClick={closeMenu}>
          <div className="flex flex-row items-center justify-center gap-2">
            <div className="bg-secondary p-1 rounded-3xl md:flex hidden">
              <IoIosCafe className="md:text-3xl" />
            </div>
            <h1 className="text-accent font-bold md:text-lg text-[14px]">
              قهوه آروما
            </h1>
          </div>
        </Link>

        <ul className="hidden md:flex md:gap-7 text-white/90 md:text-sm cursor-pointer gap-4">
          <Link to="/">
            <li className="hover:text-amber-600 transition-colors duration-300">
              خانه
            </li>
          </Link>

          <a href="#guidance">
            <li className="hover:text-amber-600 transition-colors duration-300">
              وبلاگ
            </li>
          </a>

          <Link to="/about">
            <li className="hover:text-amber-600 transition-colors duration-300">
              درباره ما
            </li>
          </Link>

          <Link to="/contact">
            <li className="hover:text-amber-600 transition-colors duration-300">
              تماس با ما
            </li>
          </Link>
        </ul>

        <div className="flex flex-row items-center justify-center md:gap-4 gap-3">
          <div className="flex flex-row items-center justify-center gap-1 border-2 border-amber-800/60 p-0.5 rounded-2xl">
            <IoIosSearch
              className="md:text-2xl text-xl cursor-pointer text-amber-600"
              onClick={goToSearchResults}
            />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="جستجو..."
              className="outline-none border-none bg-transparent text-white md:w-[200px] w-[100px] flex"
            />
          </div>

          <Link to="/Cart" className="relative" onClick={closeMenu}>
            <AiOutlineShoppingCart className="text-amber-600 md:text-2xl text-xl cursor-pointer" />
            {totalCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {totalCount}
              </span>
            )}
          </Link>


          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden text-amber-600 text-2xl cursor-pointer"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 py-4 text-white/90 text-sm bg-secondary/70 backdrop-blur-md border-t border-white/10">
          <Link to="/" onClick={closeMenu}>
            <li className="hover:text-amber-600 transition-colors duration-300">
              خانه
            </li>
          </Link>

          <a href="#guidance" onClick={closeMenu}>
            <li className="hover:text-amber-600 transition-colors duration-300">
              وبلاگ
            </li>
          </a>

          <Link to="/about" onClick={closeMenu}>
            <li className="hover:text-amber-600 transition-colors duration-300">
              درباره ما
            </li>
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            <li className="hover:text-amber-600 transition-colors duration-300">
              تماس با ما
            </li>
          </Link>
        </ul>
      )}
    </nav>
  );
}
