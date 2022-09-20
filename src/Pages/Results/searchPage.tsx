import "./searchPage.css";
import SearchResults from "./searchResults";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { GetData } from "./GetData";

function SearchPage() {
  let navigate = useNavigate();
  const showDetails = () => {
    let path = `/details`;
    navigate(path);
  };

  //
  const monashSuburbs = [
    { suburbName: "Clayton", postCode: "3168" },
    { suburbName: "Dandenong", postCode: "3175" },
    { suburbName: "Huntingdale", postCode: "3166" },
    { suburbName: "Chadstone", postCode: "3148" },
    { suburbName: "Clayton South", postCode: "3169" },
  ];

  const uniMelbSuburbs = [
    { suburbName: "Parkville", postCode: "3010" },
    { suburbName: "Carlton", postCode: "3053" },
    { suburbName: "Fitzroy", postCode: "3065" },
    { suburbName: "North Melbourne", postCode: "3051" },
    { suburbName: "Melbourne", postCode: "3000" },
  ];

  const renderSuburbResults = (
    localityData: { suburbName: string; postCode: string }[]
  ) => {
    return localityData
      .map((s) => GetData(s))
      .map((s) => <SearchResults {...s} onClick={showDetails} />);
  };

  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <h1>Ideal Suburbs</h1>
        <Button variant="outlined">Average Rent</Button>
        <Button variant="outlined">Distance from University</Button>
        <Button variant="outlined">More Filters</Button>
      </div>
      {renderSuburbResults(monashSuburbs)}
    </div>
  );
}

export default SearchPage;
