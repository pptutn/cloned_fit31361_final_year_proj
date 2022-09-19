import "./SearchBar.css";
import TextField from "@mui/material/TextField";
import { Button, Grid, Paper, ThemeProvider } from "@mui/material";
import { createStyles, makeStyles, Theme } from "@mui/material/styles";

import theme from "../../colourScheme";
import React from "react";
import { auth } from "../../firebase";
import SimpleDialog from "../AuxComponents/SimpleDialog";




function SearchBar() {

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(auth.currentUser);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    // setSelectedValue(value);
  };

  return (
  <ThemeProvider theme={theme}>

    <Grid container spacing={2} className='grid' alignItems="center">
      <Grid item xs={8}>
        <Paper className='paper' >
          <TextField 
            className="search-bar"
            color="success"
            fullWidth
            label="Search for your University">
          </TextField>
        </Paper>
      </Grid>

      <Grid item xs={2}>
        <Paper className='paper'>
          <Button 
            className="filter-button" 
            color="primary"
            variant="contained" 
            size="large" 
            fullWidth 
            onClick={handleClickOpen}>
            FILTERS
          </Button>
          <SimpleDialog
          selectedValue=""
          // selectedValue={         
          open={open}
          onClose={handleClose}
        />
        </Paper>
      </Grid>

      <Grid item xs={2} >
        <Paper className='paper'>
          <Button 
            className="filter-button" 
            color="secondary"
            variant="contained" 
            size="large" 
            fullWidth 
            onClick={handleClickOpen}>
            SEARCH
          </Button>
        </Paper>
      </Grid>

    </Grid>
    </ThemeProvider>

  );
}

export default SearchBar;