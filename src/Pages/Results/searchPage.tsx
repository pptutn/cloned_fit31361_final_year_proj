import React from "react";
import "./searchPage.css";
import { useState, useEffect } from "react";
import { getSearchData } from "../../Components/API/getSuburbData";
import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "../../colourScheme";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExpandableComponent from "../../Components/ExpandableComponent/ExpandableComponent";
import { filterPropsI } from "../Home/HomePage";
import { GetScore, calcScore } from "../../Components/Algorithm/GetScore";
import FavouriteButton from "../../Components/FavouriteButton";
import { suburbProps } from "../../Components/ExpandableComponent/ExpandableComponent";

export interface SearchProps extends filterPropsI {
  university: string;
}

function SearchPage(props: filterPropsI) {
  const [suburbs, setSuburbs] = useState<any[]>([]);

  const handleData = async () => {
    // console.log("this is campusCode passed in: " + props.selectedValue.campusCode);
    const searchData = await getSearchData(props.selectedValue.campusCode);
    const searchDataWithScore = searchData.map((s: suburbProps) => {
      return { ...s, score: calcScore(s) };
    });
    setSuburbs(searchDataWithScore);
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

  function sortRelevant() {
    const sortByScore = [...suburbs].sort((a, b) => b.score - a.score);
    setSuburbs(sortByScore);
  }

  let navigate = useNavigate();

  const renderSuburbResults = suburbs.map((elem) => (
    <ExpandableComponent {...elem}></ExpandableComponent>
  ));

  // console.log("this is selected distance", props.selectedValue.distance);
  // console.log("props", props.selectedValue);
  // console.log("sub", suburbs);

  const filteredResults = suburbs.filter(
    (sub) =>
      sub.distance < props.selectedValue.distance &&
      sub.medianRentPrice < props.selectedValue.price &&
      (props.selectedValue.bus === false &&
      props.selectedValue.train === false &&
      props.selectedValue.tram === false
        ? sub.train == true || sub.bus == true || sub.tram == true
        : props.selectedValue.train == sub.train &&
          sub.bus == props.selectedValue.bus &&
          sub.tram == props.selectedValue.tram)
  );

  const filteredResultsElements = filteredResults.map((elem) => (
    <ExpandableComponent {...elem}></ExpandableComponent>
  ));

  const resultsOrNot = (
    <Typography padding={2} variant="h5" color="white" align="justify">
      There are no results for the filters selected
    </Typography>
  );

  return (
    <ThemeProvider theme={theme}>
      {/* page header, includes a back button and heading */}
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

      {/* sort by subheadings */}
      <Box>
        <Stack padding={0}>
          <h2 className="sortHeading">Sort By</h2>
        </Stack>
      </Box>

      {/* filter buttons available for the user to sort by */}
      <Box>
        <Stack padding={2} spacing={3} direction="row">
          <Button onClick={sortRelevant} variant="contained">
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

      {filteredResults.length > 0 ? filteredResultsElements : resultsOrNot}
    </ThemeProvider>
  );
}

export default SearchPage;
