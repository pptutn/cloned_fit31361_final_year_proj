import React, { useState, useEffect } from "react";

interface Props {
  suburbName: string;
  postCode: string;
}

export function GetDomainData(props: Props) {
  const [apiCall, setApiCall] = useState<any>({ isLoaded: false, items: [] });

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
        setApiCall({
          items: json,
          isLoaded: true,
        });
      });
  };

  console.log("AHHHHH");
  useEffect(() => {
    console.log("useEffect called");
    callAPI();
  }, []);
  //useEffect to call API?

  let { isLoaded, items } = apiCall;
  if (!isLoaded) {
    return {
      // returns an object with rent data
      ...props,
      medianRent: "n/a",
      lowerRent: "n/a",
      upperRent: "n/a",
    };
  } else {
    const suburbData = items.series.seriesInfo[0].values; // we specify only 1 period, so we know there will be only 1 element
    console.log("SUCCESS", items);
    return {
      // returns an object with rent data
      ...props,
      medianRent: suburbData.medianRentListingPrice,
      lowerRent: suburbData.lowestRentListingPrice,
      upperRent: suburbData.highestRentListingPrice,
    };
  }
}
