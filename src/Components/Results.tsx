import "./Results.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Avatar } from '@material-ui/core';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Results() {
  return (

    // header
      <div className = 'result__header'>
        
        {/* banner */}
        <div className='banner'>
          <div className='banner__left'>
            <h1 className="app-title"> StuCom.</h1>
          </div>

          <div className='banner__right'>
            <Avatar />
          </div>
        </div>

        {/* header */}
        <div className = 'header'>
          <div className='header__left'>
            <ArrowBackIcon />
          </div>

          <div className='header__center'>
            <input type="text" />
            <FilterListIcon />
            <SearchIcon />
          </div>
        </div>
        
      </div>
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

export default Results;