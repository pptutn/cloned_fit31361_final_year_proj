import React from "react";
import Box from "@mui/material/Box";

interface Props {
  name?: string;
}

function InfoBox(props: Props) {
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
    >
      <p>{props.name}</p>
    </Box>
  );
}

export default InfoBox;
