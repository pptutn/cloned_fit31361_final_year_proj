import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import LoginPage from "./Pages/LogIn/LoginPage";
import SignupPage from "./Pages/SignUp/SignupPage";
import SearchResults from "./Pages/Results/searchResults";
import SearchPage from "./Pages/Results/searchPage";
import SuburbDetails from "./Components/Suburb/SuburbDetails";

function App() {
  const location = useLocation();


  return (
    <div className="app">
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
