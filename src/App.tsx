import { constants } from "crypto";
import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Universities } from "./constants";
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

function App() {
  const location = useLocation();
  const initialFilters: IFilterValues = {
    // campusCode: "MON_CLA",
    distance: 15,
    price: 500,
    pubTransport: false,
    lateTransport: false,
    bus: true,
    tram: true,
    train: true,
    campusCode: ""
  };

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
              university=""
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
