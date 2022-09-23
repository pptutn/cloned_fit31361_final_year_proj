import { useEffect } from "react";
import { getRentData } from "../../Pages/Results/GetData";
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

export function getSearchData() {
  // const responseData = await axios.get("http://localhost:8080/api/suburbs");
  const responseData = axios
    .get("http://localhost:8080/api/suburbs")
    .then((response: any) => {
      const subData = response.data;
      console.log("This is first sub data", subData);
      // console.log("this is response", subData, typeof response);
      const withRentData = subData.map((s: any) => {
        newRentData(s);
        console.log("this is function call for rentData", newRentData(s));
      });

      // console.log("this is withRentData", withRentData);
    });

  // console.log("this is subData");
  return responseData.data;
}

export const newRentData = (props: suburbDataI) => {
  // console.log("inside rent data");
  // const [apiCall, setApiCall] = useState<any>({ isLoaded: false, items: [] });
  // console.log("inside rent dat2a");
  const RENT_COST_URL: string = `https://api.domain.com.au/v2/suburbPerformanceStatistics/VIC/${props.suburbName.replace(
    /\s/g,
    "%20"
  )}/${
    props.postCode
  }?propertyCategory=house&bedrooms=3&periodSize=Quarters&startingPeriodRelativeToCurrent=1&totalPeriods=1
`;

  const callAPI = () => {
    fetch(RENT_COST_URL, {
      headers: {
        "X-API-KEY": "key_cdf30e28a989dcbecfbe7d38cba466c4",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        // console.log("setApi called");
        // setApiCall({
        //   items: json,
        //   isLoaded: true,
        // });
        console.log("this is json", json);

        const suburbData = json.series.seriesInfo[0].values;

        console.log("this is sub data", suburbData);
        const finalObject = {
          // // returns an object with rent data
          ...props,
          medianRent: suburbData.medianRentListingPrice,
          lowerRent: suburbData.lowestRentListingPrice,
          upperRent: suburbData.highestRentListingPrice,
        };
        console.log("final object", finalObject);
        return finalObject;
      });
  };

  // // let suburbDataTest: suburbDataI[] = [];
  console.log("RETURN for rentData", callAPI());
  return callAPI();
  // console.log("AHHHHH");
  // useEffect(() => {
  //   console.log("useEffect called");
  //   callAPI();
  // }, []);
  //useEffect to call API?
  // callAPI();

  // console.log("calling API", props);
  // let { isLoaded, items } = apiCall;
  // let finalObject: suburbDataI = {
  //   ...props,
  //   medianRent: "n/a",
  //   lowerRent: "n/a",
  //   upperRent: "n/a",
  // };

  // if (isLoaded) {
  //   const suburbData = items.series.seriesInfo[0].values; // we specify only 1 period, so we know there will be only 1 element
  //   {
  //     console.log("SUCCESS", items);
  //     finalObject = {
  //       // // returns an object with rent data
  //       ...props,
  //       medianRent: suburbData.medianRentListingPrice,
  //       lowerRent: suburbData.lowestRentListingPrice,
  //       upperRent: suburbData.highestRentListingPrice,
  //     };
  //   }
  // }
  // return finalObject;
};
