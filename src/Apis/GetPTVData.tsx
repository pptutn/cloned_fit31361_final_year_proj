import React, { useState, useEffect } from "react";
import { idText } from "typescript";
import { PTV_API_KEY, PTV_USER_ID } from "../constants";
// import createHmac from "create-hmac";

const CryptoJS = require('crypto-js');

interface Props {
  suburbName: string;
  postCode: string;
}


export function GetPTVData(props: Props) {

    // function that takes in a string and returns a byte array
    const getBytes = (str: string) => {
        var str = "Hello World";
        var data = [];
        for (var i = 0; i < str.length; i++){  
            data.push(str.charCodeAt(i));
        }
        return data
    }
      
    const train_route_type = 0;
    const tram_route_type = 1;
    const bus_route_type = 2;
    const night_bus_route_type = 4;

    const baseUrl = "https://timetableapi.ptv.vic.gov.au";
    // const searchQueryString = "/v3/search/&max_distance=0&include_addresses=true&include_outlets=falsematch_stop_by_suburb=true&devid=";

    // function that creates the signature value. 
    // the signature value is a HMAC-SHA1 hash of the completed
    // request (minus the base URL but including the dev ID) and the API key
    const generateSignature = (uri:string) => {

        const HMAC_SHA1_ALGORITHM:string = "HmacSHA1";
        
        // convert the API key to a byte array 
        var keyBytes:number[] = getBytes(PTV_API_KEY);
        // convert the train URI to byte array
        var uriBytes:number[] = getBytes(uri);

        // let generated_signature = createHmac('sha1', "key").update("json").digest("base64");

        var generated_signature = CryptoJS.SHA1(uri, PTV_API_KEY).toString(CryptoJS.enc.Hex);

        return generated_signature;
        // return "";

    }

    // function that generates the search query string/URIs for a specified suburb, transport type
    // it also contains the dev ID
    const generateSearchURI = (transportType: number) => {
        // http://timetableapi.ptv.vic.gov.au/v3/search/Clayton?route_types=0&max_distance=0&include_addresses=true&include_outlets=false&match_stop_by_suburb=true&devid=3002236&signature=2C13C2E4EA49150AD0422E1F2F2481D26A695F4A

        const searchQueryString: string = 
        "/v3/search/" + props.suburbName 
            + "?route_types=" + transportType 
            + "&max_distance=0&include_addresses=true&include_outlets=false&match_stop_by_suburb=true&devid="
            + PTV_USER_ID ;
            
        return searchQueryString;
    }

    // all the URIs for train, tram, bus and night bus
    const trainURI = generateSearchURI(train_route_type);
    const tramURI = generateSearchURI(tram_route_type);
    const busURI = generateSearchURI(bus_route_type);
    const nightBusUri = generateSearchURI(night_bus_route_type);


    const [apiCall, setApiCall] = useState<any>({ isLoaded: false, items: [], error: null });
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [items, setItems] = useState([]);

    

    const trainData = () => {
        // base URL / version number / API name / query string
            // baseUrl = "http://timetableapi.ptv.vic.gov.au"
            // version number = "/v3"
            // API name = "/search/" + props.suburbName 
            // query string = "?route_types=" + transportType +
            //                "&max_distance=0&include_addresses=true&include_outlets=false&match_stop_by_suburb=true&devid="
            // + PTV_USER_ID ;
            // signature = "&signature=" + signature

        // const trainQuery = "https://timetableapi.ptv.vic.gov.au" + "/v3/search/" + props.suburbName 
        // + "?route_types=0&devid=" //&max_distance=0&include_addresses=true&include_outlets=false&match_stop_by_suburb=true&devid="
        // + PTV_USER_ID + "&signature=" + generateSignature(trainURI);

        const trainQuery = "http://timetableapi.ptv.vic.gov.au/v3/search/Clayton?route_types=0&max_distance=0&include_addresses=true&include_outlets=false&match_stop_by_suburb=true&" 
        + "devid=" + PTV_USER_ID + "&signature=" 
        + generateSignature("/v3/search/Clayton?route_types=0&max_distance=0&include_addresses=true&include_outlets=false&match_stop_by_suburb=true&devid=3002236");


        // console.log(fetch(trainQuery)
        // .then((res) => res.json()));

        fetch(trainQuery)
        .then((res) => res.json())
        .then((json) => {
            // setIsLoaded(true);
            // setItems(json);
          setApiCall({
            items: json,
            isLoaded: true,
          });
          console.log(apiCall.items);
        },
        (error) => {
            // setIsLoaded(true);
            // setError(error);
            setApiCall({
              isLoaded: true,
              error
            });
        })

    };

    const busData = (suburb: string) => {
        //
    }


    useEffect(() => {
        trainData();
      }, []);

    // if (error) {
    //     return <div>Error: {error}</div>;
    // } else if (!isLoaded) {
    //     return <div>Loading...</div>;
    // } else {
        // const PTVData = items
        // console.log(trainData);
        // return (
        //     <div></div>
        // );

        //    <ul>
        //     {/* get the json list and get the appropriate data from each obj  */}
        //      {items.map(item => (
        //       <li key={items}>
        //         {item.} {item}
        //       </li>
        //     ))}
            
        //   </ul>
        
    //   }
    return {

        
    }

}