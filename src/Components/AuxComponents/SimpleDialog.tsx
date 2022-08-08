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

const emails = ["username@gmail.com", "user02@gmail.com"];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    // need to change this to allow for multiple values to be selected
    onClose(value);
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
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth="lg">
      <DialogTitle sx={{ alignItems: "center" }}>Filters</DialogTitle>
      <List
        sx={{
          pt: 0,
          width: "100%",
          maxWidth: 600,
          bgcolor: "background.paper",
          m: "25px",
        }}
      >
        {/* {emails.map((email) => (
          <ListItem
            button
            onClick={() => handleListItemClick(email)}
            key={email}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}
        <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick("addAccount")}
        >
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem> */}
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
          />
        </ListItem>
        <h3>Public Transport Access</h3>
        <ListItem>
          <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
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
          </Box>
        </ListItem>
        <h3>Late Night Transport Access</h3>
        <ListItem>
          <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
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
          </Box>
        </ListItem>
      </List>
    </Dialog>
  );
}

export default SimpleDialog;
