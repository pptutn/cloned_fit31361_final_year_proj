import React, { Dispatch, SetStateAction } from "react";
import "./HomePage.css";
import Stack from "@mui/material/Stack";
import InfoBox from "../../Components/AuxComponents/InfoBox";
import SearchBar from "../../Components/Headers/SearchBar";
import Banner from "../../Components/Headers/Banner";
import { useNavigate } from "react-router-dom";
import { IFilterValues } from "../../App";

export interface filterPropsI {
  filterVal: IFilterValues;
  selectedValue: IFilterValues;
  setSelectedValue: Dispatch<SetStateAction<IFilterValues>>;
}

function HomePage(props: filterPropsI) {
  // POPUP STUFF
  const [open, setOpen] = React.useState(false);
  // const [selectedValue, setSelectedValue] = React.useState(auth.currentUser);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: IFilterValues) => {
    setOpen(false);
    props.setSelectedValue(value);
  };

  const showResults = () => {
    // console.log("showing result (showResult)", props.selectedValue.campusCode);
    let path = `/results`;
    navigate(path);
  };

  let navigate = useNavigate();
  const showDetails = () => {
    let path = `/details`;
    navigate(path);
  };

  return (
    <Stack
      spacing={{ xs: 1, sm: 2, md: 4 }}
      sx={{ width: 1, height: 1 }}
      alignItems={"centre"}
      ml={2}
      mr={2}
    >
      <div>
        <Banner />
      </div>

      <div>
        <SearchBar {...props} />
      </div>
      <div>
        <h2 className="HomePage-title" margin-left="50px">
          {" "}
          Frequently Searched Suburbs
        </h2>
      </div>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        alignItems={"centre"}
        justifyContent={"space-evenly"}
      >
        <InfoBox
          name="Monash University"
          campusLocation="Clayton, VIC"
          onClick={() => {
            props.setSelectedValue({
              ...props.selectedValue,
              campusCode: "MON_CLA",
            });
            showResults();
          }}
        />
        <InfoBox
          name="Swinburne University"
          campusLocation="Hawthorn, VIC"
          onClick={() => {
            props.setSelectedValue({
              ...props.selectedValue,
              campusCode: "SWI_HAW",
            });
            showResults();
          }}
        />
        <InfoBox
          name="Royal Melb Institute of Tech"
          campusLocation="Melbourne, VIC"
          onClick={() => {
            props.setSelectedValue({
              ...props.selectedValue,
              campusCode: "RMI_MEL",
            });
            showResults();
          }}
        />
        <InfoBox
          name="Monash University (Caulfield)"
          campusLocation="Caulfield, VIC"
          onClick={() => {
            props.setSelectedValue({
              ...props.selectedValue,
              campusCode: "MON_CAU",
            });
            showResults();
          }}
        />
      </Stack>
    </Stack>
  );
}

export default HomePage;
