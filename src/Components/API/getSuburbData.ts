import { getRentData } from "../../Pages/Results/GetData";

const axios = require("axios").default;

interface returnData {
  id: string;
  suburbName: string;
  postCode: string;
  Median_Rent_Price: string;
  Distance: string;
  Car_Time: string;
  PTV_Time: string;
  Bus: boolean;
  Tram: boolean;
  Train: boolean;
  Ride_Share: boolean;
  noBusStop: number;
  closestStation: string;
}

export async function getSearchData() {
  const responseData = await axios.get("http://localhost:8080/api/suburbs");
  // console.log("resoponse data", responseData);
  // console.log(typeof responseData.data);

  // response data is object
  responseData.data.map((s: any) => {
    console.log("this is s", s);
    // getRentData(s);
  });
  return responseData.data;
}

// console.log("hi");
// getSearchData().then(function (result) {
//   console.log("this is result", result);
// });
// getSearchData();
