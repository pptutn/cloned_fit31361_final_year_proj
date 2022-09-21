import "./searchPage.css";
import SearchResults from "./searchResults";
import { Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { getSearchData } from "../../Components/API/getSuburbData";

function SearchPage() {
  const [suburbs, setSuburbs] = useState<any[]>([]);

  const handleData = async () => {
    const searchData = await getSearchData();
    setSuburbs(searchData);
  };

  // when the compoent is created this will run
  useEffect(() => {
    handleData();
    console.log(suburbs);
  }, []);

  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <h1>Ideal Suburbs</h1>
        <Button variant="outlined">Average Rent</Button>
        <Button variant="outlined">Distance from University</Button>
        <Button variant="outlined">More Filters</Button>
      </div>
      {suburbs.map((elem) => (
        <SearchResults
          suburb={elem.Suburb}
          price={elem.Median_Rent_Price}
          distance={elem.Distance}
          Car_Time={elem.Car_Time}
          PTV_Time={elem.PTV_Time}
        />
      ))}
    </div>
  );
}

export default SearchPage;
