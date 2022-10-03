import React from "react";
import "./searchPage.css";
import SearchResults from "./searchResults";
import { useState, useEffect } from "react";
import { getSearchData } from "../../Components/API/getSuburbData";
import { Box, Button, Grid, Paper, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GetData } from "./GetData";
import { ThemeProvider } from "@emotion/react";
import theme from "../../colourScheme";
import BackButton from "../../Components/BackButton/BackButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExpandableComponent from "../../Components/ExpandableComponent/ExpandableComponent";
import FavouriteButton from "../../Components/FavouriteButton";

function SearchPage() {
  const [suburbs, setSuburbs] = useState<any[]>([]);

  const handleData = async () => {
    const searchData = await getSearchData();
    setSuburbs(searchData);
  };

  useEffect(() => {
    handleData();
  }, []);

  function sortPrice() {
    const priceData = [...suburbs].sort(
      (a, b) => a.medianRentPrice - b.medianRentPrice
    );
    setSuburbs(priceData);
  }

  function sortDistance() {
    const distanceData = [...suburbs].sort((a, b) => a.distance - b.distance);
    setSuburbs(distanceData);
  }

  function sortCarTime() {
    const carData = [...suburbs].sort((a, b) => a.carTime - b.carTime);
    setSuburbs(carData);
  }

  function sortPtvTime() {
    const ptvData = [...suburbs].sort((a, b) => a.ptvTime - b.ptvTime);
    setSuburbs(ptvData);
  }

  function sortBusStops() {
    const busData = [...suburbs].sort((a, b) => b.noBusStop - a.noBusStop);
    setSuburbs(busData);
  }

  let navigate = useNavigate();

  const renderSuburbResults = suburbs.map((elem) => (
    <ExpandableComponent {...elem}></ExpandableComponent>
  ));
  console.log(renderSuburbResults);

  return (
    <ThemeProvider theme={theme}>
      {/* add in the back button for navigation */}
      <Box>
        <Stack spacing={4} direction="row">
          <Button color="primary" onClick={() => navigate(-1)}>
            <ArrowBackIcon fontSize="large" />
          </Button>
          <div className="banner_right">
            <h1 className="h1">Suburb Results</h1>
          </div>
        </Stack>
      </Box>

      <Box>
        <Stack padding={0}>
          <h2 className="sortHeading">Sort By</h2>
        </Stack>
      </Box>

      <Box>
        <Stack padding={2} spacing={3} direction="row">
          <Button onClick={sortPrice} variant="contained">
            Most Relevant
          </Button>
          <Button onClick={sortPrice} variant="contained">
            Average Rent
          </Button>
          <Button onClick={sortDistance} variant="contained">
            Distance from University
          </Button>
          <Button onClick={sortCarTime} variant="contained">
            Time by Car
          </Button>
          <Button onClick={sortPtvTime} variant="contained">
            Time by Public Transport
          </Button>
          <Button onClick={sortBusStops} variant="contained">
            Number of Bus Stops
          </Button>
        </Stack>
      </Box>

      {/* create the expandable component */}
      {renderSuburbResults}
    </ThemeProvider>
  );
}

export default SearchPage;
