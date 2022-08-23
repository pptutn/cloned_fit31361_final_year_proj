import "./searchResults.css";
import FavoriteBorderIcon  from "@material-ui/icons/FavoriteBorder";

function searchResults({
  suburb,
  price,
  distance,
  crime,
  time,
  onClick
}: any) {
  return (
    <div className = 'searchResult' onClick={onClick}>
      <FavoriteBorderIcon className="searchResult__heart" />

      <div className = 'resultsPageInfo'>
        <div className='searchResult__info'>
          <div className="searchResult__infoTop">
              <h1>{suburb}</h1>
          </div>
          <div className='searchResult__infoBottom'>
            <p>Average Rent: {price}</p>
            <p>Distance: {distance}</p>
            <p>Crime Rates: {crime}</p>
            <p>Average Transit Time: {time}</p>
            <p>Click here to search for rental houses</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default searchResults;