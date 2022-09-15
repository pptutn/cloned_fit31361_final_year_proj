import "./SearchBar.css";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles"
import { Button, Grid, Paper, ThemeProvider } from "@material-ui/core";
import theme from "../../colourScheme";
import React from "react";
import { ClassNames } from "@emotion/react";




function SearchBar() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
  <ThemeProvider theme={theme}>

    <Grid container spacing={2} className='grid'>
      <Grid item xs={8}>
        <Paper className='paper'>
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
        </Paper>
      </Grid>

      <Grid item xs={2}>
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