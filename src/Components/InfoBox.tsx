import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import "./InfoBox.css";

interface Props {
  name?: string;
  campusLocation?: string;
}

function InfoBox(props: Props) {
  return (
    <Box
      sx={{
        width: 150,
        height: 150,
        backgroundColor: "#1AB65C",
        "&:hover": {
          backgroundColor: "#66bb6a",
          opacity: [0.5, 0.5, 0.5],
        },
        borderRadius: 2,
      }}
      // onClick={}
    >
      <Stack className={"Stack-stack"} ml={2} mr={2}>
        <p className={"Box-title"}>{props.name}</p>
        <p className={"Box-location"}>{props.campusLocation}</p>
      </Stack>
    </Box>
  );
}

export default InfoBox;
