import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import _404 from "./pages/_404";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
import CourseDetails from "./pages/CourseDetails";
import Faqs from "./pages/Faqs";
import LoginRegister from "./pages/LoginRegister";

function App() {
  return (
    <div className="App">
      <Header />
  <br/>
  <br/>
  <br/>
  <br/> <br/>
  <br/>
      <div>
        <Link to="/*">
          40000000000000000000004
        </Link>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blog" element={<Blogs />} />
        <Route exact path="/blogDetails" element={<BlogDetails />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/category" element={<Category />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/course" element={<Course />} />
        <Route exact path="/courseDetails" element={<CourseDetails />} />
        <Route exact path="/faqs" element={<Faqs />} />
        <Route exact path="/loginRegister" element={<LoginRegister />} />
        <Route exact path="/*" element={<_404 />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
