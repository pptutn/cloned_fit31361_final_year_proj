import "./HomePage.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import InfoBox from "./InfoBox";

function HomePage() {
  return (
    <Stack
      spacing={{ xs: 1, sm: 2, md: 4 }}
      sx={{ width: 1, height: 1 }}
      alignItems={"centre"}
      ml={2}
      mr={2}
    >
      <div>
        <h1 className="HomePage-title"> StuCom.</h1>
        <Autocomplete
          id="search-universities"
          freeSolo
          sx={{ width: 0.9, height: 1 }}
          options={Universities.map((option) => option.name)}
          renderInput={(params) => (
            <TextField {...params} label="Search for your University" />
          )}
        />
        <h2 className="HomePage-title"> Frequently Searched Universities</h2>
      </div>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        alignItems={"centre"}
        justifyContent={"space-evenly"}
      >
        <InfoBox name="Monash University" campusLocation="Clayton" />
        <InfoBox name="The University of Melbourne" />
        <InfoBox name="University of Sydney" />
        <InfoBox name="University of NSW" />
      </Stack>
    </Stack>
  );
}

const Universities = [
  { name: "Monash University", state: "VIC" },
  { name: "The University of Melbourne", state: "VIC" },
  { name: "University of New South Wales", state: "MSW" },
  { name: "University of Sydney", state: "NSW" },
  { name: "Adelaide University", state: "SA" },
  { name: "Queendsland Universty", state: "QLD" },
  { name: "Royal Melbourne Insitute of Technology", state: "VIC" },
];

export default HomePage;
