import './searchPage.css';
import SearchResults from "./searchResults";
import { Button } from "@material-ui/core";
import {useNavigate} from 'react-router-dom';

function SearchPage(){
    let navigate = useNavigate();
    const showDetails = () => {
      let path = `/details`;
      navigate(path)
    }

    return (
        <div className='searchPage'>
            <div className = 'searchPage__info'>
                <h1>Ideal Suburbs</h1>
                <Button variant="outlined">Average Rent</Button>
                <Button variant="outlined">Distance from University</Button>
                <Button variant="outlined">More Filters</Button>
            </div>
            <SearchResults
                suburb = "Clayton"
                price = "$600"
                distance = "3.1km"
                crime = "15%"
                time = "0.1 hours"
                onClick={showDetails}
            />
            <SearchResults
                suburb = "Mount Waverley"
                price = "$650"
                distance = "7.2km"
                crime = "8%"
                time = "0.5 hours"
            />
            <SearchResults
                suburb = "Huntingdale"
                price = "$460"
                distance = "5.3km"
                crime = "12%"
                time = "0.4 hours"
            />
            <SearchResults
                suburb = "Chadstone"
                price = "$812"
                distance = "4.3km"
                crime = "23%"
                time = "0.3 hours"
            />
            <SearchResults
                suburb = "Clayton South"
                price = "$760"
                distance = "3.9km"
                crime = "32%"
                time = "0.2 hours"
            />
        </div>
    )
}

export default SearchPage