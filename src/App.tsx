import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import LoginPage from "./Pages/LogIn/LoginPage";
import SearchPage from "./Pages/Results/searchPage";
import SignupPage from "./Pages/SignUp/SignupPage";
// import SuburbDetails from "./Pages/Suburb/SuburbDetails";
import SuburbDetails from "./Pages/Suburb/SuburbDetails";
import { useState } from "react";

export interface IFilterValues {
  selectedUni: string;
  distance: number;
  price: number;
  pubTransport: boolean;
  lateTransport: boolean;
}

function App() {
  const location = useLocation();

  const initialFilters: IFilterValues = {
    selectedUni: "none selected",
    distance: 25,
    price: 500,
    pubTransport: false,
    lateTransport: false,
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
          element={<SearchPage filterValues={selectedValue} />}
        />

        {/* <Route path="/details" element={<SuburbDetails />} /> */}
      </Routes>
    </div>
  );
}

export default App;
