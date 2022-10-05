const axios = require("axios").default;

export async function getSearchData() {
  const responseData = await axios.get("http://localhost:8080/suburbs/MON_CLA");
  return responseData.data;
}

getSearchData();
