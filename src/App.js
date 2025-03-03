import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage/RegisterPage.js";
import HomePage from "./pages/HomePage/HomePage.js";
import LoginPage from "../src/pages/LoginPage/LoginPage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/LoginPage" Component={LoginPage} />
        <Route path="/RegisterPage" Component={RegisterPage} />
      </Routes>
    </BrowserRouter>
  );
}
//hello//

export default App;
