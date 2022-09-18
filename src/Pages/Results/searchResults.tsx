import "./searchResults.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";

interface Props {
  suburbName: string;
  postCode: string;
  medianRent: number;
  lowerRent: number;
  upperRent: number;
  onClick?: any;
}

function SearchResults(props: Props) {
  return (
    <div
      className="searchResult"
      onClick={props.onClick ? props.onClick : null}
    >
      <FavoriteBorderIcon className="searchResult__heart" />

      <div className="resultsPageInfo">
        <div className="searchResult__info">
          <div className="searchResult__infoTop">
            <h1>{props.suburbName}</h1>
          </div>
          <div className="searchResult__infoBottom">
            <p>Average Rent: ${props.medianRent}</p>
            <p>
              Rent Range: ${props.lowerRent} to ${props.upperRent}
            </p>
            <p>Distance: TBC</p>
            <p>Average Transit Time: TBC</p>
            <p>Click here to search for rental houses</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
