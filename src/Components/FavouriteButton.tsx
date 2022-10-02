import React, { useState } from "react";
import "./FavouriteButton.css";
// import { View } from 'react';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { auth, database, getDataFromCollection } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Button } from "@mui/material";

interface Props {
  favourite: boolean;
  suburbName: string;
}

export default function FavouriteButton(props: Props) {
  const onPress = () => {
    // change the state of the favourite button on click
    //setFavourite(!favourite);
  };

  const currentlyAFavorite = (
    <FavoriteIcon sx={{ fontSize: "3rem" }} color="primary" />
  );
  const notCurrentlyAFavorite = (
    <FavoriteBorderIcon sx={{ fontSize: "3rem"}} color="primary" />
  );

  const [favourite, setFavourite] = useState(props.favourite);

  const toggleFavourite = async (favourite: boolean) => {
    // get all the user, if logged in the data correlating to them, from firebase
    const docId = getDataFromCollection();

    if (favourite == true) {
      console.log("I clicked unfavorite");
      setFavourite(!favourite);

    } else {
      // (favourite == false)
      console.log("I clicked favorite");
      console.log(docId);
      setFavourite(!favourite);

    }
    console.log(favourite);
  };

  return (
    <Button
      className="favButton"
      onClick={() => toggleFavourite(favourite)}
      key={props.suburbName}
    >
      {favourite === true ? currentlyAFavorite : notCurrentlyAFavorite}
    </Button>
  );
}
