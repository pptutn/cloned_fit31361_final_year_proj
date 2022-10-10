import "./SearchBar.css";
import TextField from "@mui/material/TextField";
import {
  Autocomplete,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  ThemeProvider
} from "@mui/material";
import theme from "../../colourScheme";
import React from "react";
import { auth } from "../../firebase";
import SimpleDialog from "../AuxComponents/SimpleDialog";
import { useNavigate } from "react-router-dom";
import { Universities } from "../../constants";
import SearchPage from "../../Pages/Results/searchPage";
import { filterPropsI } from "../../Pages/Home/HomePage";
import { IFilterValues } from "../../App";
import SearchResults from "../../Pages/Results/searchResults";

function SearchBar(props: filterPropsI) {
  const [open, setOpen] = React.useState(false);
  const [university, setUniversity] = React.useState("");

  // onChange handler for the Select university component
  const handleSearchBarChange = (event: SelectChangeEvent<string>, child: React.ReactNode) => {
    setUniversity(event.target.value);
    // console.log(event.target.value);
    // console.log(university);
  }


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: IFilterValues) => {
    setOpen(false);
    props.setSelectedValue(value);
  };

  let navigate = useNavigate();

  const getUniCode = () => {
    if (university === "Deakin - Burwood") {
      return "DEA_BUR";
    }
    else if (university === "Deakin - Geelong") {
      return "DEA_GEE";
    }
    else if (university === "La Trobe University - Bundoora") {
      return "LAT_BUN";
    }
    else if (university === "The University of Melbourne") {
      return "MEL_PAR";
    }
    else if (university === "Monash University - Caufield") {
      return "MON_CAU";
    }
    else if (university === "Royal Melbourne Insitute of Technology") {
      return "RMI_MEL";
    }
    else if (university === "Swinburne University - Hawthorn") {
      return "SWI_HAW";
    }
    else if (university === "Victoria University - Footscray") {
      return "VIC_FOO";
    }
    else {
      return "MON_CLA";
    }

  }

  const showResults = () => {
    console.log(university);

    let uni_code: string = getUniCode();
    console.log(uni_code);

    props.setSelectedValue({ ...props.selectedValue, campusCode: uni_code });

    // <SearchPage university={uni_code} filterVal={props.filterVal} selectedValue={props.selectedValue} setSelectedValue={function (value: React.SetStateAction<IFilterValues>): void {
    //   throw new Error("Function not implemented.");
    // } }></SearchPage>
    let path = `/results`;
    navigate(path);
  };


  // const initialFilters: IFilterValues = {
  //   campusCode: "MON_CLA",
  //   distance: 15,
  //   price: 500,
  //   pubTransport: false,
  //   lateTransport: false,
  //   bus: true,
  //   tram: true,
  //   train: true,
  // };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={2}
        className="grid"
        alignItems="center"
        marginLeft="50px"
        marginRight="50px"
      >
        <Grid item xs={7}>
          <Paper className="paper">
            {/* <Autocomplete
              id="search-universities"
              color="primary"
              freeSolo
              options={Universities.map((option) => option.name)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search for your University"
                  fullWidth
                />
              )}
              onClick={showResults}
              onChange={showResults}
            /> */}
            <FormControl fullWidth>
              <InputLabel>Search for your University</InputLabel>
              <Select
                id="search-universities"
                color="primary"
                label="Search for your University"
                value={university}
                renderValue={(option) => option ? option : <em>Nothing Selected</em>}
                MenuProps={{
                  PaperProps: { sx: { maxHeight: 300 } }
                }}
                onChange={handleSearchBarChange}
              >
                {Universities.map((option) => { return <MenuItem value={option.name} onClick={() => { setUniversity(option.code); showResults }}>{option.name}</MenuItem> })}

              </Select>
            </FormControl>
          </Paper>
        </Grid>

        <Grid item xs={2}>
          <Paper className="paper">
            <Button
              className="filter-button"
              color="primary"
              variant="contained"
              size="large"
              fullWidth
              onClick={handleClickOpen}
            >
              FILTERS
            </Button>
            <SimpleDialog
              selectedValue={props.filterVal}
              open={open}
              onClose={handleClose}
            />
          </Paper>
        </Grid>

        <Grid item xs={2}>
          <Paper className="paper">
            <Button
              className="filter-button"
              color="secondary"
              variant="contained"
              size="large"
              fullWidth
              onClick={() => {
                handleClose(props.selectedValue);
                showResults();
              }}
            >
              SEARCH
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SearchBar;
