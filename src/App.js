import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage/RegisterPage.js";
import LoginPage from "./pages/LoginPage/LoginPage.js";
import LandingPage from "./pages/HomePage/LandingPage.js";
import ContactUsPage from "./pages/HomePage/Pages/ContactUsPage/ContactUsPage.js";
import AboutUsPage from "./pages/HomePage/Pages/AboutUsPage/AboutUsPage.js";
import HomePage from "./pages/HomePage/Pages/HomePage/HomePage.js";
import ProfilePage from "./pages/HomePage/Pages/profile/ProfilePage.js";
import BooksPage from "./pages/HomePage/Pages/BooksPage/BooksPage.js";
import CheckoutPage from "./pages/HomePage/Pages/CheckoutPage/CheckoutPage.js";
import CoursePage from "./pages/HomePage/Pages/CoursePage/CoursePage.js";
import QuizPage from "./pages/HomePage/Pages/QuizPage/QuizPage.js";
function App() {
  const [userType, setUserType] = useState("reader");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/product" element={<BooksPage />} />
          <Route path="/Checkout" element={<CheckoutPage />} />
          <Route path="/Quiz" element={<QuizPage />} />
          <Route
            path="/profilePage"
            element={<ProfilePage userType={userType} />}
          />
          {/* <Route path="/courses/: courseName" element={<CoursePage />} /> */}
          <Route path="/course" element={<CoursePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
//hello//

export default App;
