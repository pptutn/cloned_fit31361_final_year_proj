import { Subscript, SubscriptSharp } from "@mui/icons-material";
import { suburbProps } from "../ExpandableComponent/ExpandableComponent";

export const calcScore = (subs: suburbProps) => {
  return (
    2 *
    Math.round(
      -subs.distance * 0.39 +
        (500 - subs.medianRentPrice) * 0.47 +
        +(subs.bus || subs.train || subs.tram) * 0.14
    )
  );
};

export const GetScore = (subs: suburbProps) => {
  // ({ ...subs });
  // ({ ...subs, score: calcScore(subs) });
  subs;
};
