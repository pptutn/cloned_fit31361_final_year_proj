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

  const handleData = async () => {
    const searchData = await getSearchData();
    console.log("fuck", searchData);
    setSuburbs(searchData);
  };

  useEffect(() => {
    handleData();
  }, []);

  console.log("RETURNING SUBU", suburbs);
  return suburbs;
}

// const someRes = GetData();
// console.log("this is someRes", someRes);
