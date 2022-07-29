import React from "react";
import Box from "@mui/material/Box";

function InfoBox() {
  return (
    <Box
      sx={{
        width: 150,
        height: 150,
        backgroundColor: "#388e3c",
        "&:hover": {
          backgroundColor: "#66bb6a",
          opacity: [0.5, 0.5, 0.5],
        },
      }}
    ></Box>
  );
}

export default InfoBox;
