import React, { useEffect, useState } from "react";
import "./FavouriteButton.css";
// import { View } from 'react';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { auth, user, database, getDataFromCollection } from "../firebase";
import { collection, doc, documentId, getDocs, query, where } from "firebase/firestore";
import { Button } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";

interface Props {
  favourite: boolean;
  suburbName: string;
  email: string|null;
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
    <FavoriteBorderIcon sx={{ fontSize: "3rem" }} color="primary" />
  );

  const [favourite, setFavourite] = useState(props.favourite);

  const toggleFavourite = async (favourite: boolean) => {
    console.log(props.email);
    const userRefs = collection(database, "users");
    

    // get all the user, if logged in the data correlating to them, from firebase
    const docId = getDataFromCollection();

    if ( favourite == true ) {
      console.log("I clicked unfavorite");
      setFavourite(!favourite);

      console.log(docId);
      


    } else {
      // (favourite == false)
      console.log("I clicked favorite");
      setFavourite(!favourite);

    }
    console.log(favourite);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(docId);
        // console.log(auth.currentUser);

      } else {
        // user is not logged in 
      }
    })
  }, []);

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
