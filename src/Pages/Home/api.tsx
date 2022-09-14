import { Component, useState } from "react";

interface Props {
  suburbName: string;
  postCode: string;
}

export class Api extends Component<any, any> {
  constructor(props: Props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  SOME_URL: string = `https://api.domain.com.au/v2/suburbPerformanceStatistics/VIC/${this.props.suburbName}/${this.props.postCode}?propertyCategory=house&bedrooms=3&periodSize=Quarters&startingPeriodRelativeToCurrent=1&totalPeriods=1
  `;

  componentDidMount() {
    console.log(this.props.props);
    console.log(this.SOME_URL);
    fetch(this.SOME_URL, {
      headers: {
        "X-API-KEY": "key_cdf30e28a989dcbecfbe7d38cba466c4",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          isLoaded: true,
        });
      });
  }

  render() {
    let { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log(
        "items_test",
        items.series.seriesInfo[0].values.medianRentListingPrice
      );
      console.log("log", items.series.seriesInfo.values.medianRentListingPrice);
      return (
        <div className="apitest">
          {/* Median Price
          <ul>
            {items.series.seriesInfo.map((item: any) => (
              <li>{item.values.medianRentListingPrice}</li>
            ))}
          </ul>
          {items.series.seriesInfo[0].values.medianRentListingPrice} */}

          {items.series.seriesInfo.map((item: any) => (
            <div>
              <h2>{this.props.suburbName}</h2>
              &nbsp; Median Rent Prices&nbsp;
              {item.values.medianRentListingPrice}&nbsp; UpperBound:
              {item.values.highestRentListingPrice}&nbsp; LowerBound:{" "}
              {item.values.lowestRentListingPrice}
            </div>
          ))}
        </div>
      );
    }
  }
}
