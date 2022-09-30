import "./searchPage.css";
import SearchResults from "./searchResults";
import { useState, useEffect } from "react";
import { getSearchData } from "../../Components/API/getSuburbData";
import React from "react";
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

  let navigate = useNavigate();

  console.log(suburbs);

  const renderSuburbResults = suburbs.map((elem) => (
    <ExpandableComponent {...elem}></ExpandableComponent>
  ));

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
      {renderSuburbResults}
    </ThemeProvider>
  );
}

export default SearchPage;
