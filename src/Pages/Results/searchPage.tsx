import React from "react";
import "./searchPage.css";
import SearchResults from "./searchResults";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GetData } from "./GetData";
import { GetPTVData } from "../../Apis/GetPTVData";


function SearchPage() {
  let navigate = useNavigate();
  const showDetails = () => {
    let path = `/details`;
    navigate(path);
  };

  
  const suburbsData = [
    { suburbName: "Clayton", postCode: "3168" },
    { suburbName: "Dandenong", postCode: "3175" },
    { suburbName: "Huntingdale", postCode: "3166" },
    { suburbName: "Chadstone", postCode: "3148" },
    { suburbName: "Clayton South", postCode: "3169" },
  ];


  // const rentData = suburbsData.map((s) => GetData(s));
  const PtvData = suburbsData.map((s) => GetPTVData(s));


  // const resultsElem = rentData.map((s) => (
  //   <SearchResults {...s} onClick={showDetails} />
  // ));

  const resultsElem = suburbsData.map((s) => (
    <SearchResults medianRent={0} lowerRent={0} upperRent={0} {...s} onClick={showDetails} />
  ));

  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <h1>Ideal Suburbs</h1>
        <Button variant="outlined">Average Rent</Button>
        <Button variant="outlined">Distance from University</Button>
        <Button variant="outlined">More Filters</Button>
      </div>
      {resultsElem}
    </div>
  );
}

export default SearchPage;
