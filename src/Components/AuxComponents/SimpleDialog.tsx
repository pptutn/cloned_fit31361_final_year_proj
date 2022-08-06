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
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { Slider } from "@mui/material";

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

  const marks = [
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

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Filters</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
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
        </ListItem>
        <h3>Distance from Campus</h3>
        <ListItem>
          <Slider
            aria-label="Volume"
            size="small"
            marks={marks}
            // step={5}
            valueLabelDisplay="auto"
            defaultValue={15}
            max={25}
          />
        </ListItem>
      </List>
    </Dialog>
  );
}

export default SimpleDialog;
