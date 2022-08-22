import "./SuburbDetails.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Grid from "@mui/material/Grid";

function SuburbDetails() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <div className="SuburbInfo">
          <div className="SuburbDetailsPage">
            <FavoriteBorderIcon className="SuburbInfo__heart" />
            <div className="SuburbResult__infoTop">
              <h1>Clayton</h1>
            </div>
            <div className="SuburbResult__heading">
              <h3>Suburb Overview</h3>
            </div>
            <div className="SuburbResult__infoBottom">
              <p>Average Rent: $600/week</p>
              <p>Distance:3.1km </p>
              <p>Crime Rates: 15% </p>
              <p>Average Transit Time: 0.1 hours </p>
            </div>
            <div className="Suburb__Hyperlink">
              <p><a href="https://www.domain.com.au/rent/clayton-vic-3168/">
              Click here to search for rental houses
            </a></p>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default SuburbDetails;
