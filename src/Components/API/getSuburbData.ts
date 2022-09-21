const axios = require("axios").default;

export async function getSearchData() {
  const responseData = await axios.get("http://localhost:8080/api/suburbs");
  return responseData.data;
}

getSearchData();
