import "./searchPage.css";
import SearchResults from "./searchResults";
import { useState, useEffect } from "react";
import { getSearchData } from "../../Components/API/getSuburbData";
import React from "react";
import { Box, Button, Grid, Paper, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GetData } from "./GetData";
import { GetPTVData } from "../../Apis/GetPTVData";
import { ThemeProvider } from "@emotion/react";
import theme from "../../colourScheme";
import BackButton from "../../Components/BackButton/BackButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExpandableComponent from "../../Components/ExpandableComponent/ExpandableComponent";
import FavouriteButton from "../../Components/FavouriteButton";
import { IFilterValues } from "../../App";

interface searchProps {
  filterValues: IFilterValues;
}
// interface uniDictionaryI {
//   [index: string]: {
//     suburbName: string;
//     postCode: string;
//   }[];
// }

export interface suburbDataI {
  suburbName: string;
  postCode: string;
  [key: string]: any;
}

function SearchPage(props: searchProps) {
  let navigate = useNavigate();
  // const [suburbs, setSuburbs] = useState<any[]>([]);

  // let suburbDataTest: suburbDataI[] = [];

  // const handleData = async () => {
  //   const searchData = await getSearchData();
  //   setSuburbs(searchData);
  //   suburbDataTest = suburbs;
  // };

  // useEffect(() => {
  //   handleData();
  //   console.log("this suburbs", suburbs);
  // }, []);

  // console.log("new suburbs", suburbs);
  // console.log("TEST", suburbDataTest);

  // const renderSuburbResults = (localityData: suburbDataI[]) => {
  //   return localityData
  //     .map((s) => GetData(s))
  //     .map(
  //       (s) => <ExpandableComponent {...s}></ExpandableComponent>
  //       //     suburbName: string; postCode: string;
  //       // medianRent: number; lowerRent: number; upperRent: number; onClick?: any;
  //       // distance: any; carTime: any; ptvTime: any; ptvType: any; noBuses: any; closestStation: any;
  //     );
  // };

  // const suburbResults = () => GetData()
  // const subData = GetData();

  // console.log("this is get data", GetData());

  // let someArray: any[] = [];

  // GetData().map((s) => {
  //   console.log(s);
  //   // getRentData(s);
  //   someArray.push(s);
  // });

  // console.log("hi this is me", someArray);

  // someArray.map((s) => getRentData(s));

  // console.log("render", renderSuburbResults(suburbs));
  // const uniDictionary: uniDictionaryI = {
  //   "Monash University": monashClaytonSuburbs,
  //   "Monash University Peninsula": monashPeninsulaSuburbs,
  //   "The University of Melbourne": uniMelbParkvilleSuburbs,
  //   RMIT: rmitMelbSuburbs,
  // };

  // console.log("new suburbs", suburbDataTest);
  // compileData();

  // let rentData = monashClaytonSuburbs.map((s) => getRentData(s));
  // console.log("this is rent data", rentData);

  // subData.map((s) =>
  //   // <ExpandableComponent {...s} />
  //   console.log("final s", s)
  // );

  // console.log("fuck this shit honestly im so done", subData);

  const [suburbs, setSuburbs] = useState<suburbDataI[]>([]);

  const handleData = async () => {
    const searchData = await getSearchData();
    console.log("fuck", searchData);
    setSuburbs(searchData);
  };

  useEffect(() => {
    handleData();
  }, []);

  console.log("tNNNEW SUB", suburbs, Boolean(suburbs));

  suburbs.map((s) => console.log(s));

  return (
    <ThemeProvider theme={theme}>
      {/* add in the back button for navigation */}
      <Box>
        <Stack spacing={4} direction="row">
          <Button color="primary" onClick={() => navigate(-1)}>
            <ArrowBackIcon fontSize="large" />
          </Button>
          <div className="banner_right">
            <h1 className="h1">Ideal Suburbs</h1>
          </div>
        </Stack>
      </Box>

      <Box>
        <Stack padding={2} spacing={3} direction="row">
          <Button variant="contained">Average Rent</Button>
          <Button variant="contained">Distance from University</Button>
          <Button variant="contained">More Filters</Button>
        </Stack>
      </Box>

      {/* {renderSuburbResults(suburbs)} */}
      {/* {suburbs.map((elem) => (
        <SearchResults
          suburb={elem.Suburb}
          price={elem.Median_Rent_Price}
          distance={elem.Distance}
          carTime={elem.carTime}
          ptvTime={elem.ptvTime}
        />
      ))} */}
      {suburbs.length == 0 ? (
        suburbs.map(
          (s) => (
            <SearchResults
              postCode={s.postCode}
              suburbName={s.suburbName}
              upperRent={s.upperRent}
              lowerRent={s.lowerRent}
              medianRent={s.medianRent}
            />
          )
        )
      ) : (
        <div>ERROR</div>
      )}
    </ThemeProvider>
  );
}

const monashClaytonSuburbs = [
  { suburbName: "Clayton", postCode: "3168" },
  { suburbName: "Dandenong", postCode: "3175" },
  { suburbName: "Huntingdale", postCode: "3166" },
  { suburbName: "Chadstone", postCode: "3148" },
  { suburbName: "Clayton South", postCode: "3169" },
];

const monashPeninsulaSuburbs = [
  { suburbName: "Frankston", postCode: "3199" },
  { suburbName: "Langwarrin", postCode: "3910" },
  { suburbName: "Seaford", postCode: "3198" },
  { suburbName: "Mount Eliza", postCode: "3930" },
];

const uniMelbParkvilleSuburbs = [
  { suburbName: "Parkville", postCode: "3052" },
  { suburbName: "Carlton", postCode: "3053" },
  { suburbName: "Fitzroy", postCode: "3065" },
  { suburbName: "North Melbourne", postCode: "3051" },
  { suburbName: "Melbourne", postCode: "3000" },
];

const rmitMelbSuburbs = [
  { suburbName: "Parkville", postCode: "3052" },
  { suburbName: "Carlton", postCode: "3053" },
  { suburbName: "Fitzroy", postCode: "3065" },
  { suburbName: "North Melbourne", postCode: "3051" },
  { suburbName: "Melbourne", postCode: "3000" },
];

export default SearchPage;
