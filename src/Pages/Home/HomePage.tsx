import React from "react";
import "./HomePage.css";
import Stack from "@mui/material/Stack";
import InfoBox from "../../Components/AuxComponents/InfoBox";
import SearchBar from "../../Components/Headers/SearchBar";
import Banner from "../../Components/Headers/Banner";
import { auth } from "../../firebase"

import SimpleDialog from "../../Components/AuxComponents/SimpleDialog";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HomePage() {
  // POPUP STUFF
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(auth.currentUser);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    // setSelectedValue(value);
  };

  let navigate = useNavigate();
  const showDetails = () => {
    let path = `/details`;
    navigate(path);
  };

  const showResults = () => {
    let path = `/results`;
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
      <Banner/>
    </div>

    <div>
      <SearchBar/>
    </div>
  
    <div>
      <h2 className="HomePage-title" margin-left="50px"> Favourite Suburbs</h2>
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
          onClick={showResults}
        />
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
  { name: "Queensland Universty", state: "QLD" },
  { name: "Royal Melbourne Insitute of Technology", state: "VIC" },
];

export default HomePage;
