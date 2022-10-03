import * as React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import TramIcon from "@mui/icons-material/Tram";
import TrainIcon from "@mui/icons-material/Train";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import Typography from "@mui/material/Typography";
import { blue, green } from "@mui/material/colors";
import { Box, Slider, Checkbox, FormControlLabel } from "@mui/material";
import { IFilterValues } from "../../App";
import { useNavigate } from "react-router-dom";

const emails = ["username@gmail.com", "user02@gmail.com"];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: IFilterValues;
  onClose: (value: IFilterValues) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;
  const [currentSelection, setCurrentselection] = React.useState(selectedValue);

  const handleClose = () => {
    onClose(currentSelection);
  };

  const handleListItemClick = (value: IFilterValues) => {
    // need to change this to allow for multiple values to be selected
    // onClose(value);
    setCurrentselection(value);
  };

  let navigate = useNavigate();
  const showResults = () => {
    let path = `/results`;
    navigate(path);
  };

  const distanceMarks = [
    {
      value: 0,
      label: "0 km",
    },
    {
      value: 5,
      label: "5 km",
    },
    {
      value: 10,
      label: "10 km",
    },
    {
      value: 15,
      label: "15 km",
    },
    {
      value: 20,
      label: "20 km",
    },
    {
      value: 25,
      label: "25 km",
    },
  ];

  const priceMarks = [
    {
      value: 0,
      label: "$0",
    },
    {
      value: 100,
      label: "$100",
    },
    {
      value: 200,
      label: "$200",
    },
    {
      value: 300,
      label: "$300",
    },
    {
      value: 400,
      label: "$400",
    },
    {
      value: 500,
      label: "$500",
    },
  ];

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      fullWidth
      maxWidth="lg"
      scroll="paper" // body is entire page, paper is just the dialog
      // sx={{
      //   justifyContent: "center", // aligns through main axis
      //   alignItems: "center",
      //   // bgcolor: "red",
      // }}
    >
      <DialogTitle sx={{ textAlign: "center" }}>FILTERS</DialogTitle>
      <List
        sx={{
          pt: 0,
          width: "100%",
          maxWidth: 600,
          // bgcolor: "green",
          // m: "100px",
          ml: "25%",
          flex: 1,
          justifyContent: "center", // aligns through main axis
          alignItems: "center", // aligns though secondary axis
        }}
      >
        <h3>Distance from Campus</h3>
        <ListItem>
          <Slider // NEED TO ADD an ONCHANGE HOOK
            aria-label="Volume"
            size="small"
            marks={distanceMarks}
            // step={5}
            valueLabelDisplay="auto"
            defaultValue={15}
            max={25}
            onChange={(e) => {
              const t = e.target as HTMLInputElement;
              handleListItemClick({
                ...selectedValue,
                distance: parseInt(t.value),
              });
            }}
          />
        </ListItem>
        <h3>Rent Price (Per week)</h3>
        <ListItem>
          <Slider // NEED TO ADD an ONCHANGE HOOK For all the below items
            sx={{
              color: green, // color is still blue wtf
            }}
            aria-label="Volume"
            size="small"
            marks={priceMarks}
            valueLabelDisplay="auto"
            defaultValue={100}
            max={500}
            onChange={(e) => {
              const t = e.target as HTMLInputElement;
              handleListItemClick({
                ...selectedValue,
                price: parseInt(t.value),
              });
            }}
          />
        </ListItem>
        <h3>Public Transport Access</h3>
        <ListItem
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            ml: 3,
            // bgcolor: "red",
          }}
        >
          <div className="checkbox__filters">
            <FormControlLabel label="Bus" control={<Checkbox />} />
            <DirectionsBusIcon />
          </div>
          <div className="checkbox__filters">
            <FormControlLabel label="Tram" control={<Checkbox />} />
            <TramIcon />
          </div>
          <div className="checkbox__filters">
            <FormControlLabel label="Train" control={<Checkbox />} />
            <TrainIcon />
          </div>
        </ListItem>
        <h3>Late Night Transport Access</h3>
        <ListItem
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            ml: 3,
            // bgcolor: "red",
          }}
        >
          <div className="checkbox__filters">
            <FormControlLabel label="Bus" control={<Checkbox />} />
            <DirectionsBusIcon />
          </div>
          <div className="checkbox__filters">
            <FormControlLabel label="Tram" control={<Checkbox />} />
            <TramIcon />
          </div>
          <div className="checkbox__filters">
            <FormControlLabel label="Train" control={<Checkbox />} />
            <TrainIcon />
          </div>
          <div className="checkbox__filters">
            <FormControlLabel label="Ride Share" control={<Checkbox />} />
            <LocalTaxiIcon />
          </div>
        </ListItem>
        {/* <h3>Crime Rates</h3>
        <ListItem>
          <Slider // NEED TO ADD an ONCHANGE HOOK For all the below items
            sx={{
              color: green, // color is still blue wtf
            }}
            aria-label="Volume"
            size="small"
            // marks={priceMarks}
            valueLabelDisplay="auto"
            defaultValue={100}
            max={500}
          />
        </ListItem> */}
        <ListItem
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            ml: 3,
            // bgcolor: "red",
          }}
        >
          <Button
            onClick={() => {
              setCurrentselection(props.selectedValue);
              // need a function to return filters to their initial value
            }}
          >
            Clear Filters
          </Button>
          <Button
            onClick={() => {
              handleClose();
              showResults();
            }}
          >
            Search
          </Button>
        </ListItem>
      </List>
    </Dialog>
  );
}

export default SimpleDialog;
