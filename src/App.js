import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage/RegisterPage.js";
import HomePage from "./pages/HomePage/HomePage.js";
import LoginPage from "./pages/LoginPage/LoginPage.js";
import LandingPage from "./pages/HomePage/Pages/LandingPage/LandingPage.js";
import ContactUsPage from "./pages/HomePage/Pages/ContactUsPage/ContactUsPage.js";
import AboutUsPage from "./pages/HomePage/Pages/AboutUsPage/AboutUsPage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
//hello//

export default App;
