const axios = require("axios").default;

export async function getSearchData(campusCode: string) {
  // console.log("this is campusCode called: ", campusCode);
  // monash clayton
  // const responseData = await axios.get("http://localhost:8080/suburbs/MON_CLA");
  // latrobe bundoora
  // const responseData = await axios.get("http://localhost:8080/suburbs/LAT_BUN");
  // // victoria uni footscray
  // const responseData = await axios.get("http://localhost:8080/suburbs/VIC_FOO");
  // // swinburne hawthorn
  // const responseData = await axios.get("http://localhost:8080/suburbs/SWI_HAW");
  // // rmit melbourne
  // const responseData = await axios.get("http://localhost:8080/suburbs/RMI_MEL");

  const responseData = await axios.get(
    `http://localhost:8080/suburbs/${campusCode}`
  );
  return responseData.data;
}

// getSearchData();
