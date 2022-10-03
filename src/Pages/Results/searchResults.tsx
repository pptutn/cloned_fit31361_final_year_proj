import "./searchResults.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useState } from "react";
import FavouriteButton from "../../Components/FavouriteButton";

interface Props {
  suburb: string;
  postCode: string;
  medianRentPrice: number;
  distance: number;
  carTime: number;
  ptvTime: number;
  bus: boolean;
  tram: boolean;
  train: boolean;
  rideShare: boolean;
  noBusStop: number;
  closestStation: string;
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
      <FavouriteButton favourite={favourite} suburbName={props.suburb} email={null} />
      {/* <FavoriteBorderIcon className="searchResult__heart" /> */}

      <div className="resultsPageInfo">
        <div className="searchResult__info">
          <div className="searchResult__infoTop">{/* <h1>{suburb}</h1> */}</div>
          <div className="searchResult__infoBottom">
            <p>Average Rent: ${props.medianRentPrice}</p>
            <p>Distance: {props.distance}km</p>
            <p>Travel Time by Car: {props.carTime} mins</p>
            <p>Travel Time by Public Transport: {props.ptvTime} mins</p>
            <p>Click here to search for rental houses</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
