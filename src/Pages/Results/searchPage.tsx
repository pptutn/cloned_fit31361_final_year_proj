import "./searchPage.css";
import SearchResults from "./searchResults";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { GetData } from "./GetData";
import { IFilterValues } from "../../App";

interface searchProps {
  filterValues: IFilterValues;
}
interface uniDictionaryI {
  [index: string]: {
    suburbName: string;
    postCode: string;
  }[];
}

function SearchPage(props: searchProps) {
  let navigate = useNavigate();
  const showDetails = () => {
    let path = `/details`;
    navigate(path);
  };

  const renderSuburbResults = (
    localityData: { suburbName: string; postCode: string }[]
  ) => {
    return localityData
      .map((s) => GetData(s)) // api call to get rent data
      .map((s) => <SearchResults {...s} onClick={showDetails} />); // creates the element
  };

  const uniDictionary: uniDictionaryI = {
    "Monash University": monashClaytonSuburbs,
    "Monash University Peninsula": monashPeninsulaSuburbs,
    "The University of Melbourne": uniMelbParkvilleSuburbs,
    RMIT: rmitMelbSuburbs,
  };

  console.log("heres johnny", uniDictionary[props.filterValues.selectedUni]);
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <h1>Ideal Suburbs for {props.filterValues.selectedUni}</h1>
        <Button variant="outlined">Average Rent</Button>
        <Button variant="outlined">Distance from University</Button>
        <Button variant="outlined">More Filters</Button>
      </div>
      {/* <div>test{uniDictionary[props.filterValues.selectedUni][0]}</div> */}
      {/* <div>Uni selected{props.filterValues.selectedUni}</div>
      <div>Distance selected{props.filterValues.distance}</div>
      <div>Price selected{props.filterValues.price}</div> */}
      {/*THE FOLLOWING LINE RETURNS THE ARRAY OF LOCALITY DATA BASED ON SELECTED UNI*/}
      {renderSuburbResults(uniDictionary[props.filterValues.selectedUni])}
      {/* {renderSuburbResults(uniMelbSuburbs)} */}
    </div>
  );
}

const monashClaytonSuburbs = [
  { suburbName: "Clayton", postCode: "3168" },
  { suburbName: "Dandenong", postCode: "3175" },
  { suburbName: "Huntingdale", postCode: "3166" },
  { suburbName: "Chadstone", postCode: "3148" },
  { suburbName: "Clayton South", postCode: "3169" },
];

const monashPeninsulaSuburbs = [
  { suburbName: "Frankston", postCode: "3199" },
  { suburbName: "Langwarrin", postCode: "3910" },
  { suburbName: "Seaford", postCode: "3198" },
  { suburbName: "Mount Eliza", postCode: "3930" },
];

const uniMelbParkvilleSuburbs = [
  { suburbName: "Parkville", postCode: "3052" },
  { suburbName: "Carlton", postCode: "3053" },
  { suburbName: "Fitzroy", postCode: "3065" },
  { suburbName: "North Melbourne", postCode: "3051" },
  { suburbName: "Melbourne", postCode: "3000" },
];

const rmitMelbSuburbs = [
  { suburbName: "Parkville", postCode: "3052" },
  { suburbName: "Carlton", postCode: "3053" },
  { suburbName: "Fitzroy", postCode: "3065" },
  { suburbName: "North Melbourne", postCode: "3051" },
  { suburbName: "Melbourne", postCode: "3000" },
];

export default SearchPage;
