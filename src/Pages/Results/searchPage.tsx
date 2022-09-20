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


function SearchPage() {
  let navigate = useNavigate();
  const showDetails = () => {
    let path = `/details`;
    navigate(path);
  };

  
  const suburbsData = [
    { suburbName: "Clayton", postCode: "3168" },
    { suburbName: "Dandenong", postCode: "3175" },
    { suburbName: "Huntingdale", postCode: "3166" },
    { suburbName: "Chadstone", postCode: "3148" },
    { suburbName: "Clayton South", postCode: "3169" },
  ];

  // const rentData = suburbsData.map((s) => GetData(s));
  const PtvData = suburbsData.map((s) => GetPTVData(s));

  // const resultsElem = rentData.map((s) => (
  //   <SearchResults {...s} onClick={showDetails} />
  // ));

  const resultsElem = suburbsData.map((s) => (
    <SearchResults medianRent={0} lowerRent={0} upperRent={0} {...s} onClick={showDetails} />
  ));

  return (
    <ThemeProvider theme={theme}>

      {/* add in the back button for navigation */}
        <Box>
          <Stack
          spacing={4}
          direction="row">
          <Button color = "primary" onClick={() => navigate(-1)}>
              <ArrowBackIcon fontSize="large"/>
          </Button>
          <div className="banner_title">
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
        
      
      {resultsElem}
    </ThemeProvider>
  );
}

export default SearchPage;
