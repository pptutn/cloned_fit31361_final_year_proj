import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import LoginPage from "./Pages/LogIn/LoginPage";
import SearchPage from "./Pages/Results/searchPage";
import SignupPage from "./Pages/SignUp/SignupPage";

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignupPage />} />

        <Route path="/results" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
