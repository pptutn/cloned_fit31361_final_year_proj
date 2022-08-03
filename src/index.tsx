import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./Components/HomePage";
// import searchResults from "./Components/searchResults";
import Banner from "./Components/Headers/Banner";
import SearchBar from "./Components/Headers/SearchBar";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <div>
    <Banner />
    <SearchBar />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
