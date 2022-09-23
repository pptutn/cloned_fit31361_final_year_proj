import { PropaneSharp } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { suburbDataI } from "../../Pages/Results/searchPage";
// import {React}

const axios = require("axios").default;

// interface returnData {
//   id: string;
//   suburbName: string;
//   postCode: string;
//   Median_Rent_Price: string;
//   Distance: string;
//   Car_Time: string;
//   PTV_Time: string;
//   Bus: boolean;
//   Tram: boolean;
//   Train: boolean;
//   Ride_Share: boolean;
//   noBusStop: number;
//   closestStation: string;
// }

interface suburbReturnI {
  suburbName: string;
  postCode: string;
  medianRent: string;
  lowerRent: string;
  upperRent: string;
  [key: string]: any;
}

export function getSearchData() {
  // const responseData = await axios.get("http://localhost:8080/api/suburbs");
  let someArray: any[] = [];
  const responseData = axios
    .get("http://localhost:8080/api/suburbs")
    .then(async (response: any) => {
      const subData = response.data;
      const withRentData = await subData.map((s: any) => {
        newRentData(s).then((data) => {
          console.log("this is data", data);
          someArray.push(data);
          return data;
        });
      });

      console.log(
        "SUB",
        subData.map((s: suburbDataI) => newRentData(s))
      );
      console.log("this is withRentData", withRentData);
    });
  console.log("array", someArray);
  return someArray;
}

export const newRentData = async (
  props: suburbDataI
): Promise<suburbReturnI> => {
  const RENT_COST_URL: string = `https://api.domain.com.au/v2/suburbPerformanceStatistics/VIC/${props.suburbName.replace(
    /\s/g,
    "%20"
  )}/${
    props.postCode
  }?propertyCategory=house&bedrooms=3&periodSize=Quarters&startingPeriodRelativeToCurrent=1&totalPeriods=1
`;

  const fetchRes = await fetch(RENT_COST_URL, {
    headers: {
      "X-API-KEY": "key_cdf30e28a989dcbecfbe7d38cba466c4",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Server response wasn't OK");
      }
    })
    .then((json) => {
      const suburbData = json.series.seriesInfo[0].values;
      // console.log("this is sub data", suburbData);
      const result = {
        // // returns an object with rent data
        ...props,
        medianRent: suburbData.medianRentListingPrice,
        lowerRent: suburbData.lowestRentListingPrice,
        upperRent: suburbData.highestRentListingPrice,
      };
      // console.log("final object", finalObject);
      // return finalObject;
      // finalObject = result;
      return result;
    });

  return fetchRes;
};
