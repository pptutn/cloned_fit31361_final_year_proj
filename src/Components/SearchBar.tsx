import "./SearchBar.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function SearchBar() {
  return (
      <div className = 'result__header'>
          <div className='header__left'>
            <ArrowBackIcon />
          </div>

          <div className='header__center'>
            <input type="text" />
            <FilterListIcon />
            <SearchIcon />
        </div>

        <div id = 'blank__element'></div>
      </div>
  );
}

export default SearchBar;