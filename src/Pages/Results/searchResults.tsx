import "./searchResults.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function searchResults({ suburb, price, distance, Car_Time, PTV_Time }: any) {
  return (
    <div className="searchResult">
      <FavoriteBorderIcon className="searchResult__heart" />

      <div className="resultsPageInfo">
        <div className="searchResult__info">
          <div className="searchResult__infoTop">
            <h1>{suburb}</h1>
          </div>
          <div className="searchResult__infoBottom">
            <p>Average Rent: ${price}p/w</p>
            <p>Distance: {distance}km</p>
            <p>Travel Time by Car: {Car_Time} mins</p>
            <p>Travel Time by Public Transport: {PTV_Time} mins</p>
            <p>Click here to search for rental houses</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default searchResults;
