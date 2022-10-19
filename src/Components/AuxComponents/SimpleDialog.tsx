import * as React from "react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import TramIcon from "@mui/icons-material/Tram";
import TrainIcon from "@mui/icons-material/Train";
import { green } from "@mui/material/colors";
import { Slider, Checkbox, FormControlLabel } from "@mui/material";
import { IFilterValues } from "../../App";
import { useNavigate } from "react-router-dom";
import { initialFilters } from "../../App";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: IFilterValues;
  onClose: (value: IFilterValues) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;
  const [currentSelection, setCurrentselection] = React.useState(selectedValue);
  const [busChecked, setBusChecked] = React.useState(initialFilters.bus);
  const [trainChecked, setTrainChecked] = React.useState(initialFilters.train);
  const [tramChecked, setTramChecked] = React.useState(initialFilters.tram);

  const handleClose = () => {
    onClose({
      ...currentSelection,
      bus: busChecked,
      train: trainChecked,
      tram: tramChecked,
    });
  };

  const handleListItemClick = (value: IFilterValues) => {
    // need to change this to allow for multiple values to be selected
    // onClose(value);
    setCurrentselection(value);
  };

  const handleTrainChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTrainChecked(event.target.checked);
    // handleListItemClick({ ...selectedValue, train: !trainChecked });
  };
  const handleTramChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTramChecked(event.target.checked);
    // handleListItemClick({ ...selectedValue, tram: !tramChecked });
  };
  const handleBusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBusChecked(event.target.checked);
    // handleListItemClick({ ...selectedValue, bus: !busChecked });
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
    {
      value: 600,
      label: "$600",
    },
    {
      value: 700,
      label: "$700",
    },
    {
      value: 800,
      label: "$800",
    },
    {
      value: 900,
      label: "$900",
    },
    {
      value: 1000,
      label: "$1000",
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
            defaultValue={initialFilters.distance}
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
            defaultValue={initialFilters.price}
            min={300}
            max={1000}
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
            <FormControlLabel
              label="Bus"
              control={
                <Checkbox checked={busChecked} onChange={handleBusChange} />
              }
            />
            <DirectionsBusIcon />
          </div>
          <div className="checkbox__filters">
            <FormControlLabel
              label="Tram"
              control={
                <Checkbox checked={tramChecked} onChange={handleTramChange} />
              }
            />
            <TramIcon />
          </div>
          <div className="checkbox__filters">
            <FormControlLabel
              label="Train"
              control={
                <Checkbox checked={trainChecked} onChange={handleTrainChange} />
              }
            />
            <TrainIcon />
          </div>
        </ListItem>
        {/* <h3>Late Night Transport Access</h3>
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
              setBusChecked(initialFilters.bus);
              setTrainChecked(initialFilters.train);
              setTramChecked(initialFilters.tram);

              setCurrentselection(props.selectedValue);
              // need a function to return filters to their initial value
            }}
          >
            Clear Filters
          </Button>
          <Button
            onClick={() => {
              handleClose();
              // showResults();
            }}
          >
            Done
          </Button>
        </ListItem>
      </List>
    </Dialog>
  );
}

export default SimpleDialog;
