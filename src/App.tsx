import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import LoginPage from "./Pages/LogIn/LoginPage";
import SignupPage from "./Pages/SignUp/SignupPage";
import SearchResults from "./Pages/Results/searchResults";
import SearchPage from "./Pages/Results/searchPage";
import SuburbDetails from "./Pages/Suburb/SuburbDetails";
import { useState } from "react";

export interface IFilterValues {
  distance: number;
  price: number;
  pubTransport: boolean;
  lateTransport: boolean;
}

function App() {
  const location = useLocation();

  const initialFilters: IFilterValues = {
    distance: 0,
    price: 0,
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

        <Route path="/results" element={<SearchPage />} />

        <Route path="/details" element={<SuburbDetails />} />
      </Routes>
    </div>
  );
}

export default App;
