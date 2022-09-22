import React, { Dispatch, SetStateAction } from "react";
import "./HomePage.css";
import Stack from "@mui/material/Stack";
import InfoBox from "../../Components/AuxComponents/InfoBox";
import SearchBar from "../../Components/Headers/SearchBar";
import Banner from "../../Components/Headers/Banner";
import { auth } from "../../firebase";

import SimpleDialog from "../../Components/AuxComponents/SimpleDialog";
import { Autocomplete, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IFilterValues } from "../../App";

interface homePageProps {
  filterVal: IFilterValues;
  selectedValue: IFilterValues;
  setSelectedValue: Dispatch<SetStateAction<IFilterValues>>;
}

function HomePage(props: homePageProps) {
  // POPUP STUFF
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(auth.currentUser);

  const handleClickOpen = () => {
    setOpen(true);
  };

  // sets the entire state
  const handleClose = (value: IFilterValues) => {
    setOpen(false);
    // setSelectedValue(value);
  };

  const showResults = () => {
    let path = `/results`;
    navigate(path);
  };

  const handleSelection = (value: IFilterValues) => {
    props.setSelectedValue(value);
  };
  let navigate = useNavigate();

  const showDetails = () => {
    let path = `/details`;
    navigate(path);
  };

  return (
    <Stack
      spacing={{ xs: 1, sm: 2, md: 4 }}
      sx={{ width: 1, height: 1 }}
      alignItems={"centre"}
      ml={2}
      mr={2}
    >
      <div>
        <Banner />
      </div>

      <div>
        <SearchBar
          filterVal={props.filterVal}
          selectedValue={props.selectedValue}
          setSelectedValue={props.setSelectedValue}
        />
      </div>

      <div>
        <h2 className="HomePage-title" margin-left="50px">
          {" "}
          Favourite Suburbs
        </h2>
      </div>

      {/* POPUP STUFF */}
      <div>
        <br />
        <Button variant="outlined" onClick={handleClickOpen}>
          FILTER MENU
        </Button>
        <SimpleDialog
          selectedValue={props.selectedValue}
          open={open}
          handleSelection={handleSelection}
          onClose={handleClose}
        />
      </div>
      <div>Uni {props.selectedValue.selectedUni}</div>
      <div>MAX Distance {props.selectedValue.distance}</div>
      <div>MAX Price {props.selectedValue.price}</div>
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
          onClick={showResults}
          // onClick={(x) => {
          //   console.log("HERE", x);
          // }}
          // onChange={showResults}
          onChange={(e) => {
            const t = e.target as HTMLInputElement;
            handleSelection({
              ...props.selectedValue,
              selectedUni: t.value,
            });
            console.log("changing", t.value);
          }}

          //
        />
        <h2 className="HomePage-title"> Frequently Searched Universities</h2>
      </div>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        alignItems={"centre"}
        justifyContent={"space-evenly"}
      >
        <InfoBox
          name="Monash University"
          campusLocation="Clayton, VIC"
          onClick={() => {
            handleSelection({
              ...props.selectedValue,
              selectedUni: "Monash University",
            });
            showResults();
          }}
        />
        <InfoBox
          name="The University of Melbourne"
          campusLocation="Parkville, VIC"
          onClick={() => {
            handleSelection({
              ...props.selectedValue,
              selectedUni: "The University of Melbourne",
            });
            showResults();
          }}
        />
        <InfoBox
          name="Monash University Peninsula"
          campusLocation="Frankston, VIC"
          onClick={() => {
            handleSelection({
              ...props.selectedValue,
              selectedUni: "Monash University Peninsula",
            });
            showResults();
          }}
        />
        <InfoBox
          name="Royal Melb Institute of Technology"
          campusLocation="Melbourne, VIC"
          onClick={() => {
            handleSelection({
              ...props.selectedValue,
              selectedUni: "RMIT",
            });
            showResults();
          }}
        />
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
  { name: "Queensland Universty", state: "QLD" },
  { name: "Royal Melbourne Insitute of Technology", state: "VIC" },
];

export default HomePage;
