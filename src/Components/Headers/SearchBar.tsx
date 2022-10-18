import "./SearchBar.css";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  ThemeProvider,
} from "@mui/material";
import theme from "../../colourScheme";
import React from "react";
import SimpleDialog from "../AuxComponents/SimpleDialog";
import { useNavigate } from "react-router-dom";
import { Universities } from "../../constants";
import { filterPropsI } from "../../Pages/Home/HomePage";
import { IFilterValues } from "../../App";

function SearchBar(props: filterPropsI) {
  const [open, setOpen] = React.useState(false);
  const [university, setUniversity] = React.useState("");

  // onChange handler for the Select university component
  const handleSearchBarChange = (
    event: SelectChangeEvent<string>,
    child: React.ReactNode
  ) => {
    setUniversity(event.target.value);
    // console.log(event.target.value);
    // console.log(university);
  };

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
    } else if (university === "Deakin - Geelong") {
      return "DEA_GEE";
    } else if (university === "La Trobe University - Bundoora") {
      return "LAT_BUN";
    } else if (university === "The University of Melbourne") {
      return "MEL_PAR";
    } else if (university === "Monash University - Caufield") {
      return "MON_CAU";
    } else if (university === "Royal Melbourne Insitute of Technology") {
      return "RMI_MEL";
    } else if (university === "Swinburne University - Hawthorn") {
      return "SWI_HAW";
    } else if (university === "Victoria University - Footscray") {
      return "VIC_FOO";
    } else {
      return "MON_CLA";
    }
  };

  const showResults = () => {
    let uni_code: string = getUniCode();

    props.setSelectedValue({ ...props.selectedValue, campusCode: uni_code });

    let path = `/results`;
    navigate(path);
  };

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
            <FormControl fullWidth>
              <InputLabel>Search for your University</InputLabel>
              <Select
                id="search-universities"
                color="primary"
                label="Search for your University"
                value={university}
                renderValue={(option) =>
                  option ? option : <em>Nothing Selected</em>
                }
                MenuProps={{
                  PaperProps: { sx: { maxHeight: 300 } },
                }}
                onChange={handleSearchBarChange}
              >
                {Universities.map((option) => {
                  return (
                    <MenuItem
                      value={option.name}
                      onClick={() => {
                        setUniversity(option.code);
                        showResults;
                      }}
                    >
                      {option.name}
                    </MenuItem>
                  );
                })}
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
