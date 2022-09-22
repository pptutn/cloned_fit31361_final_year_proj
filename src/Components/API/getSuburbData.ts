import { getRentData } from "../../Pages/Results/GetData";
import { suburbDataI } from "../../Pages/Results/searchPage";

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
  const theFuckingData = responseData.data.map((s: any) => {
    console.log("this is s", s);
    // getRentData(s);
  });

  return responseData.data;
  // return theFuckingData;
}

export const anotherFunction = () => {
  let thisArray: any = [];

  getSearchData().then(function (result) {
    console.log("this is result", result);
    result.map((s: suburbDataI) => {
      console.log("ALSO S", s);
      // getRentData(s);
      thisArray.push({ suburbName: s.suburbName, postCode: s.postCode });
    });
  });

  console.log("this array", thisArray);
  return thisArray;
};

anotherFunction();

console.log("result", anotherFunction());

// console.log("hi");
// getSearchData().then(function (result) {
//   console.log("this is result", result);
// });
// getSearchData();
