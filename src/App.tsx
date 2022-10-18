import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import LoginPage from "./Pages/LogIn/LoginPage";
import SearchPage from "./Pages/Results/searchPage";
import SignupPage from "./Pages/SignUp/SignupPage";

export interface IFilterValues {
  campusCode: string;
  distance: number;
  price: number;
  pubTransport: boolean;
  lateTransport: boolean;
  bus: boolean;
  tram: boolean;
  train: boolean;
}

export const initialFilters: IFilterValues = {
  distance: 25,
  price: 1000,
  pubTransport: false,
  lateTransport: false,
  bus: false,
  tram: false,
  train: false,
  campusCode: "",
};

function App() {
  const location = useLocation();

  const [selectedValue, setSelectedValue] = useState(initialFilters);

  return (
    <div className="app">
      <Routes location={location}>
        <Route
          path="/"
          element={
            <HomePage
              filterVal={initialFilters}
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
            />
          }
        />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignupPage />} />

        <Route
          path="/results"
          element={
            <SearchPage
              filterVal={initialFilters}
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
