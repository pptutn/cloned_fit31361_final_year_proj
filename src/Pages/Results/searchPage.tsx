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
import { filterPropsI } from "../Home/HomePage";

function SearchPage(props: filterPropsI) {
  const [suburbs, setSuburbs] = useState<any[]>([]);

  const handleData = async () => {
    const searchData = await getSearchData();
    setSuburbs(searchData);
  };

  useEffect(() => {
    handleData();
  }, []);

  let navigate = useNavigate();

  // console.log(suburbs);

  const renderSuburbResults = suburbs.map((elem) => (
    <ExpandableComponent {...elem}></ExpandableComponent>
  ));

  // console.log("this is selected distance", props.selectedValue.distance);
  // console.log("props", props.selectedValue);
  const filteredResults = suburbs.filter(
    (sub) =>
      sub.distance < props.selectedValue.distance &&
      sub.medianRentPrice < props.selectedValue.price
  );

  const filteredResultsElements = filteredResults.map((elem) => (
    <ExpandableComponent {...elem}></ExpandableComponent>
  ));
  // console.log("this is suburbs", suburbs);
  // console.log("filteredResults", props.selectedValue.distance, filteredResults);
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
        <Stack padding={2} spacing={3} direction="row">
          <Button variant="contained">Average Rent</Button>
          <Button variant="contained">Distance from University</Button>
          <Button variant="contained">More Filters</Button>
        </Stack>
      </Box>

      {/* create the expandable component */}
      {/* <div>DISTANCE IS {props.selectedValue.distance}km</div> */}
      {/* <div>PRICE IS ${props.selectedValue.price}</div> */}
      {/* <div>BUS? {props.selectedValue.bus.toString()}</div> */}
      {/* <div>TRAIN? {props.selectedValue.train.toString()}</div> */}
      {/* <div>TRAM? {props.selectedValue.tram.toString()}</div> */}
      {/* {renderSuburbResults} */}
      {filteredResultsElements}
    </ThemeProvider>
  );
}

export default SearchPage;
