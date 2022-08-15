import ReactDOM from "react-dom/client";
import "./index.css";
import Banner from "./Components/Headers/Banner";
import SearchBar from "./Components/Headers/SearchBar";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  useLocation,
} from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <div>
    <Banner />
    {/* <SearchBar /> */}

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
