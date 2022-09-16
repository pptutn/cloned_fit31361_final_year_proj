import React from "react";
import "./HomePage.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import InfoBox from "../../Components/AuxComponents/InfoBox";
import SimpleDialog from "../../Components/AuxComponents/SimpleDialog";
import { Button, Typography } from "@mui/material";

export interface IFilterValues {
  distance: number;
  price: number;
  pubTransport: boolean;
  lateTransport: boolean;
}

function HomePage() {
  // POPUP STUFF
  const emails = ["username@gmail.com", "user02@gmail.com"];

  const initialFilters: IFilterValues = {
    distance: 0,
    price: 0,
    pubTransport: false,
    lateTransport: false,
  };

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(initialFilters);

  const handleClickOpen = () => {
    setOpen(true);
  };

  // sets the entire state
  const handleClose = (value: IFilterValues) => {
    // setOpen(false);
    setSelectedValue(value);
  };

  return (
    <Stack
      spacing={{ xs: 1, sm: 2, md: 4 }}
      sx={{ width: 1, height: 1 }}
      alignItems={"centre"}
      ml={2}
      mr={2}
    >
      {/* POPUP STUFF */}
      <div>
        {/* <Typography variant="subtitle1" component="div">
          Selected: {selectedValue}
        </Typography> */}
        <br />
        <Button variant="outlined" onClick={handleClickOpen}>
          FILTER MENU
        </Button>
        <SimpleDialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        />
      </div>
      {/* POPUP STUFF */}
      <div>
        <Autocomplete
          id="search-universities"
          freeSolo
          sx={{ width: 0.9, height: 1 }}
          options={Universities.map((option) => option.name)}
          renderInput={(params) => (
            <TextField {...params} label="Search for your University" />
          )}
        />
        <h2 className="HomePage-title"> Frequently Searched Universities</h2>
      </div>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        alignItems={"centre"}
        justifyContent={"space-evenly"}
      >
        <InfoBox name="Monash University" campusLocation="Clayton, VIC" />
        <InfoBox
          name="The University of Melbourne"
          campusLocation="Parkville, VIC"
        />
        <InfoBox name="University of Sydney" campusLocation="Sydney, NSW" />
        <InfoBox name="University of NSW" campusLocation="Kensington, NSW" />
      </Stack>
    </Stack>
  );
}

const Universities = [
  { name: "Monash University", state: "VIC" },
  { name: "The University of Melbourne", state: "VIC" },
  { name: "University of New South Wales", state: "NSW" },
  { name: "University of Sydney", state: "NSW" },
  { name: "Adelaide University", state: "SA" },
  { name: "Queendsland Universty", state: "QLD" },
  { name: "Royal Melbourne Insitute of Technology", state: "VIC" },
];

export default HomePage;
