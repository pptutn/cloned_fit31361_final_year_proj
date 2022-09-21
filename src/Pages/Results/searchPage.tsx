import React from "react";
import "./searchPage.css";
import SearchResults from "./searchResults";
import { Box, Button, Grid, Paper, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GetData } from "./GetData";
import { GetPTVData } from "../../Apis/GetPTVData";
import { ThemeProvider } from "@emotion/react";
import theme from "../../colourScheme";
import BackButton from "../../Components/BackButton/BackButton";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ExpandableComponent from "../../Components/ExpandableComponent/ExpandableComponent";
import FavouriteButton from "../../Components/FavouriteButton";


function SearchPage() {
  let navigate = useNavigate();

  //
  const monashSuburbs = [
    { suburbName: "Clayton", postCode: "3168" },
    { suburbName: "Dandenong", postCode: "3175" },
    { suburbName: "Huntingdale", postCode: "3166" },
    { suburbName: "Chadstone", postCode: "3148" },
    { suburbName: "Clayton South", postCode: "3169" },
  ];

  const uniMelbSuburbs = [
    { suburbName: "Parkville", postCode: "3010" },
    { suburbName: "Carlton", postCode: "3053" },
    { suburbName: "Fitzroy", postCode: "3065" },
    { suburbName: "North Melbourne", postCode: "3051" },
    { suburbName: "Melbourne", postCode: "3000" },
  ];

  const renderSuburbResults = (
    localityData: { suburbName: string; postCode: string }[]
  ) => {
    return localityData
      .map((s) => GetData(s))
      .map((s) =>
        <ExpandableComponent {...s}></ExpandableComponent>
      )
  };


  return (
    <ThemeProvider theme={theme}>

      {/* add in the back button for navigation */}
      <Box>
        <Stack
          spacing={4}
          direction="row">
          <Button color="primary" onClick={() => navigate(-1)}>
            <ArrowBackIcon fontSize="large" />
          </Button>
          <div className="banner_right">
            <h1 className="h1">Ideal Suburbs</h1>
          </div>
        </Stack>
      </Box>

      <Box>
        <Stack
          padding={2}
          spacing={3}
          direction="row">
          <Button variant="contained">Average Rent</Button>
          <Button variant="contained">Distance from University</Button>
          <Button variant="contained">More Filters</Button>
        </Stack>
      </Box>

      {/* create the expandable component */}
      {renderSuburbResults(monashSuburbs)}

    </ThemeProvider>
  );
}

export default SearchPage;
