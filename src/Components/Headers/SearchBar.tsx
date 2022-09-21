import "./SearchBar.css";
import TextField from "@mui/material/TextField";
import { Autocomplete, Button, Grid, Paper, Stack, ThemeProvider } from "@mui/material";
import theme from "../../colourScheme";
import React from "react";
import { auth } from "../../firebase";
import SimpleDialog from "../AuxComponents/SimpleDialog";
import { useNavigate } from "react-router-dom";
import { Universities } from "../../constants";
import SearchPage from "../../Pages/Results/searchPage";


function SearchBar() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };
  
  let navigate = useNavigate();

  const showResults = () => {
    let path = `/results`;
    navigate(path);
  };

  return (
  <ThemeProvider theme={theme}>

    <Grid container spacing={2} className='grid' alignItems="center" marginLeft="50px" marginRight="50px">
      <Grid item xs={7}>
        <Paper className='paper'>
          <Autocomplete
            id="search-universities"
            color="primary"
            freeSolo
            options={Universities.map((option) => option.name)}
            renderInput={(params) => (
              <TextField {...params} label="Search for your University" fullWidth />
            )}
            onClick={showResults}
            onChange={showResults}
          />
          
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