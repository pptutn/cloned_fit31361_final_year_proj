import * as React from "react";
import { styled } from "@mui/material/styles";
import "./ExpandableComponent.css";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import FavouriteButton from "../FavouriteButton";
import { PanToolSharp, ThreeMpTwoTone } from "@mui/icons-material";
import { ThemeProvider } from "@emotion/react";
import theme from "../../colourScheme";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import TramIcon from "@mui/icons-material/Tram";
import TrainIcon from "@mui/icons-material/Train";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import { auth, user } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

interface Props {
  suburb: string;
  postCode: string;
  medianRentPrice: number;
  distance: number;
  carTime: number;
  ptvTime: number;
  bus: boolean;
  tram: boolean;
  train: boolean;
  rideShare: boolean;
  noBusStop: number;
  closestStation: string;
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "1.0rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function ExpandableComponent(props: Props) {
  const [expanded, setExpanded] = React.useState<string | false>();
  const [isLoggedIn, setLoggedIn] = React.useState(false);


  const [favourite, setFavourite] = React.useState(false);
  const [email, setEmail] = React.useState<string | null>("");

  const onPress = () => {
    setFavourite(!favourite);
  };

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const rentalWebsite: string =
    "https://www.domain.com.au/rent/" +
    props.suburb.split(" ").join("-") +
    "-vic-" +
    props.postCode;

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true); 
        setEmail(user.email);
      } else {
        setLoggedIn(false); 
      }
    })
  }, []);

    return (
      <div>
        <ThemeProvider theme={theme}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              className="accordian"
            >
              <Box>
                <Stack padding={2} spacing={3} direction="row" className="stack">
                  {isLoggedIn == true && <FavouriteButton
                    favourite={favourite}
                    suburbName={props.suburb}
                    email={email}
                  /> }
                  <h2>{props.suburb}</h2>
                  {props.bus == true && <DirectionsBusIcon className="busIcon" />}
                  {props.train == true && <TrainIcon className="trainIcon" />}
                  {props.tram == true && <TramIcon className="tramIcon" />}
                  {props.rideShare == true && (
                    <LocalTaxiIcon className="taxiIcon" />
                  )}
                </Stack>
              </Box>
            </AccordionSummary>

            <AccordionDetails>
              <div className="searchResult__infoBottom">
                <p>
                  {" "}
                  <b>Post Code: </b>
                  {props.postCode}
                </p>
                <p>
                  {" "}
                  <b>Average Rent for a 3 bedroom house: </b>$
                  {props.medianRentPrice} per week
                </p>
                <p>
                  {" "}
                  <b>Distance to university campus: </b>
                  {props.distance}km
                </p>
                {props.bus == true && (
                  <p>
                    {" "}
                    <b>Buses Accessible </b>{" "}
                    <DirectionsBusIcon className="smallBusIcon" />{" "}
                  </p>
                )}
                {props.train == true && (
                  <p>
                    {" "}
                    <b>Trains Accessible </b>
                    <TrainIcon className="smallTrainIcon" />{" "}
                  </p>
                )}
                {props.tram == true && (
                  <p>
                    {" "}
                    <b>Trams Accessible </b>
                    <TramIcon className="smallTramIcon" />{" "}
                  </p>
                )}
                {props.rideShare == true && (
                  <p>
                    {" "}
                    <b>Rideshare Services Available </b>{" "}
                    <LocalTaxiIcon className="smallTaxiIcon" />{" "}
                  </p>
                )}
                <p>
                  <b>Average Time by Car: </b>
                  {props.carTime} minutes
                </p>
                <p>
                  {" "}
                  <b>Average Time by Public Transport: </b>
                  {props.ptvTime} minutes
                </p>
                <p>
                  {" "}
                  <b>Number of bus stops in the area: </b>
                  {props.noBusStop} stops
                </p>
                <p>
                  <b>Closest Train Station: </b>
                  {props.closestStation}
                </p>
                <div className="Suburb__Hyperlink">
                  <p>
                    <a href={rentalWebsite}>
                      Click here to look at rental houses in {props.suburb}
                    </a>
                  </p>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </ThemeProvider>
      </div>
    );
  // } else {

  //   return (
  //     <div>
  //       <ThemeProvider theme={theme}>
  //         <Accordion
  //           expanded={expanded === "panel1"}
  //           onChange={handleChange("panel1")}
  //         >
  //           <AccordionSummary
  //             aria-controls="panel1d-content"
  //             id="panel1d-header"
  //             className="accordian"
  //           >
  //             <Box>
  //               <Stack padding={2} spacing={3} direction="row" className="stack">
  //                 <FavouriteButton
  //                   favourite={favourite}
  //                   suburbName={props.suburb}
  //                 />
  //                 <h2>{props.suburb}</h2>
  //                 {props.bus == true && <DirectionsBusIcon className="busIcon" />}
  //                 {props.train == true && <TrainIcon className="trainIcon" />}
  //                 {props.tram == true && <TramIcon className="tramIcon" />}
  //                 {props.rideShare == true && (
  //                   <LocalTaxiIcon className="taxiIcon" />
  //                 )}
  //               </Stack>
  //             </Box>
  //           </AccordionSummary>

  //           <AccordionDetails>
  //             <div className="searchResult__infoBottom">
  //               <p>
  //                 {" "}
  //                 <b>Post Code: </b>
  //                 {props.postCode}
  //               </p>
  //               <p>
  //                 {" "}
  //                 <b>Average Rent for a 3 bedroom house: </b>$
  //                 {props.medianRentPrice} per week
  //               </p>
  //               <p>
  //                 {" "}
  //                 <b>Distance to university campus: </b>
  //                 {props.distance}km
  //               </p>
  //               {props.bus == true && (
  //                 <p>
  //                   {" "}
  //                   <b>Buses Accessible </b>{" "}
  //                   <DirectionsBusIcon className="smallBusIcon" />{" "}
  //                 </p>
  //               )}
  //               {props.train == true && (
  //                 <p>
  //                   {" "}
  //                   <b>Trains Accessible </b>
  //                   <TrainIcon className="smallTrainIcon" />{" "}
  //                 </p>
  //               )}
  //               {props.tram == true && (
  //                 <p>
  //                   {" "}
  //                   <b>Trams Accessible </b>
  //                   <TramIcon className="smallTramIcon" />{" "}
  //                 </p>
  //               )}
  //               {props.rideShare == true && (
  //                 <p>
  //                   {" "}
  //                   <b>Rideshare Services Available </b>{" "}
  //                   <LocalTaxiIcon className="smallTaxiIcon" />{" "}
  //                 </p>
  //               )}
  //               <p>
  //                 <b>Average Time by Car: </b>
  //                 {props.carTime} minutes
  //               </p>
  //               <p>
  //                 {" "}
  //                 <b>Average Time by Public Transport: </b>
  //                 {props.ptvTime} minutes
  //               </p>
  //               <p>
  //                 {" "}
  //                 <b>Number of bus stops in the area: </b>
  //                 {props.noBusStop} stops
  //               </p>
  //               <p>
  //                 <b>Closest Train Station: </b>
  //                 {props.closestStation}
  //               </p>
  //               <div className="Suburb__Hyperlink">
  //                 <p>
  //                   <a href={rentalWebsite}>
  //                     Click here to look at rental houses in {props.suburb}
  //                   </a>
  //                 </p>
  //               </div>
  //             </div>
  //           </AccordionDetails>
  //         </Accordion>
  //       </ThemeProvider>
  //     </div>
  //   );
  // }

}
