import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import _404 from "./pages/_404";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import LessonDetails from "./pages/LessonDetails";
import Faqs from "./pages/Faqs";
import LoginRegister from "./pages/LoginRegister";
import { useState, useEffect } from "react";
import LessonUnits from "./pages/LessonUnits";
import Course from "./pages/Course";
import CourseDetails from "./pages/CourseDetails";

function App() {
  let [login, setLogin] = useState(true);
  let [courseDetails, setCourseDetails] = useState(true);
  const location = useLocation();

  useEffect(() => {
    console.log("Location changed!", location.pathname);
    if (location.pathname.includes("login")) setLogin(false);
    else setLogin(true);
  }, [location]);

  useEffect(() => {
    console.log("Location changed!", location.pathname);
    if (location.pathname.includes("courseDetails")) setCourseDetails(false);
    else setCourseDetails(true);
  }, [location]);

  return (
    <div className="App">
      <Header isValid={login} />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blog" element={<Blogs />} />
        <Route exact path="/blogDetails" element={<BlogDetails />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/course" element={<Course />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route
          exact
          path="/lessonUnits"
          element={<LessonUnits isValid={courseDetails} />}
        />
        <Route exact path="/lessonDetails" element={<LessonDetails />} />
        <Route exact path="/courseDetails" element={<CourseDetails />} />
        <Route exact path="/faqs" element={<Faqs />} />
        <Route exact path="/loginRegister" element={<LoginRegister />} />
        <Route exact path="/*" element={<_404 />} />
      </Routes>
      <Footer isValid={login} />
    </div>
  );
}

export default App;
