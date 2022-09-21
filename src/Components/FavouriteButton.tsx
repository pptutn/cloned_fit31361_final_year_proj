import React, { useState } from 'react';
// import { View } from 'react';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';

interface Props {
    favourite: boolean
    suburbName: string
}

export default function FavouriteButton(props: Props) {
    const onPress = () => {
        // change the state of the favourite button on click
        //setFavourite(!favourite);
    };

    const currentlyAFavorite = <FavoriteIcon sx={{ fontSize: '3rem' }} color="secondary" />
    const notCurrentlyAFavorite = <FavoriteBorderIcon className="searchResult__heart" sx={{ fontSize: '3rem' }} color="secondary" />

    const [favourite, setFavourite] = useState(props.favourite);

    const toggleFavourite = (favourite: boolean) => {
        if (favourite == true) {
            console.log("I clicked unfavorite")
            console.log(props)
            setFavourite(!favourite);

            //             fetch(`/api/users/${props.userId}/recipes/${recipeId}/remove`, { method: 'POST' })
            //             .then(console.log("This was a favorited recipe, but now it isnt!"));

        }
        else {
            // (favourite == false)
            console.log("I clicked favorite")
            setFavourite(!favourite);

            //             fetch(`/api/users/${props.userId}/recipes/${recipeId}/add`, { method: 'POST' })
            //             .then(console.log("This was not a favorited recipe. Now it is!"));
            //           }

            return !favourite;
        }
    };

    return (
        <button
            className=""
            onClick={() => toggleFavourite(props.favourite)}
            key={props.suburbName}>
            {favourite === true ? currentlyAFavorite : notCurrentlyAFavorite}
        </button>
    );
}



    //   if (favourite) {
    // filled in white heart appears if favourite is true
    // return (


    //   <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
    //     <View
    //       style={[
    //         {
    //           flexDirection: 'row',
    //         },
    //       ]}>
    //       <MaterialCommunityIcons name="heart" color="white" size={39} />
    //     </View>
    //   </TouchableOpacity>
    //     );
    //   } else {
    // white outlined heart appears if favourite is false
    // return (
    //     <FavoriteBorderIcon className="searchResult__heart" sx={{ fontSize: '3rem' }} color="secondary"/>

    //   <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
    //     <View
    //       style={[
    //         {
    //           flexDirection: 'row',
    //         },
    //       ]}>
    //       <MaterialCommunityIcons name="heart-outline" color="white" size={39} />
    //     </View>
    //   </TouchableOpacity>
    // );
