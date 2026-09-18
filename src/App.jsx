import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import AddReview from "./components/AddReview";
import { ReviewsProvider } from "./components/context/ReviewsContext";
import { SearchProvider } from "./components/context/SearchContext";
import AllProducts from "./components/AllProducts";
import { CartProvider } from "./components/context/CartContext";
import Cart from "./components/Cart";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";
import BlogDetail from "./components/BlogDetail";

export default function App() {
  return (
    <Router basename="/aroma-coffee/">
      <ScrollToTop />
      <ReviewsProvider>
        <SearchProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/add-review" element={<AddReview />} />
              <Route path="/AllProducts" element={<AllProducts />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CartProvider>
        </SearchProvider>
      </ReviewsProvider>
    </Router>
  );
}
