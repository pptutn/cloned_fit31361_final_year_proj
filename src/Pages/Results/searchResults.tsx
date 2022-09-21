import "./searchResults.css";

// function searchResults({ suburb, price, distance, Car_Time, PTV_Time }: any) {
//   return (
//     <div className="searchResult">
//       <FavoriteBorderIcon className="searchResult__heart" />


import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useState } from "react";
import FavouriteButton from "../../Components/FavouriteButton";

interface Props {
  suburbName: string;
  postCode: string;
  medianRent: number;
  lowerRent: number;
  upperRent: number;
  onClick?: any;
}

function SearchResults(props: Props) {
  const [favourite, setFavourite] = useState(false);

  const onPress = () => {
    console.log("favourite BEFORE: " + favourite);

    // change the state of the favourite button on click
    setFavourite(!favourite);
    console.log("favourite AFTER: " + favourite);
  };

  return (
    <div
      className="searchResult"
      onClick={props.onClick ? props.onClick : null}
    >
      <FavouriteButton favourite={favourite} suburbName={props.suburbName} />
      {/* <FavoriteBorderIcon className="searchResult__heart" /> */}

      <div className="resultsPageInfo">
        <div className="searchResult__info">
          <div className="searchResult__infoTop">
            {/* <h1>{suburb}</h1> */}
          </div>
          <div className="searchResult__infoBottom">
            <p>Average Rent: ${props.medianRent}</p>
            <p>Rent Range: ${props.lowerRent} to ${props.upperRent}
            </p>
            {/* <p>Distance: {distance}km</p>
            <p>Travel Time by Car: {Car_Time} mins</p>
            <p>Travel Time by Public Transport: {PTV_Time} mins</p> */}
            <p>Click here to search for rental houses</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
