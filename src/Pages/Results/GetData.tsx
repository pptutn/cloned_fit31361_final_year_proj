import React, { useState, useEffect } from "react";
import { getSearchData } from "../../Components/API/getSuburbData";
import { suburbDataI } from "./searchPage";

export interface Props {
  suburbName: string;
  postCode: string;
  [key: string]: any;
}

export function GetData() {
  const [suburbs, setSuburbs] = useState<suburbDataI[]>([]);

  // let suburbDataTest: suburbDataI[] = [];
  let suburbDataTest: any;

  const handleData = async () => {
    const searchData = await getSearchData();
    setSuburbs(searchData);
  };

  // setSuburbs(getSearchData());

  useEffect(() => {
    handleData();
    // setSuburbs(getSearchData());
    // console.log("handleData() called");
    // handleData().then(function (res) {
    //   suburbDataTest = res;
    //   console.log("this is res,", res, typeof res);

    //   res.map((s: Props) => getRentData(s));
    // });
  }, []);

  // handleData().then(function (res) {
  //   console.log("this is res", res);
  // });
  // handleData();

  // console.log("printing subs", suburbs);
  // suburbDataTest = suburbs;

  return suburbs;
}

// console.log("hi this is me", GetData());

export const getRentData = (props: suburbDataI) => {
  console.log("inside rent data");
  const [apiCall, setApiCall] = useState<any>({ isLoaded: false, items: [] });
  console.log("inside rent dat2a");
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
        console.log("setApi called");
        setApiCall({
          items: json,
          isLoaded: true,
        });
      });
  };

  // let suburbDataTest: suburbDataI[] = [];

  console.log("AHHHHH");
  useEffect(() => {
    console.log("useEffect called");
    callAPI();
  }, []);
  //useEffect to call API?
  // callAPI();

  console.log("calling API", props);
  let { isLoaded, items } = apiCall;
  let finalObject: suburbDataI = {
    ...props,
    medianRent: "n/a",
    lowerRent: "n/a",
    upperRent: "n/a",
  };

  if (isLoaded) {
    const suburbData = items.series.seriesInfo[0].values; // we specify only 1 period, so we know there will be only 1 element
    {
      console.log("SUCCESS", items);
      finalObject = {
        // // returns an object with rent data
        ...props,
        medianRent: suburbData.medianRentListingPrice,
        lowerRent: suburbData.lowestRentListingPrice,
        upperRent: suburbData.highestRentListingPrice,
      };
    }
  }
  return finalObject;
};

export const compileData = () => {
  let someArray: any[] = [];

  GetData().map((s) => {
    console.log(s);
    // getRentData(s);
    someArray.push(s);
  });

  console.log("hi this is me", someArray);

  someArray.map((s: suburbDataI) => {
    console.log(s.postCode);
    getRentData(s);
  });
};
